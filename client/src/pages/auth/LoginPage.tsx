import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/stores/authStore';
import { getApiErrorMessage } from '@/lib/api';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!email) return setErrors({ email: 'Email is required' });
    if (!password) return setErrors({ password: 'Password is required' });

    try {
      await login({ email, password });
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (err) {
      toast.error(getApiErrorMessage(err, 'Login failed'));
    }
  };

  return (
    <div className="min-h-screen bg-surface-primary flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] gradient-orb bg-accent-blue/20 animate-float" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[400px] h-[400px] gradient-orb bg-accent-purple/20 animate-float-slow" />
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] gradient-orb bg-accent-teal/15 animate-float-fast" />

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
            Track your child's growth journey
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
          className="glass-card rounded-2xl shadow-card-elevated p-8"
        >
          <h2 className="text-title text-text-primary mb-6">Sign in</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
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
            <div>
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                autoComplete="current-password"
              />
              <div className="mt-1.5 text-right">
                <Link to="/forgot-password" className="text-caption text-accent-blue hover:opacity-80 transition-opacity">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button type="submit" variant="gradient" isLoading={isLoading} className="w-full mt-2">
              Sign in
            </Button>
          </form>

          <p className="text-center text-subhead text-text-secondary mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-gradient font-medium hover:opacity-80 transition-opacity">
              Create one
            </Link>
          </p>
        </motion.div>

        {import.meta.env.DEV && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-caption text-text-tertiary mt-8"
          >
            Demo: parent@demo.com / Parent@123456
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
