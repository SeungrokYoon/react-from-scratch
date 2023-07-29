import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './firebase';
import Home from '@Page/Home';
import About from '@Page/About';
import Info from '@Page/Info';
import SignUp from '@Page/SignUp';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'info', element: <Info /> },
  { path: 'sign-up', element: <SignUp /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
