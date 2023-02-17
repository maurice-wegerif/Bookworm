import { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { SearchList } from "../searchList/SearchList";


export const SearchPage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [error, setError] = useState("");

    const clickHandler = async () => {
        setSearchInput("");
        if (validate()) {
          //SØK
        } else {
          setError("Something is not right😡");
        }
        }
    
      const validate = () => {
        //VALIDER
        return true;
      };

    return(
      <div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
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
                <RxMagnifyingGlass onClick={clickHandler} className="text-indigo-600 text-2xl border-0 absolute right-2 bottom-2 cursor-pointer"/>
                {error !== "" && <p className="text-red-600 text-center">{error}</p>}
            </form>
          </div>
          <div className="py-10">
            <SearchList/>
          </div>
        </div>
    );
};