import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref as dbRef, onValue, set } from "firebase/database";
import { NavBar } from "./Navbar_2";  

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    about: "",
    rsoAffiliation: "",
    genre: "",
    link: "",
    favoriteSong: "",
  });
  const [uid, setUid] = useState(null);
  const [message, setMessage] = useState("");

  const auth = getAuth();

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (uid) {
      const userRef = dbRef(database, `userProfiles/${uid}`);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          setProfile(snapshot.val());
        }
      });
    }
  }, [uid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!uid) {
      setMessage("Please log in to save your profile.");
      return;
    }
    setMessage("");
    try {
      const userRef = dbRef(database, `userProfiles/${uid}`);
      await set(userRef, profile);
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      setMessage("Error saving profile. Please try again.");
    }
  };

  return (
    <div className="profile-page">
      <NavBar />  
      <div className="profile-content">
        <header className="profile-header">
          <h1>{profile.name || "Your Profile"}</h1>
        </header>
        <form onSubmit={handleSaveProfile}>
          <div className="form-section">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
          </div>

          <div className="form-section">
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              name="about"
              value={profile.about}
              onChange={handleInputChange}
              placeholder="Tell us about yourself"
            />
          </div>

          <div className="form-section">
            <label htmlFor="rsoAffiliation">RSO Affiliation</label>
            <input
              type="text"
              id="rsoAffiliation"
              name="rsoAffiliation"
              value={profile.rsoAffiliation}
              onChange={handleInputChange}
              placeholder="RSO Affiliation"
            />
          </div>

          <div className="form-section">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={profile.genre}
              onChange={handleInputChange}
              placeholder="Genre"
            />
          </div>

          <div className="form-section">
            <label htmlFor="link">Add a Link</label>
            <input
              type="url"
              id="link"
              name="link"
              value={profile.link}
              onChange={handleInputChange}
              placeholder="Add a link"
            />
          </div>

          <div className="form-section">
            <label htmlFor="favoriteSong">Link a Favorite Song</label>
            <input
              type="url"
              id="favoriteSong"
              name="favoriteSong"
              value={profile.favoriteSong}
              onChange={handleInputChange}
              placeholder="Link to a favorite song"
            />
          </div>

          <button type="submit" className="save-button">
            Save Profile
          </button>
        </form>
        {message && (
          <p className={`message ${message.includes("Error") ? "error" : ""}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
