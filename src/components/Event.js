import React, { useEffect, useState } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";
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
          const eventsArray = Object.values(data);
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

    return () => unsubscribe(); // Cleanup subscription on component unmount
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
            <div key={index} className="event-card">
              <img
                src={event.headerImage || "/img/default-event.jpg"} // Use default image if none is provided
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
            </div>
          ))
        ) : (
          <p style={{ color: 'white' }}>No events match your search.</p>
        )}
      </div>
    </section>
  );
}
