import { createContext } from "react";
import { Book, UserLists } from "./types";

interface State {
  books: Book[];
  setBooks: (books: Book[]) => void;
  setGenres: (genres: string[]) => void;
  genres: string[];
  isLoading: boolean;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
  userLists: UserLists[];
  darkmode: boolean;
  setDarkmode: (darkmode: boolean) => void;
}

const rootState: State = {
  books: [],
  setBooks: () => {},
  genres: [],
  setGenres: () => {},
  isLoading: false,
  isAdmin: false,
  setIsAdmin: () => {},
  userLists: [],
  darkmode: false,
  setDarkmode: () => {}
};

export const DataContext = createContext<State>(rootState);
