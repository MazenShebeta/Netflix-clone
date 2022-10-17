import "./App.css";
import Row from "./Components/Row/Row";
import requests from "./Requests/requests";
import Navbar from "./Components/navbar/Navbar";
import Banner from "./Components/banner/Banner";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MoviePage from "./Components/moviePage/MoviePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

//routes for the movie page

export default App;
