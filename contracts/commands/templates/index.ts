import z from "zod";

export const GetTemplateRequestSchema = z.object({
  id: z.string(),
});

export const GetTemplateResponseSchema = z.object({
  id: z.string(),
  title: z.string().min(4).max(64),
  description: z.string().min(0).max(256),
  value: z.string(),
});

export type GetTemplateRequest = z.infer<typeof GetTemplateRequestSchema>;
export type GetTemplateResponse = z.infer<typeof GetTemplateResponseSchema>;
