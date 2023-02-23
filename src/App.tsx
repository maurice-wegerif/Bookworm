import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { db } from "./firebase";
import { DataContext } from "./helpers/DataContext";
import { Book } from "./helpers/types";
import { router } from "./routes";

export const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const setBookData = (books: Book[]) => setBooks(books);
  const setIsAdminData = (admin: boolean) => setIsAdmin(admin);

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
    <DataContext.Provider
      value={{
        books,
        setBooks: setBookData,
        isLoading,
        isAdmin,
        setIsAdmin: setIsAdminData,
      }}
    >
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
};
