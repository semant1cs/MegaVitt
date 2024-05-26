import z from "zod";

export const GetPresetFontRequestSchema = z.object({
  id: z.string(),
});

export const GetPresetFontResponseSchema = z.object({
  id: z.string(),
  name: z.string().min(4).max(64),
  fontName: z.string().max(128),
});

export type GetPresetFontRequest = z.infer<typeof GetPresetFontRequestSchema>;
export type GetPresetFontResponse = z.infer<typeof GetPresetFontResponseSchema>;
