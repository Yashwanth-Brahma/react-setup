import React from "react";
import Hero from "./components/Hero";
import NavBars from "./components/NavBars";
import SideBar from "./components/SideBar";
import Submenu from "./components/Submenu";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

const App = () => {
  return (
    <>
      <NavBars />
      <Hero />
      <Submenu />
    </>
  );
};

export default App;
