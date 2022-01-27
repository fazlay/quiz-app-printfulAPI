import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
