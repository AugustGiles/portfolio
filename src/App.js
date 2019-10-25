import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";

function App() {
  return (
    <Router>
      <header>
        <Navigation />
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
