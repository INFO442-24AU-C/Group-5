import React from "react";
// import { Footer } from "./Footer";
// import { Nav } from "./Nav";
// import { Link } from "react-router-dom";


function Introduction() {

    return (
        <div className="home-text">
            <p className="home-text">What is birdies?</p>
            <p className="home-text"><strong class="highlight">Birdies</strong> is a web-based application.</p>
        </div>
    )
}


export function HomePage() {

    return (
        <div>
            {/* <Ribbon /> */}
            <Introduction />
            {/* <Footer /> */}
        </div>
    );
}
