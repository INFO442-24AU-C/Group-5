import React from "react";
import EventForm from "./EventForm";
import { NavBar } from "./Navbar_2";

const CreateEventPage = () => {
  return (
    <div className="main-content">
      <NavBar />
      <EventForm />
    </div>
  );
};

export default CreateEventPage;
