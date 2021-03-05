import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserProvider } from "./util/GlobalState";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="app">
          <Route exact path="/" component={Home} />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
