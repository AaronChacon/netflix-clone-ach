import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Switch>
            <Route path="/login">
              <HomePage />;
            </Route>
            <Route exact path="/">
              <HomePage />;
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
