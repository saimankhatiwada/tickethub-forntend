import * as z from 'zod';

const envSchema = z.object({
  BASE_API_URL: z.string().url(),
  ACCESS_ROLE: z.string().default('SuperAdmin'),
  USE_AUTH: z.string().transform((value) => value === 'true'),
});

export const env = envSchema.parse({
  BASE_API_URL: import.meta.env.VITE_BASE_API_URL,
  ACCESS_ROLE: import.meta.env.VITE_ACCESS_ROLE,
  USE_AUTH: import.meta.env.VITE_USE_AUTH,
});
