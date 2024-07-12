import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All Ratings");

  // setMovies(m)  // Note: Invoking setMovies here like this
  //  would lead to too many re-renders, causing an infinite loop

  useEffect(() => {
    fetch("movies.json") // Fetch the movie data from a local JSON file
      .then((response) => response.json()) // Parse the JSON-formatted response into a JavaScript object
      .then((data) => setMovies(data)); // // Update the 'movies' state with an array of movie objects
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const includesSearchTerm = (movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());

  const includesGenre = (movie) =>
    genre === "All Genres" ||
    movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase();

  const includesRating = (movie) => {
    switch (rating) {
      case "All Ratings":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  let filteredMovies = movies.filter(
    (movie) =>
      includesSearchTerm(movie) && includesGenre(movie) && includesRating(movie)
  );

  // if (!genre.includes("All Genres"))
  //   filteredMovies = filteredMovies.filter((movie) =>
  //     movie.genre.toLocaleLowerCase().includes(genre.toLocaleLowerCase())
  //   );

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All Ratings</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
