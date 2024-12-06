import React from "react";
import { NavLink } from 'react-router-dom';
import profile_img from '../img/profile.jpg';


export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="div">
        <div className="top-section">
          <div className="frame">
            <div className="div">
              <div className="text-wrapper-1">Birdies</div>

              <div className="text-wrapper-2">Find your flock</div>
            </div>

            </div>
  
        </div>

        <div className="frame-2">
          <div className="frame-3">
            <div className="navbar-button">
              {/* <Home className="iconex-light-home" /> */}
              <div className="text-wrapper-5"><NavLink to="/">Home</NavLink></div>
            </div>

            <div className="navbar-button-2">
              {/* <IconComponentNode className="home-instance" /> */}
              <div className="text-wrapper-3"><NavLink to="/rso-and-events">RSOs and Events</NavLink></div>
            </div>

          </div>

          <div className="bottom-section">
            <div className="action-menu">
              <div className="create-event-button">
              <NavLink to="/create-events" activeClassName="active-link">
              + Create Event
              </NavLink>
              </div>

              <div className="profile">
                <div className="name">
                  <img id="profileImg" src={profile_img} alt="Image" />
                  <div className="frame-4">
                    <div className="text-wrapper-7"><NavLink to="/create-profile">Personal Profile</NavLink></div>

                    <div className="text-wrapper-8">Birdies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};