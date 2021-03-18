import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { ProvideAuth } from "./util/use-auth";
import SignIn from "./components/SignIn";
import Profile from "./pages/Profile";
require("./util/filebase");

function App() {
  return (
    <Router>
      <ProvideAuth>
        <div className="app">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signin" component={SignIn} />
        </div>
      </ProvideAuth>
    </Router>
  );
}

export default App;
