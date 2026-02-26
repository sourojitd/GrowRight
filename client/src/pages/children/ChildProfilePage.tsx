import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Target, Sparkles, Route, Trash2, Edit2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { apiGet } from '@/lib/api';
import { useChildStore } from '@/stores/childStore';
import { useMilestones } from '@/hooks/useMilestones';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Progress from '@/components/ui/Progress';
import Modal from '@/components/ui/Modal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { PageSpinner } from '@/components/ui/Spinner';
import { formatDate, getCategoryLabel, getCategoryDotColor } from '@/lib/utils';
import toast from 'react-hot-toast';
import type { Child } from '@/types';

export default function ChildProfilePage() {
  const { childId } = useParams<{ childId: string }>();
  const navigate = useNavigate();
  const removeChild = useChildStore((s) => s.removeChild);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { data: child, isLoading } = useQuery({
    queryKey: ['child', childId],
    queryFn: () => apiGet<Child>(`/children/${childId}`),
    enabled: !!childId,
  });

  const { progress, summary } = useMilestones(childId);

  if (isLoading) return <PageSpinner />;
  if (!child) return null;

  const handleDelete = async () => {
    try {
      await removeChild(child.id);
      toast.success('Child profile deleted');
      navigate('/children');
    } catch {
      toast.error('Failed to delete');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      {/* Profile Header */}
      <Card variant="elevated" padding="none" className="overflow-hidden">
        <div className="h-32 bg-gradient-to-br from-accent-blue/15 via-accent-purple/10 to-accent-teal/15" />
        <div className="px-8 pb-8 -mt-10">
          <div className="flex items-end gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-card-elevated flex items-center justify-center border-4 border-white">
              <span className="text-display text-gradient">{child.name.charAt(0)}</span>
            </div>
            <div className="flex-1 pb-1">
              <h1 className="text-display-sm text-text-primary">{child.name}</h1>
              <p className="text-body text-gradient-blue font-medium">{child.ageFormatted}</p>
            </div>
            <div className="flex gap-2 pb-1">
              <Button variant="secondary" size="sm">
                <Edit2 className="w-4 h-4" /> Edit
              </Button>
              <Button variant="danger" size="sm" onClick={() => setShowDeleteModal(true)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-subhead text-text-secondary">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Born {formatDate(child.dateOfBirth)}
            </div>
            {child.gender && (
              <Badge variant={child.gender === 'MALE' ? 'blue' : 'purple'}>
                {child.gender === 'MALE' ? 'Boy' : child.gender === 'FEMALE' ? 'Girl' : 'Other'}
              </Badge>
            )}
            {child.bloodGroup && <Badge>{child.bloodGroup}</Badge>}
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Card variant="elevated" className="stat-card-green flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-green/20 to-accent-teal/20 flex items-center justify-center">
            <Target className="w-6 h-6 text-accent-green" />
          </div>
          <div>
            <p className="text-caption text-text-tertiary">Milestones Achieved</p>
            <p className="text-title text-text-primary">
              <AnimatedCounter target={summary?.achieved || 0} />
            </p>
          </div>
        </Card>
        <Card variant="elevated" className="stat-card-orange flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-orange/20 to-accent-red/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-accent-orange" />
          </div>
          <div>
            <p className="text-caption text-text-tertiary">Activities Done</p>
            <p className="text-title text-text-primary">
              <AnimatedCounter target={child.completedActivities || 0} />
            </p>
          </div>
        </Card>
        <Card variant="elevated" className="stat-card-purple flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/10 flex items-center justify-center">
            <Route className="w-6 h-6 text-accent-purple" />
          </div>
          <div>
            <p className="text-caption text-text-tertiary">Total Milestones</p>
            <p className="text-title text-text-primary">
              <AnimatedCounter target={summary?.total || 0} />
            </p>
          </div>
        </Card>
      </div>

      {/* Category Progress */}
      <AnimatedSection>
        <Card variant="elevated">
          <h3 className="text-headline text-text-primary mb-6">Development by Category</h3>
          <div className="space-y-5">
            {progress.map((p) => (
              <div key={p.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getCategoryDotColor(p.category) }}
                    />
                    <span className="text-subhead font-medium text-text-primary">
                      {getCategoryLabel(p.category)}
                    </span>
                  </div>
                  <span className="text-caption text-text-secondary">
                    {p.achieved} of {p.total}
                  </span>
                </div>
                <Progress value={p.percentage} showLabel />
              </div>
            ))}
          </div>
        </Card>
      </AnimatedSection>

      {/* Delete Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Child Profile"
        size="sm"
      >
        <p className="text-body text-text-secondary mb-6">
          Are you sure you want to delete <strong>{child.name}</strong>'s profile? This action
          cannot be undone and will remove all milestone tracking data.
        </p>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)} className="flex-1">
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete} className="flex-1">
            Delete
          </Button>
        </div>
      </Modal>
    </motion.div>
  );
}
