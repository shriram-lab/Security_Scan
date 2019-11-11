import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Dashboard" component={Dashboard} exact></Route>
          <Route path="/" component={Dashboard} exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
