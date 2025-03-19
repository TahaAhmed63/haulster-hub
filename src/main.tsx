
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been initialized
// This helps ensure that the Capacitor plugins are properly initialized
defineCustomElements(window);

createRoot(document.getElementById("root")!).render(<App />);
