import React from "react";
import styles from "./Business.module.css";

export function Business({ yelpBusiness }) {
  // received yelpBusiness for our render to pick what parts it wants for its sections
  return (
    <div className={styles.BusinessContainer}>
      <div className={styles.businessImageContainer}>
        <img
          src={yelpBusiness.imgSrc}
          className={styles.BusinessImage}
          alt=""
        />
      </div>
      <h3 className={styles.businessName}>
        {yelpBusiness.name.toUpperCase()}
      </h3>
      <hr />
      <div className={styles.businessInfoContainer}>
        <div className={styles.businessDetails}>
          <p>{yelpBusiness.address}</p>
          <p>{yelpBusiness.city} </p>
          <p>{`${yelpBusiness.state} ${yelpBusiness.zipCode}`} </p>
        </div>
        <div className={styles.businessReview}>
          <h4>{yelpBusiness.category.toUpperCase()}</h4>
          <h5>{`${yelpBusiness.rating}/5 stars`}</h5>
        </div>
      </div>
    </div>
  );
}
