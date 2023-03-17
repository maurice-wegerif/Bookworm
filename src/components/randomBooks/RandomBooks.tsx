import { useContext } from "react";
import { DataContext } from "../../helpers/DataContext";
import { Book } from "../../helpers/types";
import { BookListTen } from "../bookListTen/BookListTen";
import { BookListRandom } from "../randomListView";

export const RandomBooks = () => {
  const { books } = useContext(DataContext);

  const randomBooks: Book[] = [];

  // Generate 10 random indices to select random books from the array
  while (randomBooks.length < 10) {
    const randomIndex = Math.floor(Math.random() * books.length);
    const randomBook = books[randomIndex];
    if (!randomBooks.includes(randomBook)) {
      randomBooks.push(randomBook);
    }
  }
  

  return (
    <div className="bg-surface py-24 px-6 sm:py-6 lg:px-8">
      <BookListRandom heading="Explore" books={randomBooks} />
    </div>
  );
};
