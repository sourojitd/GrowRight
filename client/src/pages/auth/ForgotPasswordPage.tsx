import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { apiPost, getApiErrorMessage } from '@/lib/api';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';

type Step = 'email' | 'verify' | 'reset';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('email');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [childName, setChildName] = useState('');
  const [childGender, setChildGender] = useState('');
  const [childDOB, setChildDOB] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return setErrors({ email: 'Email is required' });
    setErrors({});
    setStep('verify');
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!childName.trim()) errs.childName = 'Child name is required';
    if (!childDOB) errs.childDOB = 'Date of birth is required';
    if (Object.keys(errs).length > 0) return setErrors(errs);

    setIsLoading(true);
    setErrors({});
    try {
      await apiPost('/auth/verify-child-info', {
        email,
        childName,
        childGender: childGender || undefined,
        childDateOfBirth: childDOB,
      });
      toast.success('Identity verified!');
      setStep('reset');
    } catch (err) {
      toast.error(getApiErrorMessage(err, 'Verification failed. Check your child\'s details.'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = async (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (newPassword.length < 8) errs.newPassword = 'At least 8 characters';
    else if (!/[A-Z]/.test(newPassword)) errs.newPassword = 'Need an uppercase letter';
    else if (!/[0-9]/.test(newPassword)) errs.newPassword = 'Need a number';
    else if (!/[^A-Za-z0-9]/.test(newPassword)) errs.newPassword = 'Need a special character';
    if (newPassword !== confirmPassword) errs.confirmPassword = 'Passwords don\'t match';
    if (Object.keys(errs).length > 0) return setErrors(errs);

    setIsLoading(true);
    setErrors({});
    try {
      await apiPost('/auth/reset-password-verified', {
        email,
        childName,
        childDateOfBirth: childDOB,
        newPassword,
      });
      toast.success('Password reset successfully!');
      navigate('/login');
    } catch (err) {
      toast.error(getApiErrorMessage(err, 'Failed to reset password'));
    } finally {
      setIsLoading(false);
    }
  };

  const slideVariants = {
    enter: { x: 40, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -40, opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-surface-primary flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] gradient-orb bg-accent-teal/20 animate-float" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] gradient-orb bg-accent-purple/20 animate-float-slow" />
      <div className="absolute top-[40%] left-[15%] w-[300px] h-[300px] gradient-orb bg-accent-blue/15 animate-float-fast" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Brand */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="text-display-lg font-bold tracking-tight"
          >
            <span className="text-gradient">Grow</span><span className="text-gradient-blue">Right</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-body text-text-secondary mt-3"
          >
            Reset your password
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
          className="glass-card rounded-2xl shadow-card-elevated p-8"
        >
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            {(['email', 'verify', 'reset'] as Step[]).map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-caption font-semibold transition-all duration-300 ${
                    step === s
                      ? 'bg-accent-blue text-white scale-110'
                      : (['email', 'verify', 'reset'].indexOf(step) > i)
                        ? 'bg-accent-green/20 text-accent-green'
                        : 'bg-surface-tertiary text-text-tertiary'
                  }`}
                >
                  {(['email', 'verify', 'reset'].indexOf(step) > i) ? '\u2713' : i + 1}
                </div>
                {i < 2 && (
                  <div className={`w-8 h-0.5 rounded-full transition-colors duration-300 ${
                    (['email', 'verify', 'reset'].indexOf(step) > i) ? 'bg-accent-green/30' : 'bg-surface-tertiary'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 'email' && (
              <motion.form
                key="email"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
                onSubmit={handleEmailSubmit}
                className="space-y-5"
              >
                <h2 className="text-title text-text-primary">Enter your email</h2>
                <p className="text-subhead text-text-secondary">
                  We'll verify your identity using your child's information.
                </p>
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email}
                  autoComplete="email"
                />
                <Button type="submit" variant="gradient" className="w-full">
                  Next
                </Button>
              </motion.form>
            )}

            {step === 'verify' && (
              <motion.form
                key="verify"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
                onSubmit={handleVerify}
                className="space-y-5"
              >
                <h2 className="text-title text-text-primary">Verify your identity</h2>
                <p className="text-subhead text-text-secondary">
                  Enter your child's details to confirm your identity.
                </p>
                <Input
                  id="childName"
                  label="Child's name"
                  placeholder="Enter your child's name"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  error={errors.childName}
                />
                <Select
                  id="childGender"
                  label="Gender (optional)"
                  placeholder="Select gender"
                  value={childGender}
                  onChange={(e) => setChildGender(e.target.value)}
                  options={[
                    { value: 'MALE', label: 'Boy' },
                    { value: 'FEMALE', label: 'Girl' },
                    { value: 'OTHER', label: 'Other' },
                  ]}
                />
                <Input
                  id="childDOB"
                  label="Date of birth"
                  type="date"
                  value={childDOB}
                  onChange={(e) => setChildDOB(e.target.value)}
                  error={errors.childDOB}
                />
                <div className="flex gap-3">
                  <Button type="button" variant="secondary" onClick={() => setStep('email')}>
                    Back
                  </Button>
                  <Button type="submit" variant="gradient" isLoading={isLoading} className="flex-1">
                    Verify
                  </Button>
                </div>
              </motion.form>
            )}

            {step === 'reset' && (
              <motion.form
                key="reset"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
                onSubmit={handleReset}
                className="space-y-5"
              >
                <h2 className="text-title text-text-primary">Set new password</h2>
                <p className="text-subhead text-text-secondary">
                  Choose a strong password for your account.
                </p>
                <Input
                  id="newPassword"
                  label="New password"
                  type="password"
                  placeholder="Min 8 chars, uppercase, number, symbol"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  error={errors.newPassword}
                  autoComplete="new-password"
                />
                <Input
                  id="confirmPassword"
                  label="Confirm password"
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={errors.confirmPassword}
                  autoComplete="new-password"
                />
                <Button type="submit" variant="gradient" isLoading={isLoading} className="w-full">
                  Reset Password
                </Button>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="text-center text-subhead text-text-secondary mt-6">
            Remember your password?{' '}
            <Link to="/login" className="text-gradient font-medium hover:opacity-80 transition-opacity">
              Sign in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
