import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Auth from "./components/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import PrivateRoute from "./components/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { AuthActions } from "./redux/AuthSlice";

function App() {
  const authDispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        authDispatch(AuthActions.login(user?.user?.email));
      } else {
        authDispatch(AuthActions.logout());
      }
    });

    return () => unsubscribe();
  }, [authDispatch]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/checkout",
      element: <PrivateRoute />,
      children: [{ path: "/checkout/", element: <CheckoutPage /> }],
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
