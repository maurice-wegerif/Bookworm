import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import { PageLayout } from "./layouts/pageLayout";
import { AddBook, Home, Login, Register } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-book" element={<AddBook />} />
    </Route>
  )
);
