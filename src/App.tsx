import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { db } from "./firebase";
import { DataContext } from "./helpers/DataContext";
import { Book } from "./helpers/types";
import { router } from "./routes";

export const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
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

  useEffect(() => {
    getAndSetGenres();
  }, [books]);

  const getAndSetGenres = () => {
    const genresArray: string[] = [];
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
      for (
        let genreIndex = 0;
        genreIndex < books[bookIndex].genres.length;
        genreIndex++
      ) {
        if (!genresArray.includes(books[bookIndex].genres[genreIndex])) {
          genresArray.push(books[bookIndex].genres[genreIndex]);
        }
      }
    }
    setGenres(genresArray);
  };

  return (
    <DataContext.Provider
      value={{
        books,
        setBooks: setBookData,
        isLoading,
        isAdmin,
        setIsAdmin: setIsAdminData,
        genres: genres,
        setGenres: setGenres,
      }}
    >
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
};
