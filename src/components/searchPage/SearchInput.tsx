import { RxMagnifyingGlass } from "react-icons/rx";

interface SearchInputProps {
  searchInput: string;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchInput = ({
  searchInput,
  error,
  setError,
  setSearchInput,
}: SearchInputProps) => (
  <div>
    <h1>Search for a book, author or genre</h1>
    <form className="flex w-95/100 relative center">
      <input
        type="text"
        placeholder="Find your next read 🐛"
        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={searchInput}
        onChange={(evt) => {
          setError("");
          setSearchInput(evt.currentTarget.value);
        }}
      />
      <RxMagnifyingGlass className="text-indigo-600 text-2xl border-0 absolute right-2 bottom-2 cursor-pointer" />
      {error !== "" && <p className="text-red-600 text-center">{error}</p>}
    </form>
  </div>
);
