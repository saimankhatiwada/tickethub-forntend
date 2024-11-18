import { z } from 'zod';

const HealthStatusSchema = z.object({
  status: z.string(),
  totalDuration: z.string(),
  entries: z.object({
    npgsql: z.object({
      data: z.object({}),
      duration: z.string(),
      status: z.string(),
      tags: z.array(z.any()),
    }),
    redis: z.object({
      data: z.object({}),
      duration: z.string(),
      status: z.string(),
      tags: z.array(z.any()),
    }),
    keycloak: z.object({
      data: z.object({}),
      duration: z.string(),
      status: z.string(),
      tags: z.array(z.any()),
    }),
  }),
});

export type HealthStatus = z.infer<typeof HealthStatusSchema>;
