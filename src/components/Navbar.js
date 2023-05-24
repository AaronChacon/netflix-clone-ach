import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setHandleShow] = useState(false);

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
          className="navbar__logo"
          src="https://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png"
          alt="logo"
        />

        <img
          className="navbar__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
