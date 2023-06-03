import React from "react";
import styles from "./Nav.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Nav() {
  return (
    <React.Fragment>
      <nav className={styles.nav_container}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faCrown} size="2xl" />
        </div>
        <div className={styles.menu}>
          <h3>Shop</h3>
          <h3>SignOut</h3>
          <h3 className={styles.icon_container}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faCartShopping}
              size="sm"
            />
            <span className={styles.number}>1</span>
          </h3>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
