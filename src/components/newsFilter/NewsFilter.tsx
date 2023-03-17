import { useContext } from "react";
import { DataContext } from "../../helpers/DataContext";
import { Book, Review } from "../../helpers/types";
import { BookListTen } from "../bookListTen/BookListTen";
import { BookListNews } from "../newsListview";

export const NewsFilter = () => {
  const { books } = useContext(DataContext);

  const filteredBooks = books
    .filter((book) => book.year !== undefined)
  
    .sort((a, b) => {
      if (a.year && b.year) {
        return b.year - a.year; 
      }
      return 0;
    })
  
    .slice(0, 10); 
  
  console.log(filteredBooks); 
  
  return (
    <div className="bg-surface py-24 px-6 sm:py-6 lg:px-8">
      <BookListNews heading="New Books" books={filteredBooks} />
    </div>
  );
};
