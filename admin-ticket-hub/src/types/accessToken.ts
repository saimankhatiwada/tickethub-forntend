import { z } from 'zod';

export const accessTokenSchema = z.object({
  accessToken: z.string(),
});

type AccessToken = z.infer<typeof accessTokenSchema>;

export default AccessToken;
