import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard.tsx';
import Error from './Error.tsx';
import Layout from './Layout.tsx';
import Login from './Login.tsx';
import RouteGuard from './RouteGuard.tsx';
import './index.css';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      transition={Slide}
    />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    element: (
      <RouteGuard>
        <AppWrapper>
          <Outlet />
        </AppWrapper>
      </RouteGuard>
    ),
    errorElement: <Error />,
    children: [
      {
        element: (
          <Layout>
            <Outlet />
          </Layout>
        ),
        children: [
          {
            path: '/',
            element: <Dashboard />,
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
