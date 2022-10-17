import react from "react";
import "./Row.css";
import { useState, useEffect } from "react";
import axios from "../../Requests/axios";
import requests from "../../Requests/requests";
import { Link } from "react-router-dom";


const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);

      return request;
    }
    fetchData();
  }, [fetchUrl]);


  

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) =>
          //when clicked on a movie poster, it will take you to the movie page
          //if title is netflix original, then it will show the movie trailer
          title == "NETFLIX ORIGINALS" || title == "Trending Now" ? (
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.netflix.com/eg-en/">
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              </a>

            </div>
          ) : (
            <Link to={`/movie/${movie.id}`}>
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Row;
