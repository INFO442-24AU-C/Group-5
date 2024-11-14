
// export function Events() {
//   const section = document.createElement('section');
//   section.classList.add('events-section');

//   const heading = document.createElement('h3');
//   heading.textContent = 'Events';
//   section.appendChild(heading);

//   const eventCardsContainer = document.createElement('div');
//   eventCardsContainer.classList.add('event-cards');

//   const events = [
//     {
//       title: 'A Ghibli Medley',
//       description: 'Concert by music for charity',
//       date: 'May 22, 2024',
//       time: '7:30 PM',
//       admission: 'Free Admission',
//       image: '../src/components/event.jpg'
//     },
//     {
//       title: 'A Ghibli Medley',
//       description: 'Concert by music for charity',
//       date: 'May 22, 2024',
//       time: '7:30 PM',
//       admission: 'Free Admission',
//       image: '../src/components/event.jpg'
//     },
//     {
//       title: 'A Ghibli Medley',
//       description: 'Concert by music for charity',
//       date: 'May 22, 2024',
//       time: '7:30 PM',
//       admission: 'Free Admission',
//       image: '../src/components/event.jpg'
//     },
//     {
//       title: 'A Ghibli Medley',
//       description: 'Concert by music for charity',
//       date: 'May 22, 2024',
//       time: '7:30 PM',
//       admission: 'Free Admission',
//       image: '../src/components/event.jpg'
//     },

//   ];

//   events.forEach(event => {
//     const eventCard = document.createElement('div');
//     eventCard.classList.add('event-card');

//     const eventImage = document.createElement('img');
//     eventImage.src = '../../public/img/event.jpg';
//     eventImage.alt = event.title;
//     eventImage.classList.add('event-image');

//     const eventInfo = document.createElement('div');
//     eventInfo.classList.add('event-info');

//     const title = document.createElement('h4');
//     title.classList.add('event-title');
//     title.textContent = event.title;

//     const description = document.createElement('p');
//     description.classList.add('event-description');
//     description.textContent = event.description;

//     const details = document.createElement('div');
//     details.classList.add('event-details');

//     const date = document.createElement('p');
//     date.classList.add('event-date');
//     date.textContent = `${event.date} | ${event.time}`;

//     const admission = document.createElement('p');
//     admission.classList.add('event-admission');
//     admission.textContent = event.admission;

//     details.append(date, admission);
//     eventInfo.append(title, description, details);
//     eventCard.append(eventImage, eventInfo);

//     eventCardsContainer.appendChild(eventCard);
//   });

//   section.appendChild(eventCardsContainer);
//   return section;
// }


// components/Events.js
import React from 'react';
import '../style.css';

export function Events() {
  const events = [
    {
      title: 'A Ghibli Medley',
      description: 'Concert by music for charity',
      date: 'May 22, 2024',
      time: '7:30 PM',
      admission: 'Free Admission',
      image: '../public/img/background.png'
    },
    {
      title: 'Another Event',
      description: 'A different concert for charity',
      date: 'June 15, 2024',
      time: '8:00 PM',
      admission: 'Free Admission',
      image: '../public/img/background.png'
    },
    {
      title: 'Event 3',
      description: 'Charity auction event',
      date: 'July 10, 2024',
      time: '6:00 PM',
      admission: 'Free Admission',
      image: '../public/img/background.png'
    },
    {
      title: 'Event 4',
      description: 'A dance party for charity',
      date: 'August 5, 2024',
      time: '9:00 PM',
      admission: 'Free Admission',
      image: '../public/img/background.png'
    },
  ];

  return (
    <section className="events-section">
      <h3>Events</h3>
      <div className="event-cards">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img
              src={event.image}
              alt={event.title}
              className="event-image"
            />
            <div className="event-info">
              <h4 className="event-title">{event.title}</h4>
              <p className="event-description">{event.description}</p>
              <div className="event-details">
                <p className="event-date">{`${event.date} | ${event.time}`}</p>
                <p className="event-admission">{event.admission}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
