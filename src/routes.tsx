import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import { DisplayFavorites } from "./components/displayFavorites";
import { Information } from "./components/information/Information";
import { NewsFilter } from "./components/newsFilter";
import { RandomBooks } from "./components/randomBooks";
import { ReviewForm } from "./components/reviewForm";
import { SearchPage } from "./components/searchPage";
import { PageLayout } from "./layouts/pageLayout";
import { AddAdvertisement, AddBook, Home, Login, Register } from "./pages";
import { BookPage } from "./pages/BookPage";
import { TopTen } from "./pages/TopTen";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/displayBooks" element={<DisplayFavorites />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="/book/:id/review" element={<ReviewForm />} />
      <Route path="/add-advertisement" element={<AddAdvertisement />} />
      <Route path="/new" element={<NewsFilter />} />
      <Route path="/explore" element={<RandomBooks />} />
      <Route path="/top" element={<TopTen />} />
      <Route path="/Information" element={<Information />} />
    </Route>
  )
);
