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
}

const rootState: State = {
  books: [],
  setBooks: () => {},
  genres: [],
  setGenres: () => {},
  isLoading: false,
  isAdmin: false,
  setIsAdmin: () => {},
};

export const DataContext = createContext<State>(rootState);
