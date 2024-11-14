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
      image: '/img/event.jpg'
    },
    {
      title: 'Another Event',
      description: 'A different concert for charity',
      date: 'June 15, 2024',
      time: '8:00 PM',
      admission: 'Free Admission',
      image: '/img/event.jpg'
    },
    {
      title: 'Event 3',
      description: 'Charity auction event',
      date: 'July 10, 2024',
      time: '6:00 PM',
      admission: 'Free Admission',
      image: '/img/event.jpg'
    },
    {
      title: 'Event 4',
      description: 'A dance party for charity',
      date: 'August 5, 2024',
      time: '9:00 PM',
      admission: 'Free Admission',
      image: '/img/event.jpg'
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
