import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../app/request";
import axios from "../app/axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(requests.fetchNexflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  const bannerBg = movie
    ? `"https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"`
    : "https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg";

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundPosition: "center center",
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.name || movie?.name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h2 className="banner__description">{movie?.overview}</h2>
      </div>

      <div className="banner__fadeBottom"></div>
    </div>
  );
};

export default Banner;
