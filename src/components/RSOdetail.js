import React from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from './Navbar_2.js'; // Import the Navbar component
import '../style.css';
import RSO_img from '../img/RSO.png';

export function RSODetail() {
  const { rsoId } = useParams();

  const rsoDetails = {
    'music-for-charity': {
      title: 'Music for Charity',
      description: 'Join us for an introductory meeting!',
      date: '2024-11-27',
      time: '10:20',
      location: 'Unknown',
      price: '$40',
      imageSrc: {RSO_img},
    },
    'birdwatching-club': {
      title: 'Birdwatching Club',
      description: 'Explore nature and birdwatch with us!',
      date: '2024-12-05',
      time: '09:00',
      location: 'UW Forest',
      price: 'Free',
      imageSrc: {RSO_img},
    },
    'book-club': {
      title: 'Book Club',
      description: 'Let’s dive into the world of literature together!',
      date: '2024-12-10',
      time: '15:00',
      location: 'Library Room 202',
      price: 'Free',
      imageSrc: {RSO_img},
    },
  };

  const rso = rsoDetails[rsoId] || {};

  return (
    <div className="page-layout">
      {/* Navbar on the left */}
      <NavBar />

      {/* Main content spans the rest of the page */}
      <div className="rso-detail">
        <img src={RSO_img} alt={rso.title} className="rso-detail-image" />
        <h1>{rso.title}</h1>
        <p>{rso.description}</p>
        <div className="rso-detail-info">
          <p><strong>Date:</strong> {rso.date}</p>
          <p><strong>Time:</strong> {rso.time}</p>
          <p><strong>Location:</strong> {rso.location}</p>
          <p><strong>Price:</strong> {rso.price}</p>
        </div>
      </div>
    </div>
  );
}
