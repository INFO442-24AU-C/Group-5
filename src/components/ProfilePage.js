import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-info">
          <img
            src="/img/profile.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-details">
            {/* <img src="/img/Instagram.png"/> */}
            <p className="name">John Doe <span className="pronouns">(he/him)</span></p>
            <p className="profile-meta">UW 2025</p>
            <p className="profile-meta">Guitarist</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="auto-btn"><NavLink to="/sign-in">Logout</NavLink></button>
          
          <button className="add-to-profile-btn">Edit Profile</button>
        </div>
      </header>
      <main className="profile-content">
        <div className="content-top">
          <div className="about">
            <h2>About</h2>
            {/* Add content for the About section */}
          </div>
          <div className="top-right">
            <div className="genres">
              <h2>Genres</h2>
              {/* Add content for Genres */}
            </div>
            <div className="genres">
              <h2>Following RSOs</h2>
              {/* Add content for Following RSOs */}
            </div>
          </div>
        </div>

        <div className="content-bottom">
          <div className="profile-section favorite-songs">
            <h2>Favorite Songs</h2>
            {/* Add content for Favorite Songs */}
          </div>
          <div className="profile-section saved-events">
            <h2>Saved Events</h2>
            {/* Add content for Saved Events */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;

