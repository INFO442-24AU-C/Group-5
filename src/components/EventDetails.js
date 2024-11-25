
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
   <main className="event-page">
    <div className="event-top">
      <NavBar />
      <div className="event-header">
        <div className="event-details">
          <h1 className = "event-title">{event.name}</h1>
          <p>{event.details}</p>
          <p>{event.admission ? `$${event.admission}` : "Free Admission"}</p>
        </div>
      </div>
    </div>
    
    {/* <h1>{event.name}</h1>
    <p>{event.details}</p>
    <p>{event.date}</p>
    <p>{event.admission ? `$${event.admission}` : "Free Admission"}</p>
     Other event details */}
   </main>
 );
};

export default EventDetails;
