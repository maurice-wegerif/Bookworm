import { createContext } from "react";
import { Book } from "./types";

interface State {
  books: Book[];
  setBooks: (books: Book[]) => void;
  isLoading: boolean;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
}

const rootState: State = {
  books: [],
  setBooks: () => {},
  isLoading: false,
  isAdmin: false,
  setIsAdmin: () => {},
};

export const DataContext = createContext<State>(rootState);
