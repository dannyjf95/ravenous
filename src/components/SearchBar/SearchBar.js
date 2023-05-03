import React from "react";
import styles from "./SearchBar.module.css"; //modules file
import searchIcon from "./searchIcon.svg";



export function SearchBar() {
  //create a JavaScript object to contain the key-value pairs for each sorting option
  const sortOptions = {
    "Highly Rated Restaurants": "rating",
    // "highest rating": "rating",
    // "highest rating": "rating",
  };

  //iterate through options w/ object.keys().map
  const sortOptionsList = () => {
    return Object.keys(sortOptions).map((sortedOption) => (
      /**new sortOptions array[sortedOptions] is used  */
      <li key={sortOptions[sortedOption]}>{sortedOption}</li> //list item
    ));
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.filteredSearch}>
        <ul>{sortOptionsList()}</ul> {/**it will have li inserted  */}
        <hr />
      </div>

      <div className={styles.searchBarInputs}>
        <input placeholder="Search food" className={styles.search} />
        {/** knife and fork favi */}

        <input placeholder="Location" className={styles.location} />
        {/** location marker favi */}
        
        <button id={styles.searchButton}>
        <img src={searchIcon} alt="Search" />
        </button>
        
      </div>
    </div>
  );
}
