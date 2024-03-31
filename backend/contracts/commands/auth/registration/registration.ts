import z from 'zod';

export const UserRegisterRequestSchema = z.object({
  email: z.string().email().max(20).min(6),
  username: z.string().max(20).min(6),
  password: z.string().max(20).min(6),
});

export const UserRegisterResponseSchema = z.object({
  access_token: z.string(),
});

export type UserRegisterRequest = z.infer<typeof UserRegisterRequestSchema>;
export type UserRegisterResponse = z.infer<typeof UserRegisterResponseSchema>;
