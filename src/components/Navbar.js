import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, setHandleShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  const transitionNavbar = () => {
    if (window.scrollY > 70) {
      setHandleShow(true);
    } else {
      setHandleShow(false);
    }
  };

  return (
    <div className={`navbar ${show ? "navbar--dark" : " "}`}>
      <div className="navbar__contents">
        <img
          onClick={() => history.push("/")}
          className="navbar__logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        <img
          onClick={() => history.push("/profile")}
          className="navbar__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
