import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
//npm i bootstrap@5.3.0-alpha1=> framework css ici import depuis les nodes modules//
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
