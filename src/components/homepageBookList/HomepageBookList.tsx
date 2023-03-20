import { Book } from "../../helpers/types";
import { BookCard } from "../bookCard";

interface HomepageBookListProps {
  books: Book[];
  heading: String;
}

export const HomepageBookList = ({ books, heading }: HomepageBookListProps) => (
  <div className="mb-8">
    <h2 className="leading-tight text-3xl text-text font-medium mt-0 mb-2 pt-6 font-serif">
      {heading}
    </h2>
    <hr className="h-px mt-2 mb-4 bg-gray-300 border-0" />
    <div className="mt-4 flex gap-4 overflow-x-auto">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  </div>
);
