import { useContext } from "react";
import { DataContext } from "../../helpers/DataContext";
import { BookListTen } from "../bookListTen/BookListTen";

export const TopTen = () => {
  const { books } = useContext(DataContext);

  const topTenbooks = books.filter((book) => book.genres.includes("fiction"));


  return (
    <div className="bg-surface py-24 px-6 sm:py-6 lg:px-8">
      <BookListTen heading="Top 10" books={topTenbooks} />
    </div>
  );
};
