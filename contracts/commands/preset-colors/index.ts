import z from "zod";

export const GetPresetColorRequestSchema = z.object({
  id: z.string(),
});

export const GetPresetColorResponseSchema = z.object({
  id: z.string(),
  name: z.string().min(4).max(64),
  mainColor: z.string().min(2).max(8),
  backgroundColor: z.string().min(2).max(8),
});

export type GetPresetColorRequest = z.infer<typeof GetPresetColorRequestSchema>;
export type GetPresetColorResponse = z.infer<typeof GetPresetColorResponseSchema>;
