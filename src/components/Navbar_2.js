import React from "react";
// import { Home } from "./Home";
// import { Home1 } from "./Home1";
// import { IconComponentNode } from "./IconComponentNode";

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

            <div className="notifications">
              <div className="text-wrapper-3">Notifications</div>

              <div className="number">
                <div className="text-wrapper-4">2</div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-2">
          <div className="frame-3">
            <div className="navbar-button">
              {/* <Home className="iconex-light-home" /> */}
              <div className="text-wrapper-5">Home</div>
            </div>

            <div className="navbar-button-2">
              {/* <IconComponentNode className="home-instance" /> */}
              <div className="text-wrapper-3">RSOs + Events</div>
            </div>

            <div className="navbar-button-2">
              {/* <Home1 className="home-instance" /> */}
              <div className="text-wrapper-3">Postings</div>
            </div>
          </div>

          <div className="bottom-section">
            <div className="action-menu">
              <div className="create-event-button">
                <div className="div-wrapper">
                  <div className="text-wrapper-6">+ Create Event</div>
                </div>
              </div>

              <div className="profile">
                <div className="name">
                  <img className="image" alt="Image" />

                  <div className="frame-4">
                    <div className="text-wrapper-7">John Doe</div>

                    <div className="text-wrapper-8">Guitarist</div>
                  </div>
                </div>

                <div className="edit">
                  <div className="ellipse" />

                  <div className="ellipse" />

                  <div className="ellipse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};