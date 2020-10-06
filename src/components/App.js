import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Cause from "./pages/Cause";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import Search from "./pages/Search";
import Nav from "./units/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">App</div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/search" component={Search} />
      <Route path="/Cause/:causeId" component={Cause} />
      <Route path="/Organization/:orgId" component={Organization} />
    </Router>
  );
}

export default App;
