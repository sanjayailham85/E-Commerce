import React from 'react';
import './index.css';
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import { createRoot } from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import store from "./store/store";
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
