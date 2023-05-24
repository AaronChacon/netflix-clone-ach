import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(https://occ-0-3287-420.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABY8YScmwA8jH1iO4TfbzwO73bedrUDaQncy9SBG8I74i-Vid_OJ6GPTWKUHnsdHg3YRHPd3cv1752vc_LRn8js6AeSqgV-51t5Lj.webp?r=7d9)`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <p className="banner_description">This is a test description</p>
      </div>
    </div>
  );
};

export default Banner;
