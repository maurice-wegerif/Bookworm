import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../helpers/DataContext";
import { Link } from "react-router-dom";
import { Book } from "../../helpers/types";

interface HomepageBookListProps {
  books: Book[];
  heading: String;
}

export const HomepageBookList = ({ books, heading }: HomepageBookListProps) => {
  return (
    <div className="mb-8">
      <h2 className="leading-tight text-3xl text-text font-medium mt-0 mb-2 pt-6 font-serif">
        {heading}
      </h2>
      <hr className="h-px mt-2 mb-4 bg-gray-300 border-0" />
      <div className="flex overflow-x-scroll pb-5 m-auto gap-8 hide-scroll-bar">
        {books.map((book) => (
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            className="flex-none w-64 grid grid-cols-1 p-4 shadow rounded m-auto bg-background hover:bg-secondaryBackground transition-all"
          >
            <h2 className="font-serif font-bold text-text">{book.title}</h2>
            <span className="font-extralight text-lightText text-sm mb-2">
              {book.author}
            </span>
            <img
              src={book.imageUrl}
              alt={book.title}
              className="object-contain mx-auto h-32 w-auto"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
