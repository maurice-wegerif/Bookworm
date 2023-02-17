import { createContext } from "react";
import { Book } from "./types";

interface State {
    books: Book[];
    setBooks: (books: Book[]) => void;
}

const rootState: State = {
    books: [],
    setBooks: () => { },
}

export const DataContext = createContext<State>(rootState);