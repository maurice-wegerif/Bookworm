import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import { SearchPage } from "./components/searchPage";
import { PageLayout } from "./layouts/pageLayout";
import { AddBook, Home, Login, Register } from "./pages";
import { BookPage } from "./pages/BookPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/book/:id" element={<BookPage />} />
    </Route>
  )
);
