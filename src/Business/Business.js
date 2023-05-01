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
    <div /**container */ className={styles.BusinessContainer}>
      <div className={styles.businessImageContainer}>
        <img
          src={restaurant.ImageSrc}
          className={styles.BusinessImage}
          alt=""
        />
      </div>
      <h3 className={styles.busName}>{restaurant.name.toUpperCase()}</h3>
      <hr />
      <div className={styles.businessInfoContainer}>
        <div className={styles.businessDetails}>
          <p>{restaurant.address}</p>
          <p>{restaurant.city} </p>
          <p>{`${restaurant.state} ${restaurant.zipCode}`} </p>
        </div>

        <div className="vertical-line"></div>
        <div className={styles.businessReview}>
          <h3>{restaurant.category.toUpperCase()}</h3>
          <h4>{`${restaurant.rating}/5 stars`}</h4>
        </div>
        <hr />
      </div>
    </div>
  );
}
