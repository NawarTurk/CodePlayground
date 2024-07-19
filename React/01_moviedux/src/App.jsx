import "./styles.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MovieGrid from "./component/MovieGrid";
import React, { useState, useEffect } from "react";
import Watchlist from "./component/Watchlist.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json") // Fetch the movie data from a local JSON file
      .then((response) => response.json()) // Parse the JSON-formatted response into a JavaScript object
      .then((data) => setMovies(data)); // // Update the 'movies' state with an array of movie objects
  }, []);
  // setMovies(m)  // Note: Invoking setMovies here like this
  //  would lead to too many re-renders, causing an infinite loop

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
    console.log(watchlist)  // ________________________________del

  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MovieGrid
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
