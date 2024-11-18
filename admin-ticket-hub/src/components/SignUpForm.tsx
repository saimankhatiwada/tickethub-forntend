import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  Spinner,
} from './ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import RegisterCredentials, {
  registerCredentialSchema,
} from '@/types/registerCredentials';
import { useMutation } from '@tanstack/react-query';
import { checkEmail, checkMobileNumber, registerUser } from '@/api/userApi';

const SignUpForm = () => {
  const navigate = useNavigate();

  const { mutateAsync: registerUserMutation } = useMutation({
    mutationFn: registerUser,
  });

  const form = useForm<RegisterCredentials>({
    resolver: zodResolver(registerCredentialSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      mobileNumber: '',
      role: 'Registered',
      isTermAndCondition: false,
    },
  });

  const onSubmit = async (data: RegisterCredentials) => {
    try {
      const formattedData = {
        ...data,
        mobileNumber: `+977${data.mobileNumber}`,
      };

      const [emailExists, mobileNumberExists] = await Promise.all([
        checkEmail(formattedData.email),
        checkMobileNumber(formattedData.mobileNumber),
      ]);

      const hasErrors = [
        {
          condition: emailExists,
          field: 'email' as const,
          message: 'This email is already registered.',
        },
        {
          condition: mobileNumberExists,
          field: 'mobileNumber' as const,
          message: 'This mobile number is already registered.',
        },
      ].reduce((hasError, { condition, field, message }) => {
        if (condition) {
          form.setError(field, { message });
          return true;
        }
        return hasError;
      }, false);

      if (hasErrors) {
        return;
      }

      await registerUserMutation(formattedData);
      navigate('/sign-in', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className='mx-auto w-full max-w-[500px]'>
      <CardHeader>
        <h2 className='text-center text-2xl font-bold'>Create User</h2>
        <p className='text-center text-muted-foreground'>Create an account</p>
        <Separator />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='firstName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Firstname</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='lastName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lastname</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='mobileNumber'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex items-center space-x-2'>
              <FormField
                control={form.control}
                name='isTermAndCondition'
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center space-x-2'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel>
                        I agree to the{' '}
                        <Link
                          to='/terms-and-conditions'
                          className='text-primary underline-offset-4 hover:underline'
                        >
                          terms and conditions
                        </Link>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              disabled={form.formState.isSubmitting}
              type='submit'
              className='w-full'
            >
              {form.formState.isSubmitting ? <Spinner size='sm' /> : 'Sign Up'}
            </Button>
          </form>
        </Form>
        <div className='mt-4 text-center'>
          <p className='text-sm text-muted-foreground'>
            Already have an account?{' '}
            <Link
              to='/sign-in'
              className='text-primary underline-offset-4 hover:underline'
            >
              Sign in
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
