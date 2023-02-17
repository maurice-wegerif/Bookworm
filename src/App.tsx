import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { db } from "./firebase";
import { DataContext } from "./helpers/DataContext";
import { Book } from "./helpers/types";
import { router } from "./routes";

export const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const setBookData = (books: Book[]) => setBooks(books);

  const fetchPost = async () => {
    setIsLoading(true);
    await getDocs(collection(db, "books")).then((querySnapshot) => {
      const bookData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Book[];
      setBooks(bookData);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <DataContext.Provider value={{ books, setBooks: setBookData, isLoading }}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
};
