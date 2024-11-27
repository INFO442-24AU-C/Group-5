import React, { useEffect, useState } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";
import "../style.css";


export function Events({ activeFilter, searchText }) {
 const [events, setEvents] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);


 useEffect(() => {
   const eventsRef = ref(database, "events");


   const unsubscribe = onValue(
     eventsRef,
     (snapshot) => {
       const data = snapshot.val();
       if (data) {
         // Use Object.entries to keep track of both the key (event ID) and the event data
         const eventsArray = Object.entries(data).map(([key, event]) => ({
           id: key, // Set the event ID to be the Firebase key
           ...event, // Spread the event data
         }));
         setEvents(eventsArray);
       } else {
         setEvents([]);
       }
       setLoading(false);
     },
     (error) => {
       console.error("Error fetching events:", error);
       setError("Failed to load events.");
       setLoading(false);
     }
   );


   return () => unsubscribe();
 }, []);


 const filteredEvents = events
   .filter((event) => activeFilter === "All" || event.genre === activeFilter) // Filter by genre
   .filter((event) => event.name.toLowerCase().includes(searchText.toLowerCase())); // Filter by search text


 if (loading) {
   return <p>Loading events...</p>;
 }


 if (error) {
   return <p className="error">{error}</p>;
 }


 return (
   <section className="events-section">
     <h3>Events</h3>
     <div className="event-cards">
       {filteredEvents.length > 0 ? (
         filteredEvents.map((event, index) => (
           <Link
             key={index}
             to={`/event/${event.id}`} // Pass the event ID (from Firebase key)
             className="event-card"
           >
             <img
               src={event.headerImage || "/img/event.jpg"} // Use default image if none is provided
               alt={event.title}
               className="event-image"
             />
             <div className="event-info">
               <h4 className="event-title">{event.name}</h4>
               <p className="event-description">{event.details}</p>
               <div className="event-details">
                 <p className="event-date">{`${event.date} | ${event.startTime || "N/A"}`}</p>
                 <p className="event-admission">
                   {event.admission ? `$${event.admission}` : "Free Admission"}
                 </p>
               </div>
             </div>
           </Link>
         ))
       ) : (
         <p style={{ color: "white" }}>No events match your search.</p>
       )}
     </div>
   </section>
 );
}
