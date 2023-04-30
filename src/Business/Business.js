import React from "react";
//import css eventually
import styles from "./Business.module.css";

export function Business() {
  const restaurant = {
    ImageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg" /** */,
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
    <div /**container */ className={styles.Business}>
      <div  className={styles.businessImage}>
        <img src={restaurant.ImageSrc} className={styles.image} alt=""/>
      </div>
      <h3>{restaurant.name.toUpperCase()}</h3>
      <div>
        <div className={styles.businessDetails}>
          <p>{restaurant.address}</p>
          <p>{restaurant.city} </p>
          <p>{`${restaurant.state} ${restaurant.zipCode}`} </p>
        </div>
        <div className={styles.businessReview}>
          <p>{restaurant.category.toUpperCase()}</p>
          <p>{`${restaurant.rating} stars`}</p>          
        </div>
      </div>
    </div>
  );
}


