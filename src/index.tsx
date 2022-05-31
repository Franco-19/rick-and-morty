import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CharacterProvider from './context/charactersContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </React.StrictMode>
);