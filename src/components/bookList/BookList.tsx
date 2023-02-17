import { useContext, useEffect, useState } from "react";
import { Book } from "../../helpers/types";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase";
import { DataContext } from "../../helpers/DataContext";

export const BookList = () => {
  const { books } = useContext(DataContext);

  return (
    <div className="flex flex-wrap max-w-3xl m-auto gap-8">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white w-48 p-4 shadow rounded transition-all hover:scale-105 cursor-pointer m-auto"
        >
          <h2 className="font-bold">{book.title}</h2>
          <span className="text-gray-500 text-sm">{book.author}</span>
          <img src={book.imageUrl} alt={book.title} />
        </div>
      ))}
    </div>
  );
};
