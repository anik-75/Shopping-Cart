import React from "react";
import styles from "./Homepage.module.css";
import Item from "./Item";
function Homepage() {
  return (
    <React.Fragment>
      {/* 1Row */}
      <div className={styles.collection_container}>
        <div className={styles.accessories_container}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>

        {/* 2nd  */}
        <div className={styles.categories_container}>
          <div></div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
