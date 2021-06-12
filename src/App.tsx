import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TypeaheadWithLogic } from './components/typeahead_with_logic/typeahead_with_logic';
import { StatefullTypeahead } from './components/typeahead_refactoed/statefull_typeahead';
import { searchMovieApi } from './api';

function App() {
  return (
    <div className="App">
      {/* <TypeaheadWithLogic></TypeaheadWithLogic> */}
      <StatefullTypeahead searchMovieApi={searchMovieApi}></StatefullTypeahead>
    </div>
  );
}

export default App;
