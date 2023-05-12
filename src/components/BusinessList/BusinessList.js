import React from "react";
import styles from "./BusinessList.module.css";
import { Business } from "../Business/Business";
export function BusinessList({ yelpBusinessData }) {
  //pass down yelpBusinessData(prop) object with individual id for each business
// console.log(yelpBusinessData)
  const mappedBusinessData = yelpBusinessData.map((yelpBusinessObject) => (
    <Business key={yelpBusinessObject.id/**id key */} yelpBusiness={yelpBusinessObject/**state data */} />
  ));

  return (
    <div className={styles.BusinessListContainer}>{mappedBusinessData}</div>
  );
}
