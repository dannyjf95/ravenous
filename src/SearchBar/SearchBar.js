import React from "react";
import styles from './SearchBar.module.css' //modules file

export function SearchBar() {

 //create a JavaScript object to contain the key-value pairs for each sorting option
 const sortOptions = {
  "highest rating": "rating"
 }

 //iterate through options w/ object.keys().map
const sortOptionsList = () => {
 return Object.keys(sortOptions).map((sortedOption) => (
  <li key={sortOptions[sortedOption]}>{sortedOption}</li> //list item
 ))
}


  return (
    <div className={styles.SearchBar}>
      <div className={styles.filteredSearch}>
        <ul>{sortOptionsList()}</ul> {/**it will have li inserted  */}
      </div>

      <div className={styles.searchBarInputs}>
        <input placeholder={styles.Search} />
        {/** knife and fork favi */}

        <input placeholder={styles.Location} />
        {/** location marker favi */}

        <button id={styles.searchButton}>search</button>
      </div>
    </div>
  );
}
