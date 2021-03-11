import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NaviBar from "./components/NaviBar";

const App = () => {
  return (
    <BrowserRouter>
      <NaviBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/Contact">
          <ContactUs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
