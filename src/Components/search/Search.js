import React, { useEffect } from "react";
import "./Search.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
// import search from "./../../Requests/requests";
import axios from "axios";

const Search = () => {
  // const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);


  const handleChange = (query) => {
    if(query.length > 0){
    document.querySelector(".search-result").style.display = "block";
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=0d2f45106f8161ceb602ef032544747a&language=en-US&query=${query}&page=1&include_adult=false`
      );
      console.log(request.data.results);
      setResults(request.data.results);
      return request;
    };
    fetchData();
  }
  else {
    document.querySelector(".search-result").style.display = "none";
    setResults([])
  }
    };
    const handleSubmit = (e) => {
      e.preventDefault();
    };

  //when something is typed in the search bar, results are shown

  return (
    <div>
      <form className="search-box" onSubmit={handleSubmit}>
        <button className="btn-search">
          <BiSearch />
        </button>
        <input
          type="text"
          className="search"
          // placeholder="Search"
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
      <div className="search-result">
        <h1>Search Results</h1>
        {results.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div className="movie-found">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              {/* // alt={movie.title} */}
              <h3>{movie.title}</h3>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
