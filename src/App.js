import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faCartPlus, faInfoCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import MovieSearch from './components/MovieSearch';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/"><FontAwesomeIcon icon={faHome} /> StreamList</Link></li>
            <li><Link to="/movies"><FontAwesomeIcon icon={faFilm} /> Movies</Link></li>
            <li><Link to="/cart"><FontAwesomeIcon icon={faCartPlus} /> Cart</Link></li>
            <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
