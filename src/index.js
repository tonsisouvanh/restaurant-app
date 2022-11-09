import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AuthContextProvider } from "./context/AuthContext";
import { FoodContextProvider } from "./context/FoodContext";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FoodContextProvider>
        <App />
      </FoodContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

