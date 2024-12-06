import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, get, set, push } from "firebase/database";
import { NavBar } from "./Navbar_2.js";
import "../style.css";
import event_img from '../img/event.jpg';
import ins_img from '../img/Instagram.png';
import link_img from '../img/Link.png';
import cal_img from '../img/Calendar.png';
import loc_img from '../img/Location.png';
import rec_img from '../img/Receipt.png';

const EventDetails = () => {
  const { id } = useParams(); // Event ID from URL
  const [event, setEvent] = useState(null);
  const [uid, setUid] = useState(null); // To track logged-in user

  // Detect logged-in user
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch event details from Firebase
  useEffect(() => {
    const eventRef = ref(database, `events/${id}`);
    console.log("Fetching event with ID:", id);

    get(eventRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("Event data:", snapshot.val());
          setEvent(snapshot.val());
        } else {
          console.error("Event not found for ID:", id);
        }
      })
      .catch((error) => console.error("Error fetching event details:", error));
  }, [id]);

  // Save the event to the user's savedEvents in Firebase
  const handleSaveEvent = async () => {
    if (!uid) {
      alert("Please log in to save this event.");
      return;
    }

    try {
      const userSavedEventsRef = ref(database, `userProfiles/${uid}/savedEvents`);
      const newEventRef = push(userSavedEventsRef); // Push creates a unique ID for each saved event

      await set(newEventRef, { ...event, eventId: id }); // Save event with additional ID
      alert("Event saved successfully!");
    } catch (error) {
      console.error("Error saving event:", error);
      alert("Failed to save event. Please try again.");
    }
  };

  if (!event) {
    return <p>Loading event details...</p>;
  }

  return (
    <div className="main-content">
      <NavBar />
      <div className="event-page">
        <header className="event-header">
          <img
            src= {event_img}
            alt="event image"
            className="event-section-image"
          />
        </header>
        <main className="event-section-details">
          <div className="event-information">
            <div>
              <h1 className="event-title-details">{event.name}</h1>
              <div className="link-section">
                <a href={event.link} target="_blank" rel="noreferrer">
                  <img
                    src= {ins_img}
                    alt="instagram"
                    className="insta-links"
                  />
                </a>
                <a href={event.link} target="_blank" rel="noreferrer">
                  <img
                    src={link_img}
                    alt="link"
                    className="web-links"
                  />
                </a>
              </div>
              <p className="event-text">
                {event.rsoAffiliation ? `${event.rsoAffiliation}` : null}
              </p>
            </div>
            <p className="event-text">{event.details} </p>
          </div>
          <div className="event-section-info">
            <p>
              <img
                src={cal_img}
                alt="calendar"
                className="event-icon-images"
              />
              {event.startTime} | {event.date}
            </p>
            <p>
              <img
                src={loc_img}
                alt="Location"
                className="event-icon-images"
              />
              {event.location ? `${event.location}` : "Unknown"}
            </p>
            <p>
              <img
                src={rec_img}
                alt="Receipt"
                className="event-icon-images"
              />
              {event.admission ? `$${event.admission}` : "Free Admission"}
            </p>
            <button
              className="save-event-button"
              onClick={handleSaveEvent}
              disabled={!uid} // Disable button if user is not logged in
            >
              Save
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EventDetails;
