import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages';
import LoginPage from './pages/login/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>
  }
]);

export default router;
