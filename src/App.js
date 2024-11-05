import { React, useEffect, useState } from "react";
import { NavBar } from "./components/Navbar_2.js";
import { Route, Routes, Navigate, useNavigate, Outlet } from "react-router-dom";
import { getDatabase, DataSnapshot, ref, push as firebasePush, onValue, set as firebaseSet } from 'firebase/database';



function App() {

    return (
      <div>
        <HomePage/>
        <NavBar/>
      </div>
    );
  }

  export default App;

