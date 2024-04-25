import z from 'zod';

export const GetUserRequestSchema = z.object({
  
});

export const GetUserResponseSchema = z.object({
   id: z.string(),
   email: z.string().email(),
   username: z.string().max(64).min(3),
   avatar: z.string(),
   createdAt: z.date(),
   updatedAt: z.date(),
   roles: z.array(z.object({
      id : z.string(), 
      value: z.string(),
      description: z.string()
   }))
});

export type GetUserRequest = z.infer<typeof GetUserRequestSchema>;
export type GetUserResponse = z.infer<typeof GetUserResponseSchema>;
