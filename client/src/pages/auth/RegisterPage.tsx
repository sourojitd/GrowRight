import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/stores/authStore';
import { getApiErrorMessage } from '@/lib/api';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import SEO from '@/components/shared/SEO';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, isLoading } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!email.trim()) errs.email = 'Email is required';
    if (password.length < 8) errs.password = 'At least 8 characters';
    else if (!/[A-Z]/.test(password)) errs.password = 'Need an uppercase letter';
    else if (!/[0-9]/.test(password)) errs.password = 'Need a number';
    else if (!/[^A-Za-z0-9]/.test(password)) errs.password = 'Need a special character';
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setErrors({});

    try {
      const { email: registeredEmail } = await register({ name, email, password });
      navigate(`/verify-email?email=${encodeURIComponent(registeredEmail)}`);
    } catch (err) {
      toast.error(getApiErrorMessage(err, 'Registration failed'));
    }
  };

  return (
    <div className="min-h-screen bg-surface-primary flex items-center justify-center px-4 relative overflow-hidden">
      <SEO title="Create Account" description="Create a free GrowRight account to start tracking your child's developmental milestones and growth." path="/register" />
      {/* Floating gradient orbs */}
      <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] gradient-orb bg-accent-purple/20 animate-float" />
      <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] gradient-orb bg-accent-blue/20 animate-float-slow" />
      <div className="absolute top-[30%] left-[15%] w-[300px] h-[300px] gradient-orb bg-accent-teal/15 animate-float-fast" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="w-full max-w-md relative z-10"
      >
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
            Start tracking your child's milestones
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
          className="glass-card rounded-2xl shadow-card-elevated p-8"
        >
          <h2 className="text-title text-text-primary mb-6">Create account</h2>

          {/* Social login */}
          <div className="space-y-3 mb-6">
            <a
              href={`${import.meta.env.VITE_API_URL}/auth/google`}
              className="flex items-center justify-center gap-3 w-full px-4 py-2.5 rounded-xl border border-surface-tertiary bg-surface-secondary hover:bg-surface-tertiary transition-colors text-subhead text-text-primary font-medium"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </a>
            <a
              href={`${import.meta.env.VITE_API_URL}/auth/github`}
              className="flex items-center justify-center gap-3 w-full px-4 py-2.5 rounded-xl border border-surface-tertiary bg-surface-secondary hover:bg-surface-tertiary transition-colors text-subhead text-text-primary font-medium"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Sign up with GitHub
            </a>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-surface-tertiary" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-surface-secondary px-3 text-caption text-text-tertiary">or sign up with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              id="name"
              label="Full name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              autoComplete="name"
            />
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
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Min 8 chars, uppercase, number, symbol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              autoComplete="new-password"
            />

            <Button type="submit" variant="gradient" isLoading={isLoading} className="w-full mt-2">
              Create account
            </Button>
          </form>

          <p className="text-center text-subhead text-text-secondary mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-gradient font-medium hover:opacity-80 transition-opacity">
              Sign in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
