import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useChildStore } from '@/stores/childStore';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { getApiErrorMessage } from '@/lib/api';
import toast from 'react-hot-toast';

export default function AddChildPage() {
  const navigate = useNavigate();
  const addChild = useChildStore((s) => s.addChild);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    notes: '',
    bloodGroup: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.dateOfBirth) errs.dateOfBirth = 'Date of birth is required';
    if (Object.keys(errs).length > 0) return setErrors(errs);

    setIsLoading(true);
    try {
      const child = await addChild({
        name: form.name,
        dateOfBirth: form.dateOfBirth,
        gender: form.gender || undefined,
        notes: form.notes || undefined,
      });
      toast.success(`${child.name}'s profile created!`);
      navigate(`/children/${child.id}`);
    } catch (err) {
      toast.error(getApiErrorMessage(err, 'Failed to add child'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="max-w-xl mx-auto"
    >
      <h1 className="text-display-sm text-text-primary mb-2">Add Child</h1>
      <p className="text-body text-text-secondary mb-8">
        Create a profile for your child to start tracking their development.
      </p>

      <Card variant="elevated">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            id="name"
            label="Child's name"
            placeholder="Enter name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            error={errors.name}
          />

          <Input
            id="dob"
            label="Date of birth"
            type="date"
            value={form.dateOfBirth}
            onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
            error={errors.dateOfBirth}
          />

          <Select
            id="gender"
            label="Gender (optional)"
            placeholder="Select gender"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            options={[
              { value: 'MALE', label: 'Boy' },
              { value: 'FEMALE', label: 'Girl' },
              { value: 'OTHER', label: 'Other' },
            ]}
          />

          <Select
            id="bloodGroup"
            label="Blood group (optional)"
            placeholder="Select blood group"
            value={form.bloodGroup}
            onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
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
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit" variant="gradient" isLoading={isLoading} className="flex-1">
              Create Profile
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
}
