import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);