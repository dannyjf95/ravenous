import styles from "./App.module.css";
import { BusinessList } from "../BusinessList/BusinessList";
import { SearchBar } from "../SearchBar/SearchBar";
import { businessData } from "../BusinessList/businessData";
import { yelpApi } from "../../utils/Yelp";

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
