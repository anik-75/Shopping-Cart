import React, { useReducer } from "react";
import styles from "./Login.module.css";
import { Input, Button } from "@chakra-ui/react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../redux/authSlice";
const initialState = {
  email: "test@test.com",
  password: "123456789",
  valid: false,
};

const reducer = (state, action) => {
  switch (action.type) {
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
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};
function Login() {
  const authDispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      let userCredential = await signInWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
      authDispatch(AuthActions.login(userCredential.user.uid));
      localStorage.setItem("user", userCredential.user.uid);
      dispatch({ type: "RESET_STATE" });
    } catch (err) {
      return err.message;
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className={styles.login_container}>
        <h2>Already have an account?</h2>
        <p>Sign in with your email and password</p>
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
        <Button
          size="md"
          className={styles.btn}
          type="submit"
          colorScheme="blue"
        >
          Login
        </Button>
      </form>
    </React.Fragment>
  );
}

export default Login;
