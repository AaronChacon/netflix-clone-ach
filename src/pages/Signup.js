import React, { useState } from "react";
import "./Signup.css";
import { auth } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const register = (e) => {
    e.preventDefault();
    console.log(user);
    // Create users with email and password
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage + "-" + errorCode);
        // ..
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage + " - " + errorCode);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="signup">
      <form className="signup__form">
        <h1>Sign In</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleInputChange}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4 className="signup__sublabel">
          <span>New to Netflix?</span>
          <span onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignupPage;
