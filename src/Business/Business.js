import React from "react";
//import css eventually
import { styles, businessContainer, img } from "../styles"; //temp

export function Business() {
  const business = {
    ImageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg" /** */,
    name: "MarginOtto Pizzeria" /** */,
    address: "1010 Paddington Way" /** */,
    city: "Flavortown" /** */,
    state: "NY" /** */,
    zipCode: "10101" /** */,
    category: "Italian" /** */,
    rating: 4.5 /** */,
    reviewCount: 90 /** */,
  };


  return (
    <div /**container */ style={businessContainer}>
      <div className="business-image" >
        <img src={business.ImageSrc} style={img}/>        
      </div>
      <h3>{business.name.toUpperCase()}</h3>
      <div style={styles}>
        <div className="business-details">
          <p>{business.address}</p>
          <p>{business.city} </p>
          <p>{`${business.state} ${business.zipCode}`} </p>
          <p>{}</p>
        </div>
        <div className="business-type-ratings">
          <p>{business.category.toUpperCase()}</p>
          <p>{`${business.rating} stars`}</p>
          <p>{`${business.reviewCount} reviews`}</p>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}
