import { Book } from "../../helpers/types";

interface BookDetailsProps {
  book: Book;
}

export const BookDetails = ({ book }: BookDetailsProps) => (
  <section className="bg-white p-16">
    <div className="flex flex-col sm:flex-row gap-4">
      <img src={book.imageUrl} />
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{book.title}</h1>
        <h2 className="text-gray-600">{book.author}</h2>
      </div>
    </div>
  </section>
);
