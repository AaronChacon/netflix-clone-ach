import React, { useState } from "react";
import "./Login.css";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__gradient"></div>
      <div className="login__background">
        <img
          className="login__logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        <button className="login__button" onClick={() => setSignIn(true)}>
          Sign in
        </button>
      </div>

      <div className="login__body">
        {!signIn ? (
          <>
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>

            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>

            <form className="login__form">
              <input
                className="login__input"
                type="email"
                placeholder="Email Address"
              />

              <button
                onClick={() => setSignIn(true)}
                className="login__buttonInit"
              >
                Get Started
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="login__signIn">
              <h1>Welcome back!</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
