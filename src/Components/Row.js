import React, { useEffect, useState } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import "../movies-row.css";
import movieTrailer from "movie-trailer";
const image_Base_Url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //   a snippet of code which runs on specific condition/variable
  useEffect(() => {
    //if [] <-- is empty, that means run once when the row loads and don't run again
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // here movieTrailer is a method who searches the trailer for that name we mentioned
      movieTrailer(movie?.name || "")
        .then((url) => {
          // https://youtu.be/XtMThy8QKqU
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  // console.log(movies);
  // console.table();
  return (
    <div className="row-section">
      {/* title */}
      <h2 className="row-title">{props.title}</h2>
      <div className="movies-row">
        {movies.map((movie) => (
          <div className="movie-container" key={movie.id}>
            <div className="img-box">
              <img
                onClick={() => handleClick(movie)}
                className={`movieposter ${
                  props.isLargeRow && "movieposterno"
                } `}
                src={`${image_Base_Url}${
                  props.isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </div>
          </div>
        ))}
      </div>
      {/* container --> postern  */}
      {/* <div
        className={`trailer__hide ${
          props.isTrailerContainer && "trailer__container"
        }`}
      > */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* </div> */}
    </div>
  );
};

export default Row;
