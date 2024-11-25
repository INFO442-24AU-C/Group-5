import { React } from "react";
import { Link } from 'react-router-dom';
import { NavBar } from "./Navbar_2";


export function EditProfilePage(props) {

    return (
        <div className = "nav-in-edit main-content">
            <NavBar/>
            <div className="edit-profile-box">
                <div className="section-part1">
                    <h1>Edit Profile</h1>
                </div>
                <div className="section-part2">
                    <form className="userInfo">
                        <div className="userName">
                            <h2>Your Name</h2>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="userImg">
                            <h2>Upload Image </h2>
                            <label htmlFor="imageUploadInput" className="img-upload">Upload Picture</label>
                            <input type="file" name="image" id="imageUploadInput" className="d-none"/>     
                        </div>
                        <div className="userAbout">
                            <h2>About</h2>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="userRSO">
                            <h2>RSO Affiliation</h2>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="userGenre">
                            <h2>Genre</h2>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="userLink">
                            <h2>Add a Link</h2>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="userSong">
                            <h2>Link a favorite song!</h2>
                            <input type="text" placeholder="Name"/>
                        </div>


                        <Link to="../profile">
                            <button type="button" className="btn-color rounded-5">Save</button> 
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
  }
