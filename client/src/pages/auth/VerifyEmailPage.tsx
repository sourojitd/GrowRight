import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, AlertCircle, RefreshCw } from 'lucide-react';
import { api } from '@/lib/api';
import Button from '@/components/ui/Button';
import SEO from '@/components/shared/SEO';
import toast from 'react-hot-toast';

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') || '';
  const error = searchParams.get('error');

  const [resending, setResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const handleResend = async () => {
    if (!email || resendCooldown > 0) return;
    setResending(true);
    try {
      await api.post('/auth/resend-verification', { email });
      toast.success('Verification email sent!');
      // 120-second cooldown
      setResendCooldown(120);
      const interval = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) { clearInterval(interval); return 0; }
          return prev - 1;
        });
      }, 1000);
    } catch (err: unknown) {
      const status = (err as { response?: { status: number } }).response?.status;
      if (status === 429) {
        toast.error('Please wait a moment before requesting another email.');
        setResendCooldown(120);
        const interval = setInterval(() => {
          setResendCooldown((prev) => {
            if (prev <= 1) { clearInterval(interval); return 0; }
            return prev - 1;
          });
        }, 1000);
      } else {
        toast.error('Could not resend. Please try again.');
      }
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-primary flex items-center justify-center px-4 relative overflow-hidden">
      <SEO title="Verify Email" description="Verify your email address to activate your GrowRight account." path="/verify-email" />
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] gradient-orb bg-accent-blue/20 animate-float" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[400px] h-[400px] gradient-orb bg-accent-purple/20 animate-float-slow" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-display-lg font-bold tracking-tight">
            <span className="text-gradient">Grow</span><span className="text-gradient-blue">Right</span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 20 }}
          className="glass-card rounded-2xl shadow-card-elevated p-8 text-center"
        >
          {error ? (
            <>
              <div className="w-16 h-16 rounded-full bg-accent-red/10 flex items-center justify-center mx-auto mb-5">
                <AlertCircle className="w-8 h-8 text-accent-red" />
              </div>
              <h2 className="text-title text-text-primary mb-3">Link expired or invalid</h2>
              <p className="text-body text-text-secondary mb-6">
                This verification link has expired or is no longer valid. Enter your email below to get a new one.
              </p>
              {email && (
                <div className="space-y-3">
                  <p className="text-subhead text-text-secondary">
                    Sending to: <strong className="text-text-primary">{email}</strong>
                  </p>
                  <Button
                    variant="gradient"
                    className="w-full"
                    isLoading={resending}
                    disabled={resendCooldown > 0}
                    onClick={handleResend}
                  >
                    <RefreshCw className="w-4 h-4" />
                    {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Send new link'}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mx-auto mb-5">
                <Mail className="w-8 h-8 text-accent-blue" />
              </div>
              <h2 className="text-title text-text-primary mb-3">Check your email</h2>
              {email ? (
                <p className="text-body text-text-secondary mb-2">
                  We sent a verification link to{' '}
                  <strong className="text-text-primary">{email}</strong>
                </p>
              ) : (
                <p className="text-body text-text-secondary mb-2">
                  We sent a verification link to your email address.
                </p>
              )}
              <p className="text-subhead text-text-tertiary mb-6">
                Click the link in the email to activate your account. The link expires in 24 hours.
              </p>

              {email && (
                <Button
                  variant="secondary"
                  className="w-full mb-4"
                  isLoading={resending}
                  disabled={resendCooldown > 0}
                  onClick={handleResend}
                >
                  <RefreshCw className="w-4 h-4" />
                  {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend verification email'}
                </Button>
              )}
            </>
          )}

          <p className="text-caption text-text-tertiary">
            Already verified?{' '}
            <Link to="/login" className="text-accent-blue hover:opacity-80 transition-opacity font-medium">
              Sign in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
