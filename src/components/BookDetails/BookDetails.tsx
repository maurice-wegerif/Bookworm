import { doc, getFirestore, updateDoc } from "firebase/firestore/lite";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { DataContext } from "../../helpers/DataContext";
import { Book } from "../../helpers/types";
import { FavoriteButton, ReviewButton } from "../button";
import { BottomRating } from "./BottomRating";
import { FeaturedRating } from "./FeaturedRating";
import { ReviewList } from "./ReviewList";

interface BookDetailsProps {
  book: Book;
}

export const BookDetails = ({ book }: BookDetailsProps) => {
  const { userLists } = useContext(DataContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const userList = userLists.find(
      (userList) => userList.userID === auth.currentUser?.uid
    );

    if (userList) {
      if (userList.favorites.map((favorite) => favorite.id).includes(book.id)) {
        setIsFavorite(true);
      }
    }
  }, []);

  const handleFavoriteClick = async () => {
    userLists.map(async (user) => {
      if (user.userID === auth.currentUser?.uid) {
        if (!user.favorites.map((favorite) => favorite.id).includes(book.id)) {
          setIsFavorite(true);
          user.favorites.push(book);
          const db = getFirestore();
          await updateDoc(doc(db, "userLists", user.id), {
            favorites: user.favorites,
          });
          console.log("Successfully added book to favorites");
        } else {
          setIsFavorite(false);
          user.favorites = user.favorites.filter(
            (favorite) => favorite.id !== book.id
          );
          const db = getFirestore();
          await updateDoc(doc(db, "userLists", user.id), {
            favorites: user.favorites,
          });
          console.log("Successfully removed book from favorites");
        }
      }
    });
  };

  return (
    <section className="bg-surface p-16">
      <div className="flex flex-row">
        <div className="basis-5/12">
          <img className="object-fill max-w-xs" src={book.imageUrl} />
          <div className="py-6">
            {auth.currentUser !== null && (
              <div className="flex gap-3">
                <FavoriteButton
                  isFavorite={isFavorite}
                  handleClick={handleFavoriteClick}
                />
                <Link to={`/book/${book.id}/review`}>
                  <ReviewButton />
                </Link>
              </div>
            )}
          </div>
          <ReviewList book={book} />
        </div>
        <div className="basis-7/12 px-10 py-4">
          <div className="basis-10/12 text-6xl text-center text-text">
            {book.title}
          </div>
          <div className="basis-10/12 text-2xl text-center font-thin text-lightText">
            {book.author}
          </div>

          <div className="flex flex-row py-2 pt-6">
            <FeaturedRating
              quote='"Fantastic"'
              rating="6/6"
              givenBy="The New York Times"
            />
            <FeaturedRating
              quote="“A masterpiece”"
              rating="6/6"
              givenBy="The Washington Post"
            />
          </div>

          <div className="flex flex-row py-2">
            <div className="basis-full text-base text-lightText p-4 font-thin">
              {book.description}
              <div className="basis-1/2 text-sm italic pt-4">
                {book.genres.join(", ")}
              </div>
            </div>
          </div>

          <div className="flex flex-row py-2">
            <BottomRating topText="Professional ratings:" rating="5.7/6" />
            <BottomRating
              topText="Reader ratings:"
              rating={
                book.averageRating
                  ? book.averageRating.toFixed(1).toString()
                  : "0.0"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
