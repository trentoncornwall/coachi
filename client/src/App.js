import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import { ProvideAuth } from "./util/use-auth";

function App() {
  return (
    <Router>
      <ProvideAuth>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/feed" component={Feed} />
        </div>
      </ProvideAuth>
    </Router>
  );
}

export default App;
