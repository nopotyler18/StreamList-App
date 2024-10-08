import React, { useState } from 'react';

function StreamList() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Input:', inputValue);
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
            onChange={(e) => setInputValue(e.target.value)} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StreamList;
