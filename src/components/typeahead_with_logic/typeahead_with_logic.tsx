import { useEffect, useState } from "react";
import { searchMovieApi } from "../../api";
import "./typeahead_with_logic.css";

export interface TypeaheadWithLogicProps {}

export const TypeaheadWithLogic: React.FC<TypeaheadWithLogicProps> = ({
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
