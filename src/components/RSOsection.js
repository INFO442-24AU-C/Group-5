// export function RSOSection() {
//     const section = document.createElement('section');
//     section.classList.add('rso-section');

//     // Section Heading
//     const heading = document.createElement('h3');
//     heading.textContent = 'Recommended RSOs';
//     section.appendChild(heading);

//     // RSO Cards Container
//     const rsoCardsContainer = document.createElement('div');
//     rsoCardsContainer.classList.add('rso-cards');

//     const rsos = [
//       { title: 'Music for Charity', description: 'Introductory Meeting', imageSrc: '../src/components/RSO.png' },
//       { title: 'Birdwatching Club', description: 'Join us for bird watching!', imageSrc: '../src/components/RSO.png' },
//       { title: 'Music for Charity', description: 'Introductory Meeting', imageSrc: '../src/components/RSO.png' },
//     ];

//     // RSO Cards
//     rsos.forEach(rso => {
//       const rsoCard = document.createElement('div');
//       rsoCard.classList.add('rso-card');

//       const image = document.createElement('img');
//       image.src = rso.imageSrc;
//       image.alt = rso.title;
//       image.classList.add('rso-image');

//       const info = document.createElement('div');
//       info.classList.add('rso-info');

//       const rsoTitle = document.createElement('h4');
//       rsoTitle.classList.add('rso-title');
//       rsoTitle.textContent = rso.title;

//       const rsoDescription = document.createElement('p');
//       rsoDescription.classList.add('rso-description');
//       rsoDescription.textContent = rso.description;

//       info.append(rsoTitle, rsoDescription);
//       rsoCard.append(image, info);
//       rsoCardsContainer.appendChild(rsoCard);
//     });

//     section.appendChild(rsoCardsContainer);
//     return section;
//   }


// components/RSOSection.js
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
