import { useEffect, useState } from "react";
import "./stateless_movies_search.css";

export interface StatelessMoviesSearchProps {
  currentSuggestedMovies: ReadonlyArray<string>;
  onChange: (value: string)=>void;
}

export const StatelessMoviesSearch: React.FC<StatelessMoviesSearchProps> = ({onChange, currentSuggestedMovies, 
  ...props
}) => {
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    onChange(newValue);
  };
  return (
    <>
      <header>Movies search example</header>
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
