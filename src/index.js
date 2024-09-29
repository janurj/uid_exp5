// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';  // Global CSS for styling
import App from './App';  // Main App component

// Rendering the App component into the root div of public/index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
