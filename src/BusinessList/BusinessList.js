import React from "react";
import { Business } from "../Business/Business";
import styles from './BusinessList.module.css'
export function BusinessList() {
 //map later instead of manually inserting instances
  return (
    <div className={styles.BusinessList}>
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  );
}
