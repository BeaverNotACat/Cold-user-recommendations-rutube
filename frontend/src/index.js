import React from 'react';
import ReactDOM from 'react-dom/client';

// including styles
import './styles/index.css';
import './styles/svg.css';
import './styles/navbar.css';
import './styles/body.css';
import './styles/hotUser.css';

// entrypoint of App's HTML
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


