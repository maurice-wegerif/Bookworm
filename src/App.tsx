import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { db } from "./firebase";
import { DataContext } from "./helpers/DataContext";
import { UserLists, Book, Add } from "./helpers/types";
import { router } from "./routes";

export const App = () => {
  const [adds, setAdds] = useState<Add[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [userLists, setUserLists] = useState<UserLists[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const setBookData = (books: Book[]) => setBooks(books);
  const setAddData = (adds: Add[]) => setAdds(adds);
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
    await getDocs(collection(db, "adds")).then((querySnapshot) => {
      const addsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Add[];
      setAddData(addsData);
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
    getAndSetAverageRating();
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

  const getAndSetAverageRating = () => {
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
      books[bookIndex].averageRating = 0;
      if (books[bookIndex].reviews.length === 0) {
        setAverageRating(0);
      } else {
        let ratingSum: number = 0;
        for (
          let reviewIndex = 0;
          reviewIndex < books[bookIndex].reviews.length;
          reviewIndex++
        ) {
          ratingSum += books[bookIndex].reviews[reviewIndex].rating;
        }
        books[bookIndex].averageRating =
          ratingSum / books[bookIndex].reviews.length;
      }
    }
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
        adds,
        setAdds: setAddData,
      }}
    >
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
};
