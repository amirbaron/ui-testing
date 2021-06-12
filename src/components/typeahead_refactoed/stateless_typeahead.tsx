import { useEffect, useState } from "react";
import { searchMovieApi } from "../../api";
import "./stateless_typeahead.css";

export interface StatelessTypeaheadProps {
  currentSuggestedMovies: ReadonlyArray<string>;
  onChange: (value: string)=>void;
}

export const StatelessTypeahead: React.FC<StatelessTypeaheadProps> = ({onChange, currentSuggestedMovies, 
  ...props
}) => {
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    onChange(newValue);
  };
  return (
    <>
      <header>Typeahead Example</header>
      <input
        placeholder="Type movie here"
        className="input-field"
        onChange={onInputChange}
      ></input>
      <div className="current-values">
        {currentSuggestedMovies.length > 0 && <div className="movies-label">Movies:</div>}
        {currentSuggestedMovies.map((movie) => {
          return <div className="movie" key={movie}>{movie}</div>;
        })}
      </div>
    </>
  );
};
