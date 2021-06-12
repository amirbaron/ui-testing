import { useEffect, useState } from "react";
import { StatelessTypeahead } from "./stateless_typeahead";

export interface StatefullTypeaheadProps {
  searchMovieApi: (value:string, caseSensetive:boolean)=> Promise<ReadonlyArray<string>>;
}

export const StatefullTypeahead: React.FC<StatefullTypeaheadProps> = ({searchMovieApi, 
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
    <StatelessTypeahead onChange={onInputChange} currentSuggestedMovies={currentSuggestedMovies}>
    </StatelessTypeahead>
  );
};
