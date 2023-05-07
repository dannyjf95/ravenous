import React, { useState } from "react";
import styles from "./SearchBar.module.css"; //modules file
import searchIcon from "./searchIcon.svg";

export function SearchBar() {
  //state
  const [searchTermState, setSearchTermState] = useState("");
  const [locationState, setLocation] = useState("");
  const [sortByState, setSortBy] = useState("best_match");

  // yelp API sort_by inputs key/value
  const sortByOptions = {
    "Best Match": "best_match",
    "Highly Rated": "rating",
  };

  /**styling for rendered li items that get selected */
  const sortByStyles = (sortBySelected) => {
    return sortByState === sortBySelected ? styles.active : null;
  };
  /**setState to option clicked(sortByStyles) with clickEvent */
  const sortBySelectedStyling = (clickedOption) => {
    setSortBy(clickedOption);
  };

  /** HANDLERS */

  /** search term changes */
  const handleSearchTerm = ({ target }) => {
    setSearchTermState(target.value);
  };

  /**location input changes */
  const handleLocationChange = ({ target }) => {
    setLocation(target.value);
  };
  const exampleMessage = (event) => {
    event.preventDefault();
    apiCall(searchTermState, locationState, sortByState);
  };
  /**simulated search functionality */
  const apiCall = (searchTermState, locationState, sortByState) => {
    console.log(
      `searching yelp API for ${searchTermState}, in ${locationState}, ${sortByState}`
    );
  };

  /**returns 2 li items mapped from sortByOptions object 
     with styling for selected li(called by sortByStyles & CSS)
     onClick handles the clicking and setSortBy'ing
  */

  const sortOptionsList = () => {
    return Object.keys(sortByOptions).map((sortedOption) => (
      <li
        className={sortByStyles(sortedOption)}
        key={sortByOptions[sortedOption]}
        onClick={(e) => {
          sortBySelectedStyling(sortedOption);
          e.preventDefault();
          console.log("Clicked option: ", sortedOption);
        }}
      >
        {sortedOption}
      </li>
    ));
  };

  return (
    <div className={styles.SearchBar}>
      {/**best match & highly rated options container */}
      <div className={styles.sortByOptions}>
        <ul>{sortOptionsList()}</ul>
      </div>

      <form onSubmit={exampleMessage}>
        <div className={styles.searchBarInputs}>
          <input
            onChange={handleSearchTerm}
            type="text"
            placeholder="Search food"
            className={styles.search}
          />

          <input
            onChange={handleLocationChange}
            placeholder="LocationState"
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
