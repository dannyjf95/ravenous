import React from "react";
import styles from './SearchBar.module.css' //modules file

export function SearchBar() {
  return (
    <div className="sorting">
      <div className="sorting-options">
        <button>highest rated</button>
        <button>open now</button>
      </div>

      <div className="search-bar">
        <input id="searchTerm" placeholder="Search what you fancy" />
        {/** knife and fork favi */}

        <input id="searchLocation" placeholder="Location" />
        {/** location marker favi */}

        <button id="search-button">search</button>
      </div>
    </div>
  );
}
