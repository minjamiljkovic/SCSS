import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import App from './App';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(document.querySelector('#app_container'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);