import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCl1xpYV9Cy4WaQAsobzj03Ph2kiAh4rs8",
  authDomain: "birdies-43bf5.firebaseapp.com",
  databaseURL: "https://birdies-43bf5-default-rtdb.firebaseio.com",
  projectId: "birdies-43bf5",
  storageBucket: "birdies-43bf5.firebasestorage.app",
  messagingSenderId: "171158465948",
  appId: "1:171158465948:web:7abdb19da6f47defdf2c59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);