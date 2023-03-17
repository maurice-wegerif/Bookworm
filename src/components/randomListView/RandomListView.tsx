import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../helpers/DataContext";
import { Link } from "react-router-dom";
import { Book } from "../../helpers/types";

interface BookListRandomProps {
  books: Book[];
  heading: String;
}

export const BookListRandom = ({ books, heading }: BookListRandomProps) => {
  return (
    <div className="mb-8">
      <h2 className="leading-tight text-3xl text-text font-medium mt-0 mb-2 pt-6 font-serif">
        {heading}
      </h2>
      <hr className="h-px mt-2 mb-4 bg-gray-300 border-0" />
      <div className="grid grid-flow-row-dense grid-cols-3 gap-x-8 gap-y-8 pb-5 m-auto">
        {books.map((book, index) => (
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            className={`flex-none grid grid-cols-2 p-4 shadow rounded w-full m-auto bg-background hover:bg-secondaryBackground transition-all ${
              index === 0 ? "col-span-3 w-full overflow-hidden" : ""
            }`}
          >
            <div className={`flex flex-col justify-start ${index === 0 ? "pr-4" : ""}`}>
              <h2 className="font-serif font-bold text-text mb-2">{`${book.title}`}</h2>
              <span className="font-extralight text-lightText text-sm mb-2">{book.author}</span>
              {index === 0 && (
                <p className="font-light text-lightText text-sm">{book.description}</p>
              )}
            </div>
            <div
              className={`mx-auto ${
                index === 0 ? "h-full w-full object-cover" : "h-32 w-auto object-contain"
              }`}
              style={{
                maxWidth: index === 0 ? "50%" : "none",
                maxHeight: index === 0 ? "none" : "128px",
              }}
            >
              <img
                src={book.imageUrl}
                alt={book.title}
                className={`${
                  index === 0 ? "h-full w-full object-cover" : "h-32 w-auto object-contain"
                }`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
