import React from "react";

export function SearchBar() {
  return (
    <div>
      <button>highest rated</button>
      <button>open now</button>
      <input id="searchTerm" />
      <input id="searchLocation" />
      <button>search</button>
    </div>
  );
}
