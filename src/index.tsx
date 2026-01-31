import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App';

const domNode = document.getElementById('root');
if (!domNode) {
  throw new Error('Failed to find root element');
}
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
