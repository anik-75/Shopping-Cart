import React from "react";
import styles from "./Nav.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../redux/authSlice";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Nav() {
  const authDispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);


  const cart = useSelector((state) => state.cart.totalQuantity);
  const signoutHandler = async () => {
    try {
      await signOut(auth);
      authDispatch(AuthActions.logout());

    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <React.Fragment>
      <nav className={styles.nav_container}>
        <div className={styles.logo}>
          <Link to="/">
            <FontAwesomeIcon icon={faCrown} size="2xl" />
          </Link>
        </div>
        <div className={styles.menu}>
          <h3>
            <Link to="/">Shop</Link>
          </h3>
          <h3>
            {isLoggedIn ? (
              <Link to="/" onClick={signoutHandler}>
                SignOut
              </Link>
            ) : (
              <Link to="/auth">SignIn</Link>
            )}
          </h3>
          <h3 className={styles.icon_container}>
            <Link to="/checkout">
              <FontAwesomeIcon
                className={styles.icon}
                icon={faCartShopping}
                size="sm"
              />
              <span className={styles.number}>{cart}</span>
            </Link>
          </h3>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
