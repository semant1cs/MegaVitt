import z from 'zod';

export const UserLoginRequestSchema = z.object({
  email: z.string().email().max(64).min(3),
  password: z.string().max(64).min(8),
});

export const UserLoginResponseSchema = z.object({
  access_token: z.string(),
});

export type UserLoginRequest = z.infer<typeof UserLoginRequestSchema>;
export type UserLoginResponse = z.infer<typeof UserLoginResponseSchema>;
