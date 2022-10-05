import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import { App } from 'components/App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </StrictMode>
);
