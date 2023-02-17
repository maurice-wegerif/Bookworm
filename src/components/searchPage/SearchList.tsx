import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../helpers/DataContext";

interface SearchListProps {
  searchInput: string;
}

export const SearchList = ({ searchInput }: SearchListProps) => {
  const { books } = useContext(DataContext);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    book.author.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="flex flex-wrap max-w-3xl m-auto gap-4 py-10">
      {filteredBooks.map(book => (
        <div
          key={book.id}
          className="bg-white w-full p-4 shadow rounded transition-all hover:scale-105 cursor-pointer m-auto flex flex-row">
          <div className="basis-1/4">
            <img src={book.imageUrl} alt={book.title} className="object-contain mx-auto h-32 w-auto" />
          </div>
          <div className="basis-1/2">
            <h2 className="font-bold">{book.title}</h2>
            <span className="text-gray-500 text-sm">{book.author}</span>
          </div>
          <div className="basis-1/4 text-right px-2">
            {/* MÅ SKRIVE KODE FOR DENNE LOGIKKEN */}
            <p className="text-4xl">🦋</p>
            <p>85%</p>
          </div>
        </div>
      ))}
    </div>
  );
};
