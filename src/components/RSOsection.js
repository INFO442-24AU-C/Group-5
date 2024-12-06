import React from 'react';
import '../style.css';
import { NavBar } from './Navbar_2.js';
import { Link } from 'react-router-dom';
import RSO_img from '../img/RSO.png';
export function RSOSection() {
  const rsos = [
    {
      title: 'Music for Charity',
      description: 'Introductory Meeting',
      imageSrc: {RSO_img},
      details: '/rso/music-for-charity',
    },
    {
      title: 'Birdwatching Club',
      description: 'Join us for bird watching!',
      imageSrc: {RSO_img},
      details: '/rso/birdwatching-club',
    },
    {
      title: 'Book Club',
      description: 'Discuss your favorite books!',
      iimageSrc: {RSO_img},
      details: '/rso/book-club',
    },
  ];

  return (
    <div className="page-layout">
 
      <NavBar />
      <section className="rso-section">
        <h3>Recommended RSOs</h3>
        <div className="rso-cards">
          {rsos.map((rso, index) => (
            <Link key={index} to={rso.details} className="rso-card">
              <img
                src={RSO_img}
                alt={rso.title}
                className="rso-image"
              />
              <div className="rso-info">
                <h4 className="rso-title">{rso.title}</h4>
                <p className="rso-description">{rso.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
