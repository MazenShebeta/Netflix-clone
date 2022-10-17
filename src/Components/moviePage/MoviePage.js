import react from "react";
import "./MoviePage.css";
import { useEffect, useState } from "react";
import axios from "../../Requests/axios";
import requests from "../../Requests/requests";
import { useParams } from "react-router-dom";
import API_KEY from "../../Requests/requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const MoviePage = () => {
  const { id } = useParams();
  const api = "0d2f45106f8161ceb602ef032544747a";
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState([]);

  //get id from url after /movie/

  //get data of one movie

  useEffect(() => {
    async function fetchData() {
      //get movie by id from tmdb
      const request = await axios.get(
        `/movie/${id}?api_key=${api}&language=en-US`
      );
      //print axios request
      setMovie(request.data);
      return request;
    }
    fetchData();
    console.log(movie.data)
    console.log(movie.original_title)

    //get trailer of movie
    const name = movie.original_title;
    console.log("movie name is " + name)
    function getTrailer() {
      movieTrailer(name)
        //search for trailer by name
        .then((url) => {
          //get url of trailer
          const urlParams = new URLSearchParams(new URL(url).search);
          //get id of trailer
          setTrailer(urlParams.get("v"));
        })
    }
    getTrailer();
  }, [id]);

  //get trailer of one movie

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="moviePage">
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.original_title}
          </h1>
          <div className="banner__buttons"></div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 200)}
          </h1>
        </div>
      </header>
      <YouTube videoId={trailer} opts={opts} />
    </div>
  );
};

export default MoviePage;
