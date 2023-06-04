import React, { useReducer } from "react";
import styles from "./Signup.module.css";
import { Button, Input } from "@chakra-ui/react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthActions } from "../redux/AuthSlice";
import { useDispatch } from "react-redux";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  valid: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
        valid: `${action.payload === "" ? false : true}`,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
        valid: `${action.payload === "" ? false : true}`,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
        valid: `${
          action.payload === "" || action.payload.length < 8 ? false : true
        }`,
      };
    case "SET_CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: action.payload,
        valid: `${
          action.payload === "" && action.payload !== state.password
            ? false
            : true
        }`,
      };
    case "RESET_STATE":
      console.log("reset");
      return initialState;
    default:
      return state;
  }
};

function Signup() {
  const authDispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);

  // form submit handler
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      // validation
      if (state.valid) {
        let user = await createUserWithEmailAndPassword(
          auth,
          state.email,
          state.password
        );
        authDispatch(AuthActions.signUp(user.user.email));
        dispatch({ type: "RESET_STATE" });
        console.log(user);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className={styles.form_container}>
        <h2>Don&#39;t have an account?</h2>
        <p>Sign up with your email and password</p>
        <Input
          className={styles.input}
          type="text"
          placeholder="Name"
          variant="flushed"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
        <Input
          className={styles.input}
          type="email"
          placeholder="Email"
          variant="flushed"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />
        <Input
          className={styles.input}
          type="password"
          placeholder="Password"
          variant="flushed"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
        />
        <Input
          className={styles.input}
          type="password"
          placeholder="Confirm Password"
          variant="flushed"
          value={state.confirmPassword}
          onChange={(e) =>
            dispatch({ type: "SET_CONFIRM_PASSWORD", payload: e.target.value })
          }
        />
        <Button
          size="md"
          type="submit"
          colorScheme="blue"
          className={styles.btn}
        >
          Signup
        </Button>
      </form>
    </React.Fragment>
  );
}

export default Signup;
