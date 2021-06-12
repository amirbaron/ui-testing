import { useEffect, useState } from "react";
import { StatelessMoviesSearch } from "./stateless_movies_search";

export interface StatefullMoviesSearchProps {
  searchMovieApi: (value:string, caseSensetive:boolean)=> Promise<ReadonlyArray<string>>;
}

export const StatefullMoviesSearch: React.FC<StatefullMoviesSearchProps> = ({searchMovieApi, 
  ...props
}) => {
  const [currentMovieToSearch, setMovieToSearch] = useState("");
  const [currentSuggestedMovies, setSuggestedMovies] = useState(
    [] as ReadonlyArray<string>
  );
  useEffect(() => {
    searchMovieApi(currentMovieToSearch, true).then((movies) => {
      setSuggestedMovies(movies);
    });
  }, [currentMovieToSearch]);
  const onInputChange = (value: string) => {
    setMovieToSearch(value);
  };
  return (
    <StatelessMoviesSearch onChange={onInputChange} currentSuggestedMovies={currentSuggestedMovies}>
    </StatelessMoviesSearch>
  );
};
