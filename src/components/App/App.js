import React, { useState } from "react";
import styles from "./App.module.css";
import { BusinessList } from "../BusinessList/BusinessList";
import { SearchBar } from "../../SearchBarContainer/SearchBar/SearchBar";

import Yelp from "../../utils/Yelp";

//passed down data through other file instead of hard coded in App
function App() {
  //remove hard code and pass real api business return state instead
  const [yelpBusiness, setYelpBusiness] = useState([]);
  // console.log(yelpBusiness)
  
  
  const results = async (searchTerm, location, sortBy) => {
    const yelpBusinesses = await Yelp.searchYelp(searchTerm, location, sortBy);
    //set the results to the state and pass to businessList instead of mock data
    setYelpBusiness(yelpBusinesses);
  };

  

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar yelpSearchResults={results} />
      <BusinessList yelpBusinessData={yelpBusiness} />
    </div>
  );
}

export default App;
