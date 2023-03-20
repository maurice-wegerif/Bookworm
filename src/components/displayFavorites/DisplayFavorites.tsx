import { useContext } from "react";
import { DataContext } from "../../helpers/DataContext";
import { Link } from "react-router-dom";
import { Book } from "../../helpers/types";
import { auth } from "../../firebase";
import { BsTrash } from "react-icons/bs";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

export const DisplayFavorites = () => {
  let bookFavorites: Book[] = [];
  const { userLists } = useContext(DataContext);

  if (auth.currentUser != null) {
    userLists.map((user) => {
      if (user.userID == auth.currentUser?.uid) {
        user.favorites.map((book) => bookFavorites.push(book));
      }
    });
  }

  const clickHandler = (removeBook: Book) => {
    userLists.map(async (user) => {
      if (user.userID === auth.currentUser?.uid) {
        user.favorites = user.favorites.filter((book) => book !== removeBook);
        const db = getFirestore();
        await updateDoc(doc(db, "userLists", user.id), {
          favorites: user.favorites,
        });
        console.log("Successfully removed book from favorites");
        window.location.reload();
      }
    });
  };

  return (
    <div className="bg-surface py-24 px-6 sm:py-6 lg:px-8">
      <div className="place-items-center">
        <h2 className="leading-tight text-4xl text-text mt-0 mb-2 pt-6 font-serif">
          🦋Favorites🦋
        </h2>
      </div>
      <hr className="h-px mt-2 mb-4 bg-gray-300 border-0" />
      <div className="grid grid-cols-3 gap-9">
        {bookFavorites.map((book) => (
          <div className="flex-none w-64 grid-cols-1 p-4 shadow rounded m-auto bg-background hover:bg-secondaryBackground transition-all">
            <Link to={`/book/${book.id}`} key={book.id} className="">
              <h2 className="font-serif font-bold text-text">{book.title}</h2>
              <span className="font-extralight text-lightText text-sm mb-2">
                {book.author}
              </span>
              <img
                src={book.imageUrl}
                alt={book.title}
                className="object-contain mx-auto h-32 w-auto"
              />
            </Link>
            <BsTrash
              className="hover:text-red-500 text-text cursor-pointer"
              onClick={() => clickHandler(book)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
