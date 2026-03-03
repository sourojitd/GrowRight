import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, X, Trash2, Users, Mail, Clock } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiPost, apiGet, apiDelete, getApiErrorMessage } from '@/lib/api';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Badge from '@/components/ui/Badge';
import toast from 'react-hot-toast';

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  childId: string;
  childName: string;
}

interface ChildInvite {
  id: string;
  email: string;
  role: 'VIEWER' | 'CONTRIBUTOR';
  status: string;
  expiresAt: string;
  createdAt: string;
}

interface ChildAccess {
  id: string;
  role: 'VIEWER' | 'CONTRIBUTOR';
  createdAt: string;
  user: { id: string; name: string; email: string; avatarUrl: string | null };
}

export default function InviteModal({ isOpen, onClose, childId, childName }: InviteModalProps) {
  const queryClient = useQueryClient();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const { data: invites = [] } = useQuery({
    queryKey: ['child-invites', childId],
    queryFn: () => apiGet<ChildInvite[]>(`/children/${childId}/invites`),
    enabled: isOpen,
  });

  const { data: accesses = [] } = useQuery({
    queryKey: ['child-accesses', childId],
    queryFn: () => apiGet<ChildAccess[]>(`/children/${childId}/accesses`),
    enabled: isOpen,
  });

  const inviteMutation = useMutation({
    mutationFn: (email: string) =>
      apiPost(`/children/${childId}/invites`, { email, role: 'VIEWER' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['child-invites', childId] });
      queryClient.invalidateQueries({ queryKey: ['child-accesses', childId] });
      setEmail('');
      toast.success('Invitation sent!');
    },
    onError: (err) => {
      toast.error(getApiErrorMessage(err, 'Failed to send invite'));
    },
  });

  const revokeInviteMutation = useMutation({
    mutationFn: (inviteId: string) =>
      apiDelete(`/children/${childId}/invites/${inviteId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['child-invites', childId] });
      toast.success('Invite revoked');
    },
    onError: () => toast.error('Failed to revoke invite'),
  });

  const removeAccessMutation = useMutation({
    mutationFn: (accessId: string) =>
      apiDelete(`/children/${childId}/accesses/${accessId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['child-accesses', childId] });
      toast.success('Access removed');
    },
    onError: () => toast.error('Failed to remove access'),
  });

  const handleInvite = (e: FormEvent) => {
    e.preventDefault();
    setEmailError('');
    if (!email.trim()) return setEmailError('Email is required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setEmailError('Invalid email address');
    inviteMutation.mutate(email.trim().toLowerCase());
  };

  const formatExpiry = (date: string) => {
    const d = new Date(date);
    const diff = d.getTime() - Date.now();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days <= 0) return 'Expired';
    if (days === 1) return 'Expires tomorrow';
    return `Expires in ${days} days`;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Share ${childName}'s Profile`} size="md">
      <div className="space-y-6">
        {/* Invite form */}
        <form onSubmit={handleInvite} className="space-y-3">
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                id="invite-email"
                placeholder="Enter email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />
            </div>
            <Button
              type="submit"
              variant="gradient"
              size="sm"
              isLoading={inviteMutation.isPending}
              className="self-start mt-0 shrink-0"
            >
              <UserPlus className="w-4 h-4" /> Invite
            </Button>
          </div>
          <p className="text-caption text-text-tertiary">
            They'll receive an email with a link to view {childName}'s milestones, activities, and vaccinations.
          </p>
        </form>

        {/* Current access */}
        {accesses.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-text-tertiary" />
              <p className="text-subhead font-medium text-text-primary">People with access</p>
            </div>
            <div className="space-y-2">
              <AnimatePresence>
                {accesses.map((access) => (
                  <motion.div
                    key={access.id}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface-secondary"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white text-caption font-bold flex-shrink-0">
                      {access.user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-subhead font-medium text-text-primary truncate">{access.user.name}</p>
                      <p className="text-caption text-text-tertiary truncate">{access.user.email}</p>
                    </div>
                    <Badge variant={access.role === 'CONTRIBUTOR' ? 'blue' : 'default'}>
                      {access.role === 'CONTRIBUTOR' ? 'Contributor' : 'Viewer'}
                    </Badge>
                    <button
                      onClick={() => removeAccessMutation.mutate(access.id)}
                      className="p-1.5 rounded-lg hover:bg-accent-red/10 text-text-tertiary hover:text-accent-red transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Pending invites */}
        {invites.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-4 h-4 text-text-tertiary" />
              <p className="text-subhead font-medium text-text-primary">Pending invitations</p>
            </div>
            <div className="space-y-2">
              <AnimatePresence>
                {invites.map((invite) => (
                  <motion.div
                    key={invite.id}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface-secondary"
                  >
                    <div className="w-8 h-8 rounded-full bg-surface-tertiary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-text-tertiary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-subhead font-medium text-text-primary truncate">{invite.email}</p>
                      <div className="flex items-center gap-1 text-caption text-text-tertiary">
                        <Clock className="w-3 h-3" />
                        {formatExpiry(invite.expiresAt)}
                      </div>
                    </div>
                    <Badge variant="orange">Pending</Badge>
                    <button
                      onClick={() => revokeInviteMutation.mutate(invite.id)}
                      className="p-1.5 rounded-lg hover:bg-accent-red/10 text-text-tertiary hover:text-accent-red transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {accesses.length === 0 && invites.length === 0 && (
          <p className="text-center text-subhead text-text-tertiary py-4">
            No one has access yet. Invite someone above.
          </p>
        )}
      </div>
    </Modal>
  );
}
