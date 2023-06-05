import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Auth from "./components/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import PrivateRoute from "./components/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "./redux/authSlice";
import { fetchCartData, sendCartData } from "./redux/cartAction";
import { cartActions } from "./redux/cartSlice";

let isInitial = true;

function App() {
  const authDispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const uid = useSelector((state) => state.authentication.user);
  console.log(uid);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
        authDispatch(AuthActions.login(user?.uid));
        authDispatch(fetchCartData(uid));
      } else {
        authDispatch(AuthActions.logout());
        authDispatch(cartActions.emptyTheCart());
      }
    });

    return () => unsubscribe();
  }, [authDispatch, uid]);

  // //fetch cart Data
  // useEffect(() => {
  //   authDispatch(fetchCartData(uid));
  // }, [authDispatch, uid]);

  // sent cart Data
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      console.log(uid);
      authDispatch(sendCartData(cart, uid));
    }
  }, [cart, authDispatch, uid]);

  //router
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
