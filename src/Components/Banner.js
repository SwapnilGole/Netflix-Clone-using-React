import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "../banner.css";

const image_Base_Url = "https://image.tmdb.org/t/p/original/";
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

const Banner = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    // const fetchData = async ()=>{

    // }
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // console.log()
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("${image_Base_Url}${movie?.backdrop_path}")`,
          // backgroundPosition: "center center",
        }}
      >
        <div className="banner__content">
          {/* title */}
          <h1 className="banner__title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          {/* idv > 2 btns */}
          <div className="banner__btn__box">
            <button className="banner__btn">Play</button>
            <button className="banner__btn">My List</button>
          </div>

          {/* description */}
          <div className="banner__desc__box">
            <p className="banner__desc">{truncate(movie?.overview, 200)}</p>
          </div>
        </div>
        <div className="banner__fadebottom"></div>
      </header>
    </>
  );
};

export default Banner;
