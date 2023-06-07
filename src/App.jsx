import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Auth from "./components/Auth/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import PrivateRoute from "./components/Auth/PrivateRoute";
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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        authDispatch(AuthActions.login(user?.uid));
        // fetchcartData
        authDispatch(fetchCartData(uid));
        localStorage.setItem("user", user?.uid);
      } else {
        authDispatch(AuthActions.logout());
        authDispatch(cartActions.emptyTheCart());
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
  }, [authDispatch, uid]);

  // sent cart Data
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
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
      children: [{ path: "/checkout", element: <CheckoutPage /> }],
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
