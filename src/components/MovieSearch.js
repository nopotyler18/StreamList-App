import React, { useState, useEffect } from 'react';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);  // Initialize as an empty array

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const storedMovies = JSON.parse(localStorage.getItem('movieSearchResults')) || [];
    setMovies(storedMovies);
  }, []);

  const searchMovies = async (event) => {
    event.preventDefault();
    console.log("Search button clicked with query:", query);  // Log the search query

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f21a0718965c97c5050a941ff81caca1&query=${query}`);
      const data = await response.json();
      
      if (data.results && Array.isArray(data.results)) { // Ensure results is an array
        setMovies(data.results);  // Update state with results
        localStorage.setItem('movieSearchResults', JSON.stringify(data.results));
      } else {
        setMovies([]);  // Set movies to an empty array if no results
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setMovies([]);  // Set movies to empty array on error
    }
  };

  return (
    <div>
      <h1>Search for Movies</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <p>Release Date: {movie.release_date}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
