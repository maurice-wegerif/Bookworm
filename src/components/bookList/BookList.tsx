import { useEffect, useState } from "react";
import { Book } from "../../helpers/types";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "books")).then((querySnapshot) => {
      const bookData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Book[];
      setBooks(bookData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="flex flex-wrap max-w-3xl m-auto gap-8">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-pink-100 w-48 p-4 shadow rounded transition-all hover:scale-105 cursor-pointer m-auto"
        >
          <h2 className="font-bold">{book.title}</h2>
          <span className="text-gray-500 text-sm">{book.author}</span>
          <img src={book.imageUrl} alt={book.title} />
        </div>
      ))}
    </div>
  );
};
