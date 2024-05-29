import z from 'zod';

export const UserRegisterRequestSchema = z.object({
  email: z.string().email().max(64).min(3),
  username: z.string().max(64).min(3),
  password: z.string().max(64).min(8),
});

export const UserRegisterResponseSchema = z.object({
  email: z.string().email().max(64).min(3),
  password: z.string().max(64).min(8),
});

export type UserRegisterRequest = z.infer<typeof UserRegisterRequestSchema>;
export type UserRegisterResponse = z.infer<typeof UserRegisterResponseSchema>;
