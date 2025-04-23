import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from '../components/Header';
import ErrorPage from './routes/ErrorPage';
import { lazy } from 'react';

const FlightsPage = lazy(() => import('../app/routes/FlightsPage'));

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <FlightsPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
