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
    setResults([])
  }
    };

  //when something is typed in the search bar, results are shown

  return (
    <div>
      <form className="search-box">
        <button className="btn-search">
          <BiSearch />
        </button>
        <input
          type="text"
          className="search"
          placeholder="Search"
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
      <div className="search-result">
        <h1>Search Results</h1>
        {results.map((movie) => (
          // <Link to={`/movie/${movie.id}`}>
            <div className="moveis-found">
              <h1>{movie.title}</h1>
              <img src={movie.poster_path} alt="" />
            </div>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
