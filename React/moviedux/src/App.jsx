import './App.css';
import './styles.css';
import Header from './component/Header';
import Footer from './component/Footer';
import MovieGrid from './component/MovieGrid';
import React, { useState, useEffect } from "react";


function App() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    fetch("movies.json") // Fetch the movie data from a local JSON file
      .then((response) => response.json()) // Parse the JSON-formatted response into a JavaScript object
      .then((data) => setMovies(data)); // // Update the 'movies' state with an array of movie objects
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <Header />
      </div>
      <MovieGrid movies={movies} />
     <Footer />
    </div>
  );
}

export default App;
