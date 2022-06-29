import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import { createRoot } from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
