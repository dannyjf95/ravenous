import React from "react";

import "./App.css";
// import { Business } from '../Business/Business';
import { BusinessList } from "../BusinessList/BusinessList";
import { SearchBar } from "../SearchBar/SearchBar";

function App() {
  return (
    <div>
      <BusinessList />
      <SearchBar />
    </div>
  );
}

export default App;
