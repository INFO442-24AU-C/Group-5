
import React, { useState }from 'react';
import { NavBar } from './Navbar_2.js';
import { SearchBar } from './Searchbar.js';
import { Events } from './Event.js';
import { RSOSection } from './RSOsection.js';

export function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  return (
    <div className="main-content">
      <NavBar />
      <div className='home-page'>
      <div className="background-image" />

      <SearchBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Events activeFilter={activeFilter} searchText={searchText}/>

      <RSOSection />
      </div>
    </div>
  );
}