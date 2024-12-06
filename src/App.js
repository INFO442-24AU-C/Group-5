import React, { useEffect, useState, useRef  } from "react";
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/Navbar_2.js";
import { auth } from "./components/firebaseConfig.js";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getDatabase, ref, push, set as firebaseSet } from "firebase/database";
import { HomePage } from "./components/main.js";
import { RSOSection } from "./components/RSOsection.js";
import CreateEventPage from "./components/CreateEventPage.js";
import CreateProfilePage from './components/ProfilePage';
import { RSODetail } from './components/RSOdetail';
import EventDetails from "./components/EventDetails.js";
import BackgroundMusic from "./background.mp3";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigateTo = useNavigate();

  const database = getDatabase();

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;  
    setIsPlaying(false);
  };

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("signing in as", user.displayName);
        setCurrentUser(user);

        if (user.uid != null) {
          const userNameRef = ref(database, "userData/" + user.uid + "/name");
          const userEmailRef = ref(database, "userData/" + user.uid + "/email");
          firebaseSet(userNameRef, user.displayName);
          firebaseSet(userEmailRef, user.email);
        }
      } else {
        console.log("signed out");
        setCurrentUser(null);
        navigateTo('/sign-in');
      }
    });
  }, [database, navigateTo]);

  return (
       <div>
      {/* Audio Element */}
        <audio ref={audioRef} loop>
        <source src={BackgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* Music Controls */}
      <div style={{ margin: "20px", textAlign: "center" }}>
        {!isPlaying ? (
          <button onClick={handlePlayMusic} style={{ marginRight: "10px" }}>
            Play Background Music
          </button>
        ) : (
          <button onClick={handleStopMusic} style={{ marginRight: "10px" }}>
            Stop Music
          </button>
        )}
      </div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Group-5" element={<HomePage />} />
        <Route path="/rso-and-events" element={<RSOSection />} />
        <Route path="/rso/:rsoId" element={<RSODetail />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />
        <Route path="/create-events" element={<CreateEventPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
