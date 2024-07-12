import React, {useState, useEffect} from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MovieGrid() {

    const [movies, setMovies] = useState([]);


    // setMovies(m)  // Note: Invoking setMovies here like this
                    //  would lead to too many re-renders, causing an infinite loop

    useEffect(() => {
        fetch("movies.json")  // Fetch the movie data from a local JSON file
        .then(response => response.json())  // Parse the JSON-formatted response into a JavaScript object
        .then(data => setMovies(data));  // // Update the 'movies' state with an array of movie objects
    }, []);

    return (
        <div className='movies-grid'>
            {
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </div>
    );
}