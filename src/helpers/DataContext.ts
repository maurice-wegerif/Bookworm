import { createContext } from "react";
import { Book } from "./types";

interface State {
  books: Book[];
  setBooks: (books: Book[]) => void;
  isLoading: boolean;
}

const rootState: State = {
  books: [],
  setBooks: () => {},
  isLoading: false,
};

export const DataContext = createContext<State>(rootState);
