import { Button, Separator } from '@/components/ui';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage = () => {
  return (
    <div className='mx-auto max-w-4xl space-y-6 p-6'>
      <header className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold'>Terms and Conditions</h1>
        <p className='text-muted-foreground'>Last updated: October 15, 2024</p>
        <Separator className='my-4' />
      </header>

      <main className='space-y-8'>
        <section>
          <h2 className='mb-2 text-2xl font-semibold'>
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using our service, you agree to be bound by these
            Terms and Conditions. If you disagree with any part of the terms,
            you may not access the service.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>2. Use of the Service</h2>
          <p>
            You must be at least 18 years old to use this service. You are
            responsible for maintaining the confidentiality of your account and
            password. You agree to accept responsibility for all activities that
            occur under your account.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>3. Privacy Policy</h2>
          <p>
            Your use of the service is also governed by our Privacy Policy,
            which can be found{' '}
            <Link to='/privacy-policy' className='text-primary hover:underline'>
              here
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>
            4. Intellectual Property
          </h2>
          <p>
            The service and its original content, features, and functionality
            are owned by [Your Company Name] and are protected by international
            copyright, trademark, patent, trade secret, and other intellectual
            property or proprietary rights laws.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>5. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to the
            service immediately, without prior notice or liability, under our
            sole discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of the Terms.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall [Your Company Name], nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from your access to or use of
            or inability to access or use the service.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time.
            If a revision is material, we will provide at least 30 days' notice
            prior to any new terms taking effect. What constitutes a material
            change will be determined at our sole discretion.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a
              href='mailto:support@example.com'
              className='text-primary hover:underline'
            >
              support@example.com
            </a>
            .
          </p>
        </section>
      </main>

      <footer className='mt-8 text-center'>
        <Button asChild>
          <Link to='/sign-up'>Back to Sign Up</Link>
        </Button>
      </footer>
    </div>
  );
};

export default TermsAndConditionsPage;
