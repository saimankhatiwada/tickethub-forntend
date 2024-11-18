import { z } from 'zod';

export const loginCredentialSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required.',
      invalid_type_error: 'Email must be a string.',
    })
    .min(1, 'Email is required.')
    .email('Please enter a valid email address.')
    .trim(),

  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string.',
    })
    .min(1, 'Password is required.'),
});

type LoginCredentials = z.infer<typeof loginCredentialSchema>;

export default LoginCredentials;
