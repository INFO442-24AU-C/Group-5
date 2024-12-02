import { BrowserRouter, Route, Routes, Navigate, useNavigate, Outlet } from "react-router-dom";
import { React, useEffect, useState, useRef } from "react";
import { NavBar } from "./components/Navbar_2.js";
import { auth } from "./components/firebaseConfig.js";
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { getDatabase, ref, push, set as firebaseSet } from "firebase/database";




import { HomePage } from "./components/main.js";
// import { getDatabase, DataSnapshot, ref, push as firebasePush, onValue, set as firebaseSet } from 'firebase/database';
import CreateProfilePage from "./components/CreateProfilePage.js";
import { RSOSection } from "./components/RSOsection.js";
import CreateEventPage from "./components/CreateEventPage.js";
import { SignInPage } from "./SignInPage.js";
import { EditProfilePage } from "./components/EditProfilePage.js";
import { EditProfilePage_2 } from "./components/EditProfilePage_2.js";
import { RSODetail } from './components/RSOdetail';


import EventDetails from "./components/EventDetails.js";




function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigateTo = useNavigate();

  // console.log(currentUser);
  const database = getDatabase();


  // const userDataRef = ref(database, "userData");
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

        // console.log("is not null");
        if (user.uid != null) {
          // console.log("test is not null")
          const userNameRef = ref(database, "userData/" + user.uid + "/name");
          const userEmailRef = ref(database, "userData/" + user.uid + "/email");
          firebaseSet(userNameRef, user.displayName);
          firebaseSet(userEmailRef, user.email);

        }

      }
      else {
        console.log("signed out");
        setCurrentUser(null);
        navigateTo('/sign-in');
      }
    })
  })


 return (

   <div>
      {/* Audio Element */}
        <audio ref={audioRef} loop>
        <source src="/background.mp3" type="audio/mpeg" />
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
           <Route path="home" element={<HomePage />} />
           <Route path="/sign-in" element={<SignInPage />} />
           <Route path="/rso-and-events" element={<RSOSection />} />
           <Route path="/rso/:rsoId" element={<RSODetail />} />
           <Route path="/profile" element={<CreateProfilePage />} />
            <Route path="edit" element={<EditProfilePage />} />
           <Route path="/create-events" element={<CreateEventPage />} />
           <Route path="/event/:id" element={<EventDetails />} />
       </Routes>
   </div>
 );
}




export default App;
