import React from "react";
import styles from "./Auth.module.css";
import Login from "./Login";
import Signup from "./Signup";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
function Auth() {
  return (
    <React.Fragment>
      <Nav />
      <div className={styles.auth_container}>
        <Login />
        <Signup />
      </div>
      <Outlet/>
    </React.Fragment>
  );
}

export default Auth;
