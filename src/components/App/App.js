import React, { useState } from "react";
import styles from "./App.module.css";
import { BusinessList } from "../BusinessList/BusinessList";
import { SearchBar } from "../SearchBar/SearchBar";

import Yelp from "../../utils/Yelp";


//passed down data through other file instead of hard coded in App
function App() {
  //remove hard code and pass real api business return state instead
  const [yelpBusiness, setYelpBusiness] = useState([])

   const results = async (searchTerm, location, sortBy) => {
    const yelpBusinesses = await Yelp.searchYelp(searchTerm, location, sortBy)
    //set the results to the state and pass to businessList instead of mock data
    setYelpBusiness(yelpBusinesses)
  }
  
  // console.log(yelpBusiness)
  

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar   searchResults={results}/>
      <BusinessList businessesData={yelpBusiness} />
    </div>
  );
}

export default App;
