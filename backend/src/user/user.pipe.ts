import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email().min(6).max(10),
  username: z.string(),
  password: z.string(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
