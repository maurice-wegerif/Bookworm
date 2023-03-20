import { Link } from "react-router-dom";
import { Book } from "../../helpers/types";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => (
  <article className="relative isolate flex-shrink-0 justify-end overflow-hidden rounded-2xl bg-gray-900 px-4 pb-8 pt-80 sm:pt-24 lg:pt-32 lg:w-48">
    <img
      src={book.imageUrl}
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

    <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
      <div className="-ml-4 flex items-center gap-x-4">
        <svg
          viewBox="0 0 2 2"
          className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
        >
          <circle cx={1} cy={1} r={1} />
        </svg>
        <div className="flex gap-x-2.5">{book.author}</div>
      </div>
    </div>
    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
      <Link to={`/book/${book.id}`}>
        <span className="absolute inset-0" />
        {book.title}
      </Link>
    </h3>
  </article>
);
