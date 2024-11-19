import React from 'react';
import '../style.css';

export function RSOSection() {
  const rsos = [
    { title: 'Music for Charity', description: 'Introductory Meeting', imageSrc: '/img/RSO.png' },
    { title: 'Birdwatching Club', description: 'Join us for bird watching!', imageSrc: '/img/RSO.png' },
    { title: 'Music for Charity', description: 'Introductory Meeting', imageSrc: '/img/RSO.png' },
  ];

  return (
    <section className="rso-section">
      <h3>Recommended RSOs</h3>
      <div className="rso-cards">
        {rsos.map((rso, index) => (
          <div key={index} className="rso-card">
            <img
              src={rso.imageSrc}
              alt={rso.title}
              className="rso-image"
            />
            <div className="rso-info">
              <h4 className="rso-title">{rso.title}</h4>
              <p className="rso-description">{rso.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
