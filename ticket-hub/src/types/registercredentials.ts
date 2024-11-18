import { z } from 'zod';

const PASSWORD_REGEX = {
  uppercase: /[A-Z]/,
  digit: /\d/,
  special: /[!@#$%^&*(),.?":{}|<>]/,
  minLength: 8,
};

const NEPAL_MOBILE_REGEX = /^[9][6-9]\d{8}$/;

export const registerCredentialSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required.',
      invalid_type_error: 'Email must be a string.',
    })
    .min(1, 'Email is required.')
    .email('Please enter a valid email address.')
    .trim(),

  firstName: z
    .string({
      required_error: 'First name is required.',
      invalid_type_error: 'First name must be a string.',
    })
    .min(1, 'First name is required.')
    .max(50, 'First name must not exceed 50 characters.')
    .trim(),

  lastName: z
    .string({
      required_error: 'Last name is required.',
      invalid_type_error: 'Last name must be a string.',
    })
    .min(1, 'Last name is required.')
    .max(50, 'Last name must not exceed 50 characters.')
    .trim(),

  password: z
    .string({
      required_error: 'Password is required.',
      invalid_type_error: 'Password must be a string.',
    })
    .min(
      PASSWORD_REGEX.minLength,
      `Password must be at least ${PASSWORD_REGEX.minLength} characters long.`,
    )
    .regex(
      PASSWORD_REGEX.uppercase,
      'Password must contain at least one uppercase letter.',
    )
    .regex(PASSWORD_REGEX.digit, 'Password must contain at least one number.')
    .regex(
      PASSWORD_REGEX.special,
      'Password must contain at least one special character.',
    )
    .refine(
      (password) =>
        PASSWORD_REGEX.uppercase.test(password) &&
        PASSWORD_REGEX.digit.test(password) &&
        PASSWORD_REGEX.special.test(password) &&
        password.length >= PASSWORD_REGEX.minLength,
      {
        message:
          'Password must contain at least one uppercase letter, one number, one special character, and be at least 8 characters long.',
      },
    ),

  mobileNumber: z
    .string({
      required_error: 'Mobile number is required.',
      invalid_type_error: 'Mobile number must be a string.',
    })
    .regex(
      NEPAL_MOBILE_REGEX,
      'Please enter a valid mobile number in the format: 9XXXXXXXX.',
    )
    .refine(
      (number) => number.length === 10,
      'Mobile number must be exactly 10 characters long.',
    ),

  role: z.literal('Registered').default('Registered'),

  isTermAndCondition: z
    .boolean({
      required_error: 'Terms and conditions acceptance is required.',
      invalid_type_error: 'Terms and conditions must be a boolean.',
    })
    .refine((val) => val === true, {
      message: 'You must accept the terms and conditions.',
    }),
});

type RegisterCredentials = z.infer<typeof registerCredentialSchema>;

export default RegisterCredentials;
