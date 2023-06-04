import React, { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Auth from "./components/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
