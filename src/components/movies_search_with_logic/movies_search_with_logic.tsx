import { useEffect, useState } from "react";
import { searchMovieApi } from "../../api";
import "./movies_search_with_logic.css";

export interface MoviesSearchWithLogicProps {}

export const MoviesSearchWithLogic: React.FC<MoviesSearchWithLogicProps> = ({
  ...props
}) => {
  const [currentMovieToSearch, setMovieToSearch] = useState("");
  const [currentSuggestedMovies, setSuggestedMovies] = useState(
    [] as ReadonlyArray<string>
  );
  useEffect(() => {
    searchMovieApi(currentMovieToSearch).then((movies) => {
      setSuggestedMovies(movies);
    });
  }, [currentMovieToSearch]);
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setMovieToSearch(newValue);
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
