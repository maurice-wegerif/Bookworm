import { createContext } from "react";
import { Book } from "./types";

interface State {
  books: Book[];
  setBooks: (books: Book[]) => void;
  setGenres: (genres: string[]) => void;
  genres: string[];
  isLoading: boolean;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
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
  darkmode: false,
  setDarkmode: () => {}
};

export const DataContext = createContext<State>(rootState);
