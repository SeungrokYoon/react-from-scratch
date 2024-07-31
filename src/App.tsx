import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './firebase';
import Home from '@Page/Home';
import About from '@Page/About';
import Info from '@Page/Info';
import SignUp from '@Page/SignUp';
import SignIn from '@Page/SignIn';
import User from '@Page/User';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'info', element: <Info /> },
  { path: 'sign-up', element: <SignUp /> },
  { path: 'sign-in', element: <SignIn /> },
  { path: 'user', element: <User /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
