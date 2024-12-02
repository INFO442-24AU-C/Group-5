import React from 'react';
import '../style.css';
import { NavBar } from './Navbar_2.js';
import { Link } from 'react-router-dom';

export function RSOSection() {
  const rsos = [
    {
      title: 'Music for Charity',
      description: 'Introductory Meeting',
      imageSrc: '/img/RSO.png',
      details: '/rso/music-for-charity',
    },
    {
      title: 'Birdwatching Club',
      description: 'Join us for bird watching!',
      imageSrc: '/img/RSO.png',
      details: '/rso/birdwatching-club',
    },
    {
      title: 'Book Club',
      description: 'Discuss your favorite books!',
      imageSrc: '/img/RSO.png',
      details: '/rso/book-club',
    },
  ];

  return (
    <div className="page-layout">
      {/* Left-aligned Navbar */}
      <NavBar />

      {/* Right-aligned RSO Cards */}
      <section className="rso-section">
        <h3>Recommended RSOs</h3>
        <div className="rso-cards">
          {rsos.map((rso, index) => (
            <Link key={index} to={rso.details} className="rso-card">
              <img
                src={rso.imageSrc}
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
