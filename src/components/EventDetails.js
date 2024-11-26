
// components/EventDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "./firebaseConfig";
import { ref, get } from "firebase/database";
import { NavBar } from './Navbar_2.js';
import "../style.css";



const EventDetails = () => {
 const { id } = useParams(); // Get the event ID from the URL
 const [event, setEvent] = useState(null);


 useEffect(() => {
   const eventRef = ref(database, `events/${id}`);
   console.log("Fetching event with ID:", id);  // Log ID to ensure it's correct


   get(eventRef)
     .then((snapshot) => {
       if (snapshot.exists()) {
         console.log("Event data:", snapshot.val()); // Log event data to see if it's being fetched correctly
         setEvent(snapshot.val());
       } else {
         console.error("Event not found for ID:", id);
       }
     })
     .catch((error) => console.error("Error fetching event details:", error));
 }, [id]);


 if (!event) {
   return <p>Loading event details...</p>;
 }


 return (
   <div className="main-content">
      <NavBar />
      <div className="event-page">
      <header className="event-header">
        <img
          src='/img/event.jpg'
          alt="event image"
          className="event-section-image"
        />
      </header>
    <main className="event-section-details">
      <div className="event-information">
        <div>
          <h1 className = "event-title-details">{event.name}</h1>
          <div className='link-section'>
            <a href={event.link} target="_blank">
              <img 
                src='/img/Instagram.png'
                alt='instagram'
                className='insta-links'
              />
            </a>
            <a href={event.link} target="_blank">
              <img 
                src='/img/Link.png'
                alt='link'
                className='web-links'
              />
            </a>
          </div>
        </div>
          <p className="event-text">{event.details}</p>
      </div>
      <div className="event-info">
        <p>
          <img
          src='/img/Calendar.png'
          alt='calendar'
          className='event-icon-images'
          />
          {event.startTime} | {event.date}
        </p>
        <p>
          <img
          src='/img/Location.png'
          alt='Location'
          className='event-icon-images'
          />
          {event.location ? `$${event.location}` : "Unknown"}</p>
        <p>
          <img
          src='/img/Receipt.png'
          alt='Receipt'
          className='event-icon-images'
          />
          {event.admission ? `$${event.admission}` : "Free Admission"}</p>
        <p className='save-event-button'>Save</p>
      </div>
    </main>
    </div>
   </div>
 );
};

export default EventDetails;
