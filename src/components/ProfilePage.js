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
          <button className="auto-btn"><NavLink to="/sign-in">Sign Out</NavLink></button>
          <NavLink to="../edit">
            <button className="add-to-profile-btn">Edit Profile</button>
          </NavLink>
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


// return (
//   <div className="profile">
//     <Nav />
//     <div className="profile-content">
//       <section className="section-one">
//         <h1>My profile</h1>
//         <div>
//           <img src='img/profileImage_default.png' alt="profile image" className="rounded-circle border border-dark"/>
//           <p>Name : {userName}</p>
//           <p>Email : {userEmail}</p>
//         </div>
//         <Link to="../edit">
//           <button type="button" class="btn-color rounded-5">Edit Profile</button>
//         </Link>
//         <Link to="../signin">
//           <button type="button" class="btn-color rounded-5" onClick={handleSignOut}>Sign Out</button> 
//         </Link>
//       </section>
//       <section className="section-two">
//         <div className="flex-box bg-color quizBox">
//           <div className="flex-subtitle">
//             <img src="img/quiz_result_icon.png" alt="quiz result icon"/>
//             <h2>Quiz Result</h2>                
//           </div>
//           {resultTemp && resultSeason &&
//             <p>You are a {resultTemp} {resultSeason}!</p> 
//           }
//         </div>
//         <div className="flex-box">
//           <div className="flex-subtitle">
//             <img src="img/saved_items_icon.png" alt="saved items icon"/>
//             <h2>Saved Items</h2>
//           </div>
//           <SavedItems user={user}/>
//         </div>
//         <div className="flex-box">
//           <div className="flex-subtitle">
//             <img src="img/recommendations_icon.png" alt="recommendations icon"/>
//             <h2>Recommendations</h2>
//           </div>
//           <RecommendationItems user={user}/>
//         </div>
//       </section>
//     </div>
//     <Footer />
//   </div>
// );

