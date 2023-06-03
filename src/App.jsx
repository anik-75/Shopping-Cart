import React, { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Auth from "./components/Auth";
import Nav from "./components/Nav";

function App() {
  return (
    <React.Fragment>
      <Nav />
      {/* <Homepage /> */}
      <Auth />
    </React.Fragment>
  );
}

export default App;
