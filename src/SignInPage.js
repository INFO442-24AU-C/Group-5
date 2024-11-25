import React from 'react';
import { NavBar } from './components/Navbar_2';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, DataSnapshot, ref, off, push as firebasePush, onValue, set as firebaseSet } from 'firebase/database';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useNavigate, Link } from 'react-router-dom';

export function SignInPage(props) {
    // const currentUser = props.currentUser;
    const auth = getAuth();
    const navigateTo = useNavigate();

    // console.log(currentUser);
    // console.log("hello");
    const configObj = {
        signInOptions: [
          { 
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
          },
          {
            provider: GoogleAuthProvider.PROVIDER_ID
          }
        ],
        signInFlow: 'popup',
        callbacks: {
          signInSuccessWithAuthResult: () => {
            navigateTo('/home');
            return false;
          }
          
        },
        credentialHelper: 'none'
      }

    return (
        <div className="main-content">
            <NavBar />
            <div className="signin">
                <h1> Welcome to Birdies! </h1>
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj} />
                <Link to="../profile">
                    <button type="button" className="btn-light rounded-3">Cancel</button> 
                </Link>
            </div>
        </div>
    )
}