import React from "react";
import styles from "./Business.module.css";

export function Business({ businessDataObject }) {
  // received businessDataObject for our render to pick what parts it wants for its sections
  return (
    <div className={styles.BusinessContainer}>
      <div className={styles.businessImageContainer}>
        <img
          src={businessDataObject.ImageSrc}
          className={styles.BusinessImage}
          alt=""
        />
      </div>
      <h3 className={styles.busName}>
        {businessDataObject.name.toUpperCase()}
      </h3>
      <hr />
      <div className={styles.businessInfoContainer}>
        <div className={styles.businessDetails}>
          <p>{businessDataObject.address}</p>
          <p>{businessDataObject.city} </p>
          <p>{`${businessDataObject.state} ${businessDataObject.zipCode}`} </p>
        </div>
        <div className={styles.businessReview}>
          <h4>{businessDataObject.category.toUpperCase()}</h4>
          <h5>{`${businessDataObject.rating}/5 stars`}</h5>
        </div>
      </div>
    </div>
  );
}
