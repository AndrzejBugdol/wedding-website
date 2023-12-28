import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { IntersectionContextProvider } from './context/intersectionContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntersectionContextProvider>
      <App />
    </IntersectionContextProvider>
  </React.StrictMode>
);
