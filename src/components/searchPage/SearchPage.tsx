import { useState } from "react";
import { SearchList } from "./SearchList";
import { SearchInput } from "./SearchInput";
import { GenreInput } from "./GenreInput";

export const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");
  const [genreInput, setGenreInput] = useState("no genre");

  return (
    <div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex ">
        <SearchInput
          searchInput={searchInput}
          error={error}
          setError={setError}
          setSearchInput={setSearchInput}
        />
        <GenreInput genreInput={genreInput} setGenreInput={setGenreInput} />
      </div>
      <SearchList searchInput={searchInput} genreInput={genreInput} />
    </div>
  );
};
