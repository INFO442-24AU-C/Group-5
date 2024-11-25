import React from "react";
import { NavBar } from "./Navbar_2";
import ProfilePage from "./ProfilePage";
import EditProfilePage_2 from "./EditProfilePage_2";

const CreateProfilePage = () => {
    return (
      <div className="main-content">
        <NavBar />
        <ProfilePage />
        {/* <EditProfilePage_2/> */}
      </div>
    );
  };
  
  export default CreateProfilePage;