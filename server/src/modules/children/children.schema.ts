import { z } from 'zod';

export const createChildSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), 'Invalid date'),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
  notes: z.string().max(500).optional(),
  bloodGroup: z.string().max(5).optional(),
});

export const updateChildSchema = createChildSchema.partial();

export const childIdParam = z.object({
  childId: z.string().min(1),
});

export type CreateChildInput = z.infer<typeof createChildSchema>;
export type UpdateChildInput = z.infer<typeof updateChildSchema>;
