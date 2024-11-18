import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  firstNsme: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  imageUrl: z.string().url(),
  role: z.string(),
  isEmailVerified: z.boolean(),
  isMobileNumberVerified: z.boolean(),
  isSuspended: z.boolean(),
});

type User = z.infer<typeof userSchema>;

export default User;
