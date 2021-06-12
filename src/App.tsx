import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MoviesSearchWithLogic } from './components/movies_search_with_logic/movies_search_with_logic';
import { StatefullMoviesSearch } from './components/movies_search_refactored/statefull_movies_search';
import { searchMovieApi } from './api';

function App() {
  return (
    <div className="App">
      {/* <MoviesSearchWithLogic></MoviesSearchWithLogic> */}
      <StatefullMoviesSearch searchMovieApi={searchMovieApi}></StatefullMoviesSearch>
    </div>
  );
}

export default App;
