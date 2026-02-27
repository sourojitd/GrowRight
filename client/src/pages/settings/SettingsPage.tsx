import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, CreditCard, Heart, Copy, Check } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useFeatureFlags } from '@/hooks/useFeatureFlags';
import { useAuthStore } from '@/stores/authStore';
import { apiPatch, apiPost, getApiErrorMessage } from '@/lib/api';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import StaggerContainer, { staggerItem } from '@/components/shared/StaggerContainer';
import SEO from '@/components/shared/SEO';
import toast from 'react-hot-toast';

export default function SettingsPage() {
  const { user } = useAuth();
  const { isFreeVersion } = useFeatureFlags();
  const setUser = useAuthStore((s) => s.setUser);
  const [copied, setCopied] = useState(false);

  // Profile
  const [name, setName] = useState(user?.name || '');
  const [profileLoading, setProfileLoading] = useState(false);

  // Password
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

  const handleProfileUpdate = async (e: FormEvent) => {
    e.preventDefault();
    setProfileLoading(true);
    try {
      const updated = await apiPatch<{ name: string }>('/users/profile', { name });
      setUser({ ...user!, name: updated.name });
      toast.success('Profile updated');
    } catch {
      toast.error('Failed to update profile');
    } finally {
      setProfileLoading(false);
    }
  };

  const handlePasswordChange = async (e: FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }
    setPasswordLoading(true);
    try {
      await apiPost('/users/change-password', { currentPassword, newPassword });
      toast.success('Password changed');
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      toast.error(getApiErrorMessage(err, 'Failed to change password'));
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <StaggerContainer className="max-w-2xl space-y-8">
      <SEO title="Settings" description="Manage your GrowRight account preferences and settings." path="/settings" />
      <motion.div variants={staggerItem}>
        <h1 className="text-display-sm text-text-primary">Settings</h1>
        <p className="text-body text-text-secondary mt-1">
          Manage your account and preferences
        </p>
      </motion.div>

      {/* Profile Section */}
      <motion.div variants={staggerItem}>
        <Card variant="elevated">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/15 to-accent-teal/15 flex items-center justify-center">
              <User className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <h3 className="text-headline text-text-primary">Profile</h3>
              <p className="text-caption text-text-secondary">Your personal information</p>
            </div>
          </div>

          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              value={user?.email || ''}
              disabled
              className="opacity-60"
            />
            <Button type="submit" variant="gradient" isLoading={profileLoading}>
              Save Changes
            </Button>
          </form>
        </Card>
      </motion.div>

      {/* Password Section */}
      <motion.div variants={staggerItem}>
        <Card variant="elevated">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange/15 to-accent-red/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-accent-orange" />
            </div>
            <div>
              <h3 className="text-headline text-text-primary">Password</h3>
              <p className="text-caption text-text-secondary">Change your password</p>
            </div>
          </div>

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <Input
              label="Current Password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Input
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Min 8 chars, uppercase, number, symbol"
              autoComplete="new-password"
            />
            <Button type="submit" variant="gradient" isLoading={passwordLoading}>
              Change Password
            </Button>
          </form>
        </Card>
      </motion.div>

      {/* Donate / Subscription Section */}
      <motion.div variants={staggerItem}>
        {isFreeVersion ? (
          <Card variant="elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-red/15 to-accent-orange/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent-red" />
              </div>
              <div>
                <h3 className="text-headline text-text-primary">Support GrowRight</h3>
                <p className="text-caption text-text-secondary">Help keep the app free for everyone</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-secondary space-y-3">
              <p className="text-body text-text-secondary">
                GrowRight is completely free with unlimited usage. If you find it helpful,
                consider supporting development via UPI.
              </p>
              <div className="flex items-center gap-2">
                <code className="flex-1 px-3 py-2 rounded-lg bg-surface-primary text-text-primary text-body font-mono select-all">
                  7001688513@kotak811
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('7001688513@kotak811');
                    setCopied(true);
                    toast.success('UPI ID copied!');
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="p-2 rounded-lg hover:bg-surface-primary transition-colors"
                  title="Copy UPI ID"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-accent-green" />
                  ) : (
                    <Copy className="w-4 h-4 text-text-secondary" />
                  )}
                </button>
              </div>
            </div>
          </Card>
        ) : (
          <Card variant="elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/15 to-accent-blue/10 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-accent-purple" />
              </div>
              <div>
                <h3 className="text-headline text-text-primary">Subscription</h3>
                <p className="text-caption text-text-secondary">Your current plan</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-secondary">
              <div>
                <p className="text-headline text-text-primary">{user?.subscriptionTier} Plan</p>
                <p className="text-caption text-text-secondary">
                  {user?.subscriptionTier === 'FREE'
                    ? 'Up to 1 child, 1 roadmap/month'
                    : user?.subscriptionTier === 'PRO'
                    ? 'Up to 5 children, 10 roadmaps/month, syllabus access'
                    : 'Unlimited children, unlimited roadmaps, AI features'}
                </p>
              </div>
              <Badge variant={user?.subscriptionTier === 'FREE' ? 'default' : 'green'}>
                {user?.subscriptionTier}
              </Badge>
            </div>

            {user?.subscriptionTier === 'FREE' && (
              <div className="mt-4">
                <Button variant="gradient" className="btn-gradient-purple w-full">
                  Upgrade to Pro
                </Button>
              </div>
            )}
          </Card>
        )}
      </motion.div>
    </StaggerContainer>
  );
}
