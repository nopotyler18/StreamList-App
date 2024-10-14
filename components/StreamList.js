import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function StreamList() {
  const [inputValue, setInputValue] = useState('');  // Track the input field
  const [events, setEvents] = useState([]);  // Track the list of events (movies/shows)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {  // Ensure the input isn't empty
      setEvents([...events, inputValue]);  // Add the current input to the events array
      setInputValue('');  // Clear the input field after submission
    }
  };

  return (
    <div>
      <h1>Welcome to StreamList</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter your movie/show:
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}  // Update the input field
          />
        </label>
        <button type="submit">
          <FontAwesomeIcon icon={faPlusCircle} /> Submit
        </button>
      </form>

      {/* Display the list of events (movies/shows) */}
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
