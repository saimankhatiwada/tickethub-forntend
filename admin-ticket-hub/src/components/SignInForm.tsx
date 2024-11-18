import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  Spinner,
} from '@/components/ui';
import LoginCredentials, {
  loginCredentialSchema,
} from '@/types/loginCredentials';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/api/userApi';
import { useAuth } from './AuthProvider';
import axios from 'axios';
import { toast } from 'sonner';
import { UserX } from 'lucide-react';

const SignInForm = () => {
  const { setToken } = useAuth();

  const { mutateAsync: loginUserMutation } = useMutation({
    mutationFn: loginUser,
  });

  const form = useForm<LoginCredentials>({
    resolver: zodResolver(loginCredentialSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      const result = await loginUserMutation(data);

      setToken(result.accessToken);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        toast.error(
          <div className='flex items-center space-x-2'>
            <UserX />
            <div>Invalid credentials.</div>
          </div>,
        );
      }
    }
  };

  return (
    <Card className='mx-auto w-[500px]'>
      <CardHeader>
        <h2 className='text-center text-2xl'>Sign In</h2>
        <p className='text-center text-muted-foreground'>
          Sign in using your email and password
        </p>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col gap-4'
            >
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
                      <div className='flex items-center justify-between'>
                        <FormLabel>Password</FormLabel>
                        <Link
                          to='/reset-password'
                          className='text-sm text-primary underline-offset-4 hover:underline'
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input type='password' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button disabled={form.formState.isSubmitting} type='submit'>
                {form.formState.isSubmitting ? (
                  <Spinner size='sm' />
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
