import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/stores/authStore';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
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
      await register({ name, email, password });
      toast.success('Account created!');
      navigate('/dashboard');
    } catch (err: any) {
      const message = err.response?.data?.error || 'Registration failed';
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-surface-primary flex items-center justify-center px-4 relative overflow-hidden">
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
