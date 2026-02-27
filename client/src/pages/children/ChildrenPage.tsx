import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Baby, Calendar, Target } from 'lucide-react';
import { useChildren } from '@/hooks/useChildren';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import EmptyState from '@/components/ui/EmptyState';
import { PageSpinner } from '@/components/ui/Spinner';
import StaggerContainer, { staggerItem } from '@/components/shared/StaggerContainer';
import { formatDate } from '@/lib/utils';
import SEO from '@/components/shared/SEO';

export default function ChildrenPage() {
  const { children, isLoading } = useChildren();

  if (isLoading) return <PageSpinner />;

  if (children.length === 0) {
    return (
      <EmptyState
        icon={Baby}
        title="No children yet"
        description="Add your child's profile to start tracking their development milestones and activities."
        actionLabel="Add your first child"
        onAction={() => window.location.assign('/children/add')}
      />
    );
  }

  return (
    <StaggerContainer className="space-y-8">
      <SEO title="Children" description="Manage your children's profiles and track their developmental progress." path="/children" />
      <motion.div variants={staggerItem} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-display-sm text-text-primary">Children</h1>
          <p className="text-body text-text-secondary mt-1">
            Manage your children's profiles
          </p>
        </div>
        <Link to="/children/add">
          <Button variant="gradient" className="w-full sm:w-auto">
            <Plus className="w-4 h-4" />
            Add Child
          </Button>
        </Link>
      </motion.div>

      <motion.div variants={staggerItem} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children.map((child, index) => (
          <motion.div
            key={child.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Link to={`/children/${child.id}`}>
              <Card interactive variant="gradient-border" padding="none" className="overflow-hidden">
                {/* Header gradient */}
                <div className="h-24 bg-gradient-to-br from-accent-blue/15 via-accent-purple/10 to-accent-teal/15 relative">
                  <div className="absolute -bottom-8 left-6">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-card-elevated flex items-center justify-center">
                      <span className="text-display-sm text-gradient">
                        {child.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pt-12 pb-6">
                  <h3 className="text-headline text-text-primary">{child.name}</h3>
                  <p className="text-subhead text-gradient-blue font-medium">{child.ageFormatted}</p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-caption text-text-secondary">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Born {formatDate(child.dateOfBirth)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-caption text-text-secondary">
                      <Target className="w-3.5 h-3.5" />
                      <span>{child.achievedMilestones || 0} milestones achieved</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {child.gender && (
                      <Badge variant={child.gender === 'MALE' ? 'blue' : 'purple'}>
                        {child.gender === 'MALE' ? 'Boy' : child.gender === 'FEMALE' ? 'Girl' : 'Other'}
                      </Badge>
                    )}
                    {child.bloodGroup && <Badge>{child.bloodGroup}</Badge>}
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </StaggerContainer>
  );
}
