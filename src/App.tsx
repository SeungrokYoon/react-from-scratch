import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@Page/Home';
import About from '@Page/About';
import Info from '@Page/Info';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'info', element: <Info /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
