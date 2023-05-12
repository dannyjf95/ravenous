import React, { useState } from "react";
import styles from "./SearchBar.module.css"; //modules file
import searchIcon from "./searchIcon.svg";

export function SearchBar({yelpSearchResults/**api call function */}) {
  //state
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  // yelp API sort_by inputs key/value
  const sortByOptions = {
    "Best Match": "best_match",
    "Highly Rated": "rating",
  };

  /**styling for rendered li items that get selected */
  const sortByStyles = (clickedOption) => {
    return sortBy === clickedOption ? styles.active : null;
  };
  /**setState to option clicked(sortByStyles) with clickEvent */
  const sortBySelectedStyling = (clickedOption) => {
    setSortBy(clickedOption);
  };

  /** HANDLERS */

  /** search term changes */
  const handleSearchTerm = ({ target }) => {
    setSearchTerm(target.value);
  };

  /**location input changes */
  const handleLocationChange = ({ target }) => {
    setLocation(target.value);
  };

  /**simulated search functionality */
  
//actual func handleExample/handleSearch apples to be api call func passed as prop
  const handleSubmit = (event) => {
    event.preventDefault();
    yelpSearchResults(searchTerm, location, sortBy);
  };



  /**returns 2 li items mapped from sortByOptions object 
     with styling for selected li(called by sortByStyles & CSS)
     onClick handles the clicking and setSortBy'ing
  */

  const sortOptionsList = () => {
    return Object.keys(sortByOptions).map((sortByChoice) => (
      <li
        className={sortByStyles(sortByChoice)}
        key={sortByOptions[sortByChoice]}
        onClick={(e) => {
          sortBySelectedStyling(sortByChoice);
          e.preventDefault();
          // console.log("Clicked option: ", sortByChoice);
        }}
      >
        {sortByChoice}
      </li>
    ));
  };

  return (
    <div className={styles.SearchBar}>
      {/**best match & highly rated options container */}
      <div className={styles.sortByOptions}>
        <ul>{sortOptionsList()}</ul>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.searchBarInputs}>
          <input
            onChange={handleSearchTerm}
            placeholder="Search food"
            className={styles.search}
          />

          <input
            onChange={handleLocationChange}
            placeholder="Location"
            className={styles.location}
          />

          <button type="submit" id={styles.searchButton}>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </form>
    </div>
  );
}
