import { useContext, useState } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { DataContext } from "../../helpers/DataContext";
import { HomepageBookList } from "../homepageBookList/HomepageBookList";

export const Hero = () => {
  const { books } = useContext(DataContext);

  const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));
  const fictionBooks = books.filter((book) => book.genres.includes("fiction"));
  const romanBooks = books.filter((book) => book.genres.includes("roman"));
  //const bookOfDay = books.find((book) => book.title === "1984");

  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const randomIndex = (dayOfYear + 5) % books.length; //Kan evt fjerne +5 når en vil, bare for testing
  const bookOfDay = books[randomIndex];


  return (
    <div className="bg-surface py-24 px-6 sm:pb-6 sm:pt-2 lg:px-8">
      {bookOfDay && <HomepageBookOfDay heading="Book of the Day:" book={bookOfDay} /> }
      <HomepageBookList heading="Best from fantasy" books={fantasyBooks} />
      <HomepageBookList heading="Best from fiction" books={fictionBooks} />
      <HomepageBookList heading="Best from roman" books={romanBooks} />
      <div className="flex items-center justify-between">
        <Link to="/TopTenPage" className="text-4xl font-serif text-text">
          Top 10
        </Link>
      </div>
      <div className="bg-surface py-24 px-6 sm:py-6 lg:px-8">
        <HomepageBookList heading="Best from fantasy" books={fantasyBooks} />
        <HomepageBookList heading="Best from fiction" books={fictionBooks} />
        <HomepageBookList heading="Best from roman" books={romanBooks} />
      </div>
    </div>
  );
};
