import React from "react";
import styles from "./BusinessList.module.css";
import { Business } from "../Business/Business";
export function BusinessList({ businessesData }) {
  //pass down businessesData(prop) object with individual id for each business

  const mappedBusinessData = businessesData.map((businessDataObject) => (
    <Business key={businessDataObject.id} businessDataObject={businessDataObject} />
  ));

  return (
    <div className={styles.BusinessListContainer}>{mappedBusinessData}</div>
  );
}
