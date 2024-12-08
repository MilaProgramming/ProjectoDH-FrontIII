import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import FavoriteBossProvider from './context/FavoriteBossProvider';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteBossProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoriteBossProvider>
  </StrictMode>
);
