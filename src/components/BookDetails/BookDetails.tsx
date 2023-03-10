import { doc, getFirestore, updateDoc } from "firebase/firestore/lite";
import { Context, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { DataContext } from "../../helpers/DataContext";
import { Book, UserLists } from "../../helpers/types";
import { Button } from "../button";
import { BottomRating } from "./BottomRating";
import { FeaturedRating } from "./FeaturedRating";

interface BookDetailsProps {
  book: Book;
}

export const BookDetails = ({ book }: BookDetailsProps) => {
  const navigate = useNavigate();
  const { userLists } = useContext(DataContext);

  const clickHandler1 = async () => {
    navigate(`/book/${book.id}/review`);
  };

  const clickHandler2 = async () => {
    userLists.map(async (user) => {
      if (user.userID === auth.currentUser?.uid) {
        if (validate(user.favorites)) {
          user.favorites.push(book);
          const db = getFirestore();
          await updateDoc(doc(db, "userLists", user.id), {
            favorites: user.favorites,
          });
          console.log("Successfully added book to favorites");
        } else {
          console.log("Allerede en favoritt");
        }
      }
    });
    navigate("/");
  };

  const validate = (favoriteBooks: Book[]) => {
    let safe: boolean = true;
    favoriteBooks.map((favorite) => {
      if (favorite.id === book.id) {
        safe = false;
      }
    });
    return safe;
  };

  return (
    <section className="bg-surface p-16">
      <div className="flex flex-row">
        <div className="basis-5/12">
          <img className="object-fill h-373 w-96" src={book.imageUrl} />
          <div className="py-6">
            <Button label="Give review" clickHandler={clickHandler1} />
            <div className="py-2"></div>
            {auth.currentUser !== null ? (
              <Button label="Add to favorites" clickHandler={clickHandler2} />
            ) : (
              <></>
            )}
          </div>
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
            <div className="basis-full text-base p-4 font-thin text-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sit amet dolor ultricies, viverra elit ut, condimentum
              odio. Mauris pretium congue ante a tempus. In convallis dignissim
              neque, sit amet dapibus lacus volutpat eget. Nulla mattis
              ultricies efficitur. Fusce odio orci, rhoncus blandit viverra id,
              sagittis sed nibh. Sed molestie vehicula tincidunt. Maecenas
              tempus, dui at placerat facilisis, nunc dui fringilla diam,
              sollicitudin dictum mauris quam vitae odio. Cras blandit tincidunt
              nisl vel elementum. Maecenas aliquam eros quis lobortis volutpat.
              Nam ac laoreet lorem, in consectetur lorem.
              <div className="basis-1/2 text-sm italic pt-4">Fantasy</div>
            </div>
          </div>

          <div className="flex flex-row py-2">
            <BottomRating topText="Professional ratings:" rating="5.7/6" />
            <BottomRating topText="Reader ratings:" rating="5.9/6" />
          </div>
        </div>
      </div>
    </section>
  );
};
