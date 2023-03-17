import { createContext } from "react";
import { Add, Book, UserLists } from "./types";

interface State {
  books: Book[];
  setBooks: (books: Book[]) => void;
  adds: Add[];
  setAdds: (adds: Add[]) => void;
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
  adds: [],
  setAdds: () => {},
  genres: [],
  setGenres: () => {},
  isLoading: false,
  isAdmin: false,
  setIsAdmin: () => {},
  userLists: [],
  darkmode: false,
  setDarkmode: () => {},
};

export const DataContext = createContext<State>(rootState);
