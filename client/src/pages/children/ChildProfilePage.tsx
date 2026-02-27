import { useState, useEffect, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Target, Sparkles, Route, Trash2, Edit2, CheckCheck } from 'lucide-react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPost, getApiErrorMessage } from '@/lib/api';
import { useChildStore } from '@/stores/childStore';
import { useMilestones } from '@/hooks/useMilestones';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Badge from '@/components/ui/Badge';
import Progress from '@/components/ui/Progress';
import Modal from '@/components/ui/Modal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SEO from '@/components/shared/SEO';
import { PageSpinner } from '@/components/ui/Spinner';
import { getProfileTheme } from '@/components/children/profileTheme';
import ProfileBannerDecorations from '@/components/children/ProfileBannerDecorations';
import { formatDate, getCategoryLabel, getCategoryDotColor } from '@/lib/utils';
import toast from 'react-hot-toast';
import type { Child } from '@/types';

export default function ChildProfilePage() {
  const { childId } = useParams<{ childId: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const removeChild = useChildStore((s) => s.removeChild);
  const updateChild = useChildStore((s) => s.updateChild);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isBulkCompleting, setIsBulkCompleting] = useState(false);
  const [editForm, setEditForm] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    notes: '',
  });
  const [editErrors, setEditErrors] = useState<Record<string, string>>({});

  const { data: child, isLoading } = useQuery({
    queryKey: ['child', childId],
    queryFn: () => apiGet<Child>(`/children/${childId}`),
    enabled: !!childId,
  });

  const { progress, summary } = useMilestones(childId);

  const { data: pastIncomplete } = useQuery({
    queryKey: ['past-incomplete', childId],
    queryFn: () => apiGet<{ count: number; ageMonths: number }>(`/activities/child/${childId}/past-incomplete`),
    enabled: !!childId,
  });

  useEffect(() => {
    if (child) {
      setEditForm({
        name: child.name,
        dateOfBirth: child.dateOfBirth.slice(0, 10),
        gender: child.gender || '',
        bloodGroup: child.bloodGroup || '',
        notes: child.notes || '',
      });
    }
  }, [child]);

  const theme = getProfileTheme(child?.gender);

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

  const handleEdit = async (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!editForm.name.trim()) errs.name = 'Name is required';
    if (!editForm.dateOfBirth) {
      errs.dateOfBirth = 'Date of birth is required';
    } else {
      const dob = new Date(editForm.dateOfBirth);
      const now = new Date();
      if (dob > now) errs.dateOfBirth = 'Date of birth cannot be in the future';
      const ageYears = (now.getTime() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
      if (ageYears > 18) errs.dateOfBirth = 'Child must be 18 years or younger';
    }
    if (Object.keys(errs).length > 0) return setEditErrors(errs);

    setIsEditing(true);
    try {
      await updateChild(child.id, {
        name: editForm.name,
        dateOfBirth: editForm.dateOfBirth,
        gender: (editForm.gender || undefined) as 'MALE' | 'FEMALE' | 'OTHER' | undefined,
        bloodGroup: editForm.bloodGroup || undefined,
        notes: editForm.notes || undefined,
      });
      await queryClient.invalidateQueries({ queryKey: ['child', childId] });
      toast.success('Profile updated');
      setShowEditModal(false);
    } catch (err) {
      toast.error(getApiErrorMessage(err, 'Failed to update'));
    } finally {
      setIsEditing(false);
    }
  };

  const handleBulkComplete = async () => {
    setIsBulkCompleting(true);
    try {
      const result = await apiPost<{ completed: number }>(`/activities/child/${child.id}/bulk-complete-past`);
      if (result.completed > 0) {
        toast.success(`Marked ${result.completed} past activities as complete`);
        await queryClient.invalidateQueries({ queryKey: ['past-incomplete', childId] });
        await queryClient.invalidateQueries({ queryKey: ['child', childId] });
      } else {
        toast.success('All past activities are already complete');
      }
    } catch {
      toast.error('Failed to mark activities');
    } finally {
      setIsBulkCompleting(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <SEO title={`${child?.name ?? 'Child'}'s Profile`} description="View your child's developmental milestones, activities, and growth progress." />
      {/* Profile Header */}
      <Card variant="elevated" padding="none" className="overflow-hidden">
        <div className={`h-24 sm:h-32 relative overflow-hidden ${theme.bannerGradient}`}>
          <ProfileBannerDecorations theme={theme.decorations} />
        </div>
        <div className="px-4 sm:px-8 pb-6 sm:pb-8 -mt-8 sm:-mt-10">
          <div className="flex items-end gap-4 sm:gap-6">
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${theme.avatarBg} shadow-card-elevated flex items-center justify-center border-4 border-white flex-shrink-0`}>
              <span className="text-display-sm sm:text-display" style={{ background: theme.avatarTextGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{child.name.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0 pb-1">
              <h1 className="text-headline sm:text-display-sm text-text-primary truncate">{child.name}</h1>
              <p className="text-subhead sm:text-body text-gradient-blue font-medium">{child.ageFormatted}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant="secondary" size="sm" onClick={() => setShowEditModal(true)}>
              <Edit2 className="w-4 h-4" /> Edit
            </Button>
            <Button variant="danger" size="sm" onClick={() => setShowDeleteModal(true)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-subhead text-text-secondary">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Born {formatDate(child.dateOfBirth)}
            </div>
            {child.gender && (
              <Badge variant={theme.badgeVariant}>
                {child.gender === 'MALE' ? 'Boy' : child.gender === 'FEMALE' ? 'Girl' : 'Other'}
              </Badge>
            )}
            {child.bloodGroup && <Badge>{child.bloodGroup}</Badge>}
          </div>
        </div>
      </Card>

      {/* Past Activities Banner */}
      {pastIncomplete && pastIncomplete.count > 0 && (
        <AnimatedSection>
          <Card variant="elevated" className="border border-accent-orange/20 bg-gradient-to-r from-accent-orange/5 to-accent-yellow/5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-xl bg-accent-orange/15 flex items-center justify-center flex-shrink-0">
                  <CheckCheck className="w-5 h-5 text-accent-orange" />
                </div>
                <div>
                  <p className="text-subhead font-medium text-text-primary">
                    {pastIncomplete.count} past {pastIncomplete.count === 1 ? 'activity' : 'activities'} not yet marked
                  </p>
                  <p className="text-caption text-text-secondary">
                    Activities for ages below {child.ageFormatted} can be marked as complete
                  </p>
                </div>
              </div>
              <Button
                variant="gradient"
                size="sm"
                isLoading={isBulkCompleting}
                onClick={handleBulkComplete}
              >
                <CheckCheck className="w-4 h-4" /> Mark All Complete
              </Button>
            </div>
          </Card>
        </AnimatedSection>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Card variant="elevated" className={`${theme.statCards[0]} flex items-center gap-4`}>
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
        <Card variant="elevated" className={`${theme.statCards[1]} flex items-center gap-4`}>
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
        <Card variant="elevated" className={`${theme.statCards[2]} flex items-center gap-4`}>
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
                <Progress value={p.percentage} color={theme.progressColor} showLabel />
              </div>
            ))}
          </div>
        </Card>
      </AnimatedSection>

      {/* Edit Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Profile"
      >
        <form onSubmit={handleEdit} className="space-y-5">
          <Input
            id="edit-name"
            label="Child's name"
            placeholder="Enter name"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            error={editErrors.name}
          />
          <Input
            id="edit-dob"
            label="Date of birth"
            type="date"
            value={editForm.dateOfBirth}
            onChange={(e) => setEditForm({ ...editForm, dateOfBirth: e.target.value })}
            error={editErrors.dateOfBirth}
          />
          <Select
            id="edit-gender"
            label="Gender (optional)"
            placeholder="Select gender"
            value={editForm.gender}
            onChange={(e) => setEditForm({ ...editForm, gender: e.target.value })}
            options={[
              { value: 'MALE', label: 'Boy' },
              { value: 'FEMALE', label: 'Girl' },
              { value: 'OTHER', label: 'Other' },
            ]}
          />
          <Select
            id="edit-bloodGroup"
            label="Blood group (optional)"
            placeholder="Select blood group"
            value={editForm.bloodGroup}
            onChange={(e) => setEditForm({ ...editForm, bloodGroup: e.target.value })}
            options={[
              { value: 'A+', label: 'A+' },
              { value: 'A-', label: 'A-' },
              { value: 'B+', label: 'B+' },
              { value: 'B-', label: 'B-' },
              { value: 'O+', label: 'O+' },
              { value: 'O-', label: 'O-' },
              { value: 'AB+', label: 'AB+' },
              { value: 'AB-', label: 'AB-' },
            ]}
          />
          <div className="space-y-1.5">
            <label className="block text-subhead font-medium text-text-primary">
              Notes (optional)
            </label>
            <textarea
              className="input-field resize-none"
              rows={3}
              placeholder="Any additional notes..."
              value={editForm.notes}
              onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
            />
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="secondary" onClick={() => setShowEditModal(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gradient" isLoading={isEditing} className="flex-1">
              Save Changes
            </Button>
          </div>
        </form>
      </Modal>

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
