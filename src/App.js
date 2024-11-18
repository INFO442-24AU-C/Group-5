
import { BrowserRouter, Route, Routes, Navigate, useNavigate, Outlet } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { NavBar } from "./components/Navbar_2.js";

import { HomePage } from "./components/main.js";
// import { getDatabase, DataSnapshot, ref, push as firebasePush, onValue, set as firebaseSet } from 'firebase/database';
import {ProfilePage} from "./components/ProfilePage.js";
import { RSOSection } from "./components/RSOsection.js";
import CreateEventPage from "./components/CreateEventPage.js";



function App() {

  return (
    <div>
        <HomePage />
        <Routes>
            <Route path="/rso-and-events" element={<RSOSection />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create-events" element={<CreateEventPage />} />
        </Routes>
    </div>
    );
  }

export default App;
