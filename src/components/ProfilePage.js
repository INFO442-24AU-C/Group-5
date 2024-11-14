//  import { Navbar } from './Navbar.js';
// import { HomePage } from './main.js';


// export function ProfilePage() {
//   const navbar = Navbar();

//   const title = navbar.querySelector('h2');
//   title.style.cursor = 'pointer';
//   title.addEventListener('click', () => {
//     document.getElementById('app').innerHTML = '';
//     HomePage();
//   });

//   const app = document.getElementById('app');
//     app.appendChild(navbar);

//   return app;
// }


import React from 'react';
import { Navbar } from './Navbar';
import { HomePage } from './main';

export function ProfilePage() {
  // Handle the click event for the title
  const handleTitleClick = () => {
    // To navigate to the HomePage, you could use React Router or conditionally render the HomePage component
    // For now, let's just return the HomePage component directly.
    // You can replace this with any navigation method like React Router.
    console.log("Title clicked, navigating to HomePage...");
  };

  return (
    <div id="app">
      {/* Render Navbar */}
      <Navbar />

      {/* ProfilePage content */}
      <div>
        <h2 style={{ cursor: 'pointer' }} onClick={handleTitleClick}>
          Profile Page
        </h2>
        {/* You can add additional content for the ProfilePage here */}
      </div>
    </div>
  );
}