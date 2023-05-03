import React from "react";

import styles from "./App.module.css";
import { BusinessList } from "../BusinessList/BusinessList";
import { SearchBar } from "../SearchBar/SearchBar";
import { businessData } from "../../businessData";

//passed down data through other file instead of hard coded in App
function App() {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businessesData={businessData} />
    </div>
  );
}

export default App;
