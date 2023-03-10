import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { db } from "./firebase";
import { DataContext } from "./helpers/DataContext";
import { Book } from "./helpers/types";
import { UserLists } from "./helpers/types";
import { router } from "./routes";

export const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [userLists, setUserLists] = useState<UserLists[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const setBookData = (books: Book[]) => setBooks(books);
  const setUserListData = (userLists: UserLists[]) => setUserLists(userLists);
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
    await getDocs(collection(db, "userLists")).then((querySnapshot) => {
      const userListsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as UserLists[];
      setUserLists(userListsData);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPost();
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setDarkmode(localTheme == "dark");
    if (localTheme == "dark") {
      document.body.style.backgroundColor = "#171717";
    }
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
        darkmode: darkmode,
        setDarkmode: setDarkmode,
        genres: genres,
        setGenres: setGenres,
        userLists,
      }}
    >
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
};
