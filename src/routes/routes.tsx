import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/login',
        element: <LoginPage/>
      },
      {
        path:'/register',
        element: <RegisterPage/>
      },
    ],
  },
]);
