import React from "react";
import { Business } from "../Business/Business";
import styles from "./BusinessList.module.css";
export function BusinessList({ businessesData }) {
  //map later instead of manually inserting instances
  //pass down businessesData(prop) object with individual id for each business

  const mappedBusinessData = businessesData.map((businessData) => (
    <Business key={businessData.id} businessDataObject={businessData} />
  ));

  return <div className={styles.BusinessListContainer}>{mappedBusinessData}</div>;
}
