import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg)`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h2 className="banner__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eveniet
          quam sit, ullam ab autem modi voluptatem sequi maxime nam neque nulla
          maiores sapiente laborum assumenda ut, ex porro facilis?
        </h2>
      </div>

      <div className="banner__fadeBottom"></div>
    </div>
  );
};

export default Banner;
