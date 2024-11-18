import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import Route from './components/Route';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AccessDeniedPage from './pages/AccessDeniedPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import HomePage from './pages/HomePage';
import SystemHealthPage from './pages/SystemHealthPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/sign-in',
        element: (
          <Route isProtected={false}>
            <SignInPage />
          </Route>
        ),
      },
      {
        path: '/sign-up',
        element: (
          <Route isProtected={true}>
            <SignUpPage />
          </Route>
        ),
      },
      {
        path: '/access-denied',
        element: (
          <Route isProtected={false}>
            <AccessDeniedPage />
          </Route>
        ),
      },
      {
        path: '/terms-and-conditions',
        element: (
          <Route isProtected={false}>
            <TermsAndConditionsPage />
          </Route>
        ),
      },
      {
        path: '/privacy-policy',
        element: (
          <Route isProtected={false}>
            <PrivacyPolicyPage />
          </Route>
        ),
      },
      {
        path: '/',
        element: (
          <Route isProtected={true}>
            <HomePage />
          </Route>
        ),
      },
      {
        path: '/health/status',
        element: (
          <Route isProtected={true}>
            <SystemHealthPage />
          </Route>
        ),
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
