
import React from 'react';
import { NavBar } from './Navbar_2.js';
import { SearchBar } from './Searchbar.js';
import { Events } from './Event.js';
import { RSOSection } from './RSOsection.js';

export function HomePage() {
  return (
    <div className="main-content">
      <NavBar />
      <div className='home-page'>
      <SearchBar />
      <div className="background-image" />
      <Events />
      <RSOSection />
      </div>
    </div>
  );
}