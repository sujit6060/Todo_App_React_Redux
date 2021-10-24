import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Todo from "./Components/Todo";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Switch>
        <Route path="/todo">
          <Todo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
