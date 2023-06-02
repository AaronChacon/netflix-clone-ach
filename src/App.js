import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase.config";
import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import { login, logout, selectUser } from "./redux/slices/userSlice";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Switch>
            <Route path="/profile"></Route>
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
