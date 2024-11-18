import { Button, Separator } from '@/components/ui';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <div className='mx-auto max-w-4xl space-y-6 p-6'>
      <header className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold'>Privacy Policy</h1>
        <p className='text-muted-foreground'>Last updated: October 15, 2024</p>
        <Separator className='my-4' />
      </header>

      <main className='space-y-8'>
        <section>
          <h2 className='mb-2 text-2xl font-semibold'>1. Introduction</h2>
          <p>
            Welcome to [Your Company Name]'s Privacy Policy. We respect your
            privacy and are committed to protecting your personal data. This
            privacy policy will inform you about how we look after your personal
            data and tell you about your privacy rights and how the law protects
            you.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>2. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows:
          </p>
          <ul className='ml-4 mt-2 list-inside list-disc'>
            <li>
              Identity Data: first name, last name, username or similar
              identifier
            </li>
            <li>Contact Data: email address and telephone numbers</li>
            <li>
              Technical Data: internet protocol (IP) address, your login data,
              browser type and version
            </li>
            <li>
              Usage Data: information about how you use our website and services
            </li>
          </ul>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>
            3. How We Use Your Data
          </h2>
          <p>
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul className='ml-4 mt-2 list-inside list-disc'>
            <li>To register you as a new customer</li>
            <li>To process and deliver your orders</li>
            <li>To manage our relationship with you</li>
            <li>
              To improve our website, products/services, marketing or customer
              relationships
            </li>
          </ul>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorized way, altered or disclosed. In addition, we limit access
            to your personal data to those employees, agents, contractors and
            other third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>5. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to
            fulfil the purposes we collected it for, including for the purposes
            of satisfying any legal, accounting, or reporting requirements.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>6. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data, including the right to:
          </p>
          <ul className='ml-4 mt-2 list-inside list-disc'>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>7. Third-party Links</h2>
          <p>
            This website may include links to third-party websites, plug-ins and
            applications. Clicking on those links or enabling those connections
            may allow third parties to collect or share data about you. We do
            not control these third-party websites and are not responsible for
            their privacy statements.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>
            8. Changes to the Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date at the top of this Privacy
            Policy.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-2xl font-semibold'>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className='mt-2'>
            <strong>[Your Company Name]</strong>
            <br />
            Email:{' '}
            <a
              href='mailto:privacy@example.com'
              className='text-primary hover:underline'
            >
              privacy@example.com
            </a>
            <br />
            Address: [Your Company Address]
          </p>
        </section>
      </main>

      <footer className='mt-8 flex justify-center space-x-4'>
        <Button asChild variant='outline'>
          <Link to='/sign-up'>Back to Sign Up</Link>
        </Button>
        <Button asChild variant='outline'>
          <Link to='/terms-and-conditions'>Terms and Conditions</Link>
        </Button>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
