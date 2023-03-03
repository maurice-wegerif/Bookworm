import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../helpers/DataContext";
import { GenreInput } from "./GenreInput";

interface SearchListProps {
  searchInput: string;
  genreInput: string;
}

export const SearchList = ({ searchInput, genreInput }: SearchListProps) => {
  const { books } = useContext(DataContext);

  const filteredBooks = books.filter(
    (book) =>
      (book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        book.author.toLowerCase().includes(searchInput.toLowerCase())) &&
      (book.genres.includes(genreInput) || genreInput === "no genre")
  );

  return (
    <div className="flex flex-wrap max-w-3xl m-auto gap-4 py-10">
      {filteredBooks.map((book) => (
        <Link
          to={`/book/${book.id}`}
          key={book.id}
          className="bg-white w-full p-4 shadow rounded transition-all cursor-pointer m-auto flex flex-row hover:bg-gray-50"
        >
          <div className="basis-1/4">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="object-contain mx-auto h-32 w-auto"
            />
          </div>
          <div className="basis-1/2">
            <h2 className="font-bold">{book.title}</h2>
            <span className="text-gray-500 text-sm">{book.author}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
