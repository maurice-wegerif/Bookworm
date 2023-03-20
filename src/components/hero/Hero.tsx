import { useContext } from "react";
import { DataContext } from "../../helpers/DataContext";
import { HomepageBookList } from "../homepageBookList/HomepageBookList";
import { HomepageBookOfDay } from "../HomepageBookOfDay";

export const Hero = () => {
  const { books } = useContext(DataContext);

  const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));
  const fictionBooks = books.filter((book) => book.genres.includes("fiction"));
  const romanBooks = books.filter((book) => book.genres.includes("roman"));

  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const randomIndex = (dayOfYear + 5) % books.length; //Kan evt fjerne +5 når en vil, bare for testing
  const bookOfDay = books[randomIndex];

  return (
    <div className="bg-surface py-24 px-6 sm:pb-6 sm:pt-2 lg:px-8">
      {bookOfDay && (
        <HomepageBookOfDay heading="Book of the day:" book={bookOfDay} />
      )}
      <HomepageBookList heading="Best from fantasy" books={fantasyBooks} />
      <HomepageBookList heading="Best from fiction" books={fictionBooks} />
      <HomepageBookList heading="Best from roman" books={romanBooks} />
    </div>
  );
};
