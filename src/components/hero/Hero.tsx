import { useContext } from "react";
import { DataContext } from "../../helpers/DataContext";
import { HomepageBookList } from "../homepageBookList/HomepageBookList";

export const Hero = () => {
  const { books } = useContext(DataContext);

  const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));
  const fictionBooks = books.filter((book) => book.genres.includes("fiction"));
  const romanBooks = books.filter((book) => book.genres.includes("roman"));

  return (
    <div className="bg-surface py-24 px-6 sm:py-6 lg:px-8">
      <HomepageBookList heading="Best from fantasy" books={fantasyBooks} />
      <HomepageBookList heading="Best from fiction" books={fictionBooks} />
      <HomepageBookList heading="Best from roman" books={romanBooks} />
    </div>
  );
};
