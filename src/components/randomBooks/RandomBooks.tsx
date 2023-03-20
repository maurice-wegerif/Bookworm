import { useContext } from "react";
import { DataContext } from "../../helpers/DataContext";
import { Book } from "../../helpers/types";
import { BookListRandom } from "../randomListView";

export const RandomBooks = () => {
  const { books } = useContext(DataContext);

  const randomBooks: Book[] = [];

  for (let i = 0; i < 10; i++) {
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
