import { useState } from "react";
import { SearchList } from "./SearchList";
import { SearchInput } from "./SearchInput";

export const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <SearchInput searchInput={searchInput} error={error} setError={setError} setSearchInput={setSearchInput} />
      <SearchList searchInput={searchInput} />
    </div>
  );
};