import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY,imageUrl } from "../../constants/constants";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data.results[Math.floor((Math.random() * (20 - 1 + 1)) + 1)]);
        setMovie(response.data.results[Math.floor((Math.random() * (20 - 1 + 1)) + 1)]);
      });
  }, []);

  return (
    <div className="banner" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          {movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
