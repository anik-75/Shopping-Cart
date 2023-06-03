import React from "react";
import styles from "./Auth.module.css";
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
  return (
    <React.Fragment>
      <div className={styles.auth_container}>
        <Login />
        <Signup />
      </div>
    </React.Fragment>
  );
}

export default Auth;
