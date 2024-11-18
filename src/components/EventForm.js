import React, { useState } from "react";
import { database, storage } from "./firebaseConfig";
import { ref as dbRef, push, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const EventForm = () => {
  const [event, setEvent] = useState({
    role: "",
    name: "",
    headerImage: null,
    details: "",
    rsoAffiliation: "",
    date: "",
    startTime: "",
    endTime: "",
    admission: "",
    genre: "",
    link: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(""); // For success or error messages
  const genres = ["Classical", "Rock", "Kpop", "Country", "Voice", "Other"]; // Genre options

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  // Handle genre selection
  const handleGenreSelect = (selectedGenre) => {
    setEvent({ ...event, genre: selectedGenre });
  };

  // Handle image selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setEvent({ ...event, headerImage: file });
  };

  // Reset form
  const handleReset = () => {
    setEvent({
      role: "",
      name: "",
      headerImage: null,
      details: "",
      rsoAffiliation: "",
      date: "",
      startTime: "",
      endTime: "",
      admission: "",
      genre: "",
      link: "",
    });
    setMessage("");
    setIsSubmitting(false);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      console.log("Starting submission...");
      const eventsRef = dbRef(database, "events");
      const newEventRef = push(eventsRef);

      const eventData = { ...event };

      // Optional image upload
      if (event.headerImage) {
        const fileRef = storageRef(storage, `event-images/${event.headerImage.name}`);
        console.log("Uploading image...");
        await uploadBytes(fileRef, event.headerImage);
        eventData.headerImage = await getDownloadURL(fileRef);
        console.log("Image URL retrieved:", eventData.headerImage);
      }

      // Save event data to Firebase Realtime Database
      console.log("Saving event data:", eventData);
      await set(newEventRef, eventData);
      console.log("Event saved successfully!");

      setMessage("Event created successfully!");
      handleReset();
    } catch (error) {
      console.error("Error during form submission:", error);
      setMessage("Error creating event. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="event-form-container">
      <form onSubmit={handleSubmit} className="event-form">
        <h1>Create an Event</h1>

        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={event.role}
          onChange={handleChange}
          required
          className="role-selection"
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="Student">Student</option>
          <option value="RSO">RSO</option>
        </select>

        <label htmlFor="name">Event Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter event name"
          value={event.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="headerImage">Header Image (Optional)</label>
        <input id="headerImage" type="file" name="headerImage" onChange={handleImageUpload} />

        <label htmlFor="details">Details</label>
        <textarea
          id="details"
          name="details"
          placeholder="Add event details"
          value={event.details}
          onChange={handleChange}
          required
        />

        {event.role === "RSO" && (
          <>
            <label htmlFor="rsoAffiliation">RSO Affiliation</label>
            <input
              id="rsoAffiliation"
              type="text"
              name="rsoAffiliation"
              placeholder="Type to find an RSO"
              value={event.rsoAffiliation}
              onChange={handleChange}
            />
          </>
        )}

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />

        <div className="time-container">
          <div>
            <label htmlFor="startTime">Start Time</label>
            <input
              id="startTime"
              type="time"
              name="startTime"
              value={event.startTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="endTime">End Time</label>
            <input
              id="endTime"
              type="time"
              name="endTime"
              value={event.endTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <label htmlFor="admission">Admission Price</label>
        <input
          id="admission"
          type="number"
          name="admission"
          placeholder="Add a price"
          value={event.admission}
          onChange={handleChange}
        />

        <label htmlFor="genre">Genre</label>
        <div className="genre-selection">
          {genres.map((genre) => (
            <button
              type="button"
              key={genre}
              className={`genre-button ${event.genre === genre ? "selected" : ""}`}
              onClick={() => handleGenreSelect(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        <label htmlFor="link">Add a Link</label>
        <input
          id="link"
          type="url"
          name="link"
          placeholder="Link to Social Media Post or Website"
          value={event.link}
          onChange={handleChange}
        />

        <div className="form-buttons">
          <button type="button" onClick={handleReset} className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="save-button" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>

        {message && (
          <div
            className={`message ${
              message.includes("Error") ? "error" : "success"
            }`}
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default EventForm;
