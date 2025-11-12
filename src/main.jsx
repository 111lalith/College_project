// src/main.jsx (CLEANED UP CODE)

import { StrictMode } from 'react'; // <-- We rely on the named import
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import './index.css';

// Ensure you have removed the 'import React from "react";' line if it's still present.

ReactDOM.createRoot(document.getElementById('root')).render(
  // The StrictMode component must be the root element here
  <StrictMode>
    {/* BrowserRouter is nested correctly inside StrictMode */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  // No semicolon or comma after the closing tag here!
);