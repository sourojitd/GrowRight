import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Package, Heart, Sparkles, ExternalLink } from 'lucide-react';
import ThoughtBubble from '@/components/toys/ThoughtBubble';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPost, apiDelete } from '@/lib/api';
import { useChildren } from '@/hooks/useChildren';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import { PageSpinner } from '@/components/ui/Spinner';
import StaggerContainer, { staggerItem } from '@/components/shared/StaggerContainer';
import { cn, getCategoryColor, getCategoryLabel } from '@/lib/utils';
import type { Toy, MilestoneCategory } from '@/types';
import SEO from '@/components/shared/SEO';
import toast from 'react-hot-toast';

const categories: MilestoneCategory[] = ['MOTOR', 'COGNITIVE', 'SPEECH', 'SOCIAL', 'EMOTIONAL'];

export default function ToysPage() {
  const { selectedChild } = useChildren();
  const queryClient = useQueryClient();
  const [activeCategory, setActiveCategory] = useState<MilestoneCategory | 'ALL'>('ALL');
  const [hoveredToyId, setHoveredToyId] = useState<string | null>(null);

  const { data: toys = [], isLoading } = useQuery({
    queryKey: ['toys', 'child', selectedChild?.id],
    queryFn: () =>
      selectedChild
        ? apiGet<(Toy & { isSaved: boolean })[]>(`/toys/child/${selectedChild.id}`)
        : apiGet<Toy[]>('/toys'),
    enabled: true,
  });

  const saveMutation = useMutation({
    mutationFn: ({ toyId }: { toyId: string }) =>
      apiPost(`/toys/child/${selectedChild!.id}/${toyId}`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toys'] });
      toast.success('Toy saved!');
    },
    onError: () => toast.error('Failed to save toy'),
  });

  const unsaveMutation = useMutation({
    mutationFn: ({ toyId }: { toyId: string }) =>
      apiDelete(`/toys/child/${selectedChild!.id}/${toyId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toys'] });
      toast.success('Toy removed from saved');
    },
    onError: () => toast.error('Failed to unsave toy'),
  });

  if (!selectedChild) {
    return (
      <EmptyState
        icon={Gift}
        title="Select a child"
        description="Add a child profile to see recommended toys."
        actionLabel="Add Child"
        onAction={() => window.location.assign('/children/add')}
      />
    );
  }

  if (isLoading) return <PageSpinner />;

  const filtered =
    activeCategory === 'ALL'
      ? toys
      : toys.filter((t) => t.category === activeCategory);

  function formatAgeRange(min: number, max: number): string {
    const fmt = (m: number) => (m < 12 ? `${m}m` : `${Math.floor(m / 12)}y${m % 12 ? ` ${m % 12}m` : ''}`);
    return `${fmt(min)} – ${fmt(max)}`;
  }

  return (
    <StaggerContainer className="space-y-8">
      <SEO title="Toys" description="Get age-appropriate toy recommendations matched to your child's developmental stage." path="/toys" />
      <motion.div variants={staggerItem}>
        <h1 className="text-display-sm text-text-primary">Toy Recommendations</h1>
        <p className="text-body text-text-secondary mt-1">
          Age-appropriate toys for <span className="text-gradient">{selectedChild.name}</span> ({selectedChild.ageFormatted})
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div variants={staggerItem} className="flex gap-2 overflow-x-auto pb-1">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveCategory('ALL')}
          className={cn(
            'px-4 py-2 rounded-full text-subhead font-medium transition-all duration-200 whitespace-nowrap',
            activeCategory === 'ALL'
              ? 'bg-accent-blue text-white shadow-glow-blue'
              : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
          )}
        >
          All
        </motion.button>
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-4 py-2 rounded-full text-subhead font-medium transition-all duration-200 whitespace-nowrap',
              activeCategory === cat
                ? getCategoryColor(cat)
                : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
            )}
          >
            {getCategoryLabel(cat)}
          </motion.button>
        ))}
      </motion.div>

      {/* Toy Grid */}
      <motion.div variants={staggerItem} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((toy, index) => {
          const isSaved = 'isSaved' in toy && toy.isSaved;
          return (
            <motion.div
              key={toy.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, type: 'spring', stiffness: 200, damping: 20 }}
              onMouseEnter={() => setHoveredToyId(toy.id)}
              onMouseLeave={() => setHoveredToyId(null)}
              className="relative"
            >
              <AnimatePresence>
                {hoveredToyId === toy.id && toy.imageUrl && (
                  <ThoughtBubble
                    imageUrl={toy.imageUrl}
                    alt={toy.title}
                  />
                )}
              </AnimatePresence>
              <Card
                variant="gradient-border"
                className={cn('relative', isSaved && 'bg-accent-red/5')}
              >
                {isSaved && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-red to-accent-orange flex items-center justify-center shadow-glow-red">
                      <Heart className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3 mb-3">
                  <Badge className={getCategoryColor(toy.category)}>
                    {getCategoryLabel(toy.category)}
                  </Badge>
                  <span className="text-caption text-text-tertiary">
                    {formatAgeRange(toy.minAgeMonths, toy.maxAgeMonths)}
                  </span>
                </div>

                <h3 className="text-headline text-text-primary mb-1">{toy.title}</h3>
                <p className="text-subhead text-text-secondary mb-3">{toy.description}</p>

                {toy.suggestedActivities.length > 0 && (
                  <div className="mb-3">
                    <p className="text-caption font-medium text-text-primary mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
                      Suggested Activities
                    </p>
                    <ul className="space-y-1">
                      {toy.suggestedActivities.map((activity, i) => (
                        <li key={i} className="text-caption text-text-tertiary leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-1.5 before:text-text-quaternary">
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {toy.materials.length > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="w-3.5 h-3.5 text-text-tertiary flex-shrink-0" />
                    <span className="text-caption text-text-secondary">
                      {toy.materials.join(', ')}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  {selectedChild && (
                    <Button
                      size="sm"
                      variant={isSaved ? 'secondary' : 'gradient'}
                      onClick={() =>
                        isSaved
                          ? unsaveMutation.mutate({ toyId: toy.id })
                          : saveMutation.mutate({ toyId: toy.id })
                      }
                      disabled={saveMutation.isPending || unsaveMutation.isPending}
                    >
                      <Heart className={cn('w-3.5 h-3.5', isSaved && 'fill-current')} />
                      {isSaved ? 'Saved' : 'Save'}
                    </Button>
                  )}
                  {toy.purchaseUrl && (
                    <a
                      href={toy.purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-caption font-medium text-accent-blue bg-accent-blue/10 hover:bg-accent-blue/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Buy Online
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {filtered.length === 0 && (
        <EmptyState
          icon={Gift}
          title="No toys found"
          description="Try selecting a different category."
        />
      )}

      {/* Floating Status Pill */}
      <AnimatePresence>
        {toys.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="fixed bottom-6 left-0 lg:left-[260px] w-full lg:w-[calc(100%-260px)] z-50 flex justify-center pointer-events-none"
          >
            <div className="status-pill-border rounded-full pointer-events-auto">
              <div className="flex items-center gap-2 rounded-full px-4 py-2 glass shadow-lg">
                <Heart className="w-3.5 h-3.5 text-accent-red shrink-0" />
                <span className="text-caption font-semibold text-text-primary tabular-nums whitespace-nowrap">
                  {toys.filter((t) => 'isSaved' in t && t.isSaved).length}
                  <span className="font-normal text-text-secondary"> of {toys.length} saved</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </StaggerContainer>
  );
}
