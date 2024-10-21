
import React from "react";
// import { Footer } from "./Footer";
// import { Nav } from "./Nav";
// import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div class="sidebar">
        <h2>Birdies</h2>
        <p class="tagline">Find your flock</p>
        <ul class="menu">
            <li><a href="#">Notifications <span class="notif-count">2</span></a></li>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">RSOs</a></li>
        </ul>
        <button class="create-event"> + Create Event</button>
        <div class="user-profile">
            <img src="../src/components/profile.jpg" alt="John Doe"/>
            <p>John Doe</p>
            <span>Guitarist</span>
        </div>
    </div>
        )
}
    