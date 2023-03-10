import { useContext, useState } from "react";
import { auth } from "../../firebase";
import { DataContext } from "../../helpers/DataContext";
import { Book, UserLists } from "../../helpers/types";
import { HomepageBookList } from "../homepageBookList/HomepageBookList";

export const Hero = () => {
  const { books } = useContext(DataContext);
  const { userLists } = useContext(DataContext);

  const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));
  const fictionBooks = books.filter((book) => book.genres.includes("fiction"));
  const romanBooks = books.filter((book) => book.genres.includes("roman"));
  const bookFavorites: Book[] = [];

  if (auth.currentUser != null) {
    userLists.map((user) => {
      if (user.userID == auth.currentUser?.uid) {
        user.favorites.map((book) => bookFavorites.push(book));
      }
    });
  }

  return (
    <div className="bg-surface py-24 px-6 sm:py-6 lg:px-8">
      {bookFavorites.length > 0 ? (
        <HomepageBookList heading="Favorites" books={bookFavorites} />
      ) : (
        <></>
      )}
      <HomepageBookList heading="Best from fantasy" books={fantasyBooks} />
      <HomepageBookList heading="Best from fiction" books={fictionBooks} />
      <HomepageBookList heading="Best from roman" books={romanBooks} />
    </div>
  );
};
