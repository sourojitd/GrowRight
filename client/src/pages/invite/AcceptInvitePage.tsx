import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserCheck, AlertCircle, Loader2 } from 'lucide-react';
import { apiPost } from '@/lib/api';
import Button from '@/components/ui/Button';
import SEO from '@/components/shared/SEO';

export default function AcceptInvitePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [childName, setChildName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setErrorMsg('No invite token found in the link.');
      return;
    }

    apiPost<{ child: { id: string; name: string } }>('/invites/accept', { token })
      .then((data) => {
        setChildName(data.child.name);
        setStatus('success');
      })
      .catch((err) => {
        const msg =
          (err as { response?: { data?: { error?: string } } }).response?.data?.error ||
          'This invitation is invalid, expired, or not for your account.';
        setErrorMsg(msg);
        setStatus('error');
      });
  }, [token]);

  return (
    <div className="min-h-screen bg-surface-primary flex items-center justify-center px-4">
      <SEO title="Accept Invitation" description="Accept a child profile sharing invitation on GrowRight." />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm glass-card rounded-2xl shadow-card-elevated p-8 text-center"
      >
        {status === 'loading' && (
          <>
            <Loader2 className="w-10 h-10 text-accent-blue mx-auto mb-4 animate-spin" />
            <p className="text-body text-text-secondary">Accepting invitation…</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-16 h-16 rounded-full bg-accent-green/15 flex items-center justify-center mx-auto mb-5">
              <UserCheck className="w-8 h-8 text-accent-green" />
            </div>
            <h2 className="text-title text-text-primary mb-2">You're in!</h2>
            <p className="text-body text-text-secondary mb-6">
              You now have access to <strong>{childName}</strong>'s profile.
            </p>
            <Button variant="gradient" className="w-full" onClick={() => navigate('/children')}>
              View Profile
            </Button>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-16 h-16 rounded-full bg-accent-red/10 flex items-center justify-center mx-auto mb-5">
              <AlertCircle className="w-8 h-8 text-accent-red" />
            </div>
            <h2 className="text-title text-text-primary mb-2">Invitation failed</h2>
            <p className="text-body text-text-secondary mb-6">{errorMsg}</p>
            <Button variant="secondary" className="w-full" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </Button>
          </>
        )}
      </motion.div>
    </div>
  );
}
