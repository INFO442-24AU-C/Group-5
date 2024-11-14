
// // components/SearchBar.js
// export function SearchBar() {
//   const searchBarContainer = document.createElement('div');
//   searchBarContainer.classList.add('search-bar-container');

//   // Search input
//   const searchBar = document.createElement('input');
//   searchBar.type = 'text';
//   searchBar.placeholder = 'Find your birds of a feather!';
//   searchBar.classList.add('search-bar');

//   // Filter button container
//   const filterContainer = document.createElement('div');
//   filterContainer.classList.add('filter-container');

//   // Filter buttons
//   const filters = ['All', 'Saved', 'Classical', 'Rock', 'Kpop', 'Country', 'Voice'];
//   filters.forEach((filterText) => {
//     const filterButton = document.createElement('button');
//     filterButton.textContent = filterText;
//     filterButton.classList.add('filter-button');
//     if (filterText === 'All') {
//       filterButton.classList.add('active');
//     }
//     filterContainer.appendChild(filterButton);
//   });

//   searchBarContainer.appendChild(searchBar);
//   searchBarContainer.appendChild(filterContainer);

//   return searchBarContainer;
// }


// components/SearchBar.js
import React, { useState } from 'react';
import '../style.css';

export function SearchBar() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Saved', 'Classical', 'Rock', 'Kpop', 'Country', 'Voice'];

  const handleFilterClick = (filterText) => {
    setActiveFilter(filterText);
  };

  return (
    <div className="search-bar-container">
      {/* Search input */}
      <input
        type="text"
        placeholder="Find your birds of a feather!"
        className="search-bar"
      />

      {/* Filter button container */}
      <div className="filter-container">
        {filters.map((filterText) => (
          <button
            key={filterText}
            className={`filter-button ${activeFilter === filterText ? 'active' : ''}`}
            onClick={() => handleFilterClick(filterText)}
          >
            {filterText}
          </button>
        ))}
      </div>
    </div>
  );
}
