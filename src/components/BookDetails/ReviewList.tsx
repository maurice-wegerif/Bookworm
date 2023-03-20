import { Book, Review } from "../../helpers/types";
import { BsTrash } from "react-icons/bs";
import { DataContext } from "../../helpers/DataContext";
import { useContext } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { auth } from "../../firebase";

interface ReviewListProps {
  book: Book;
}

const printWorms = (amount: number) => {
  return "🐛".repeat(amount);
};

const deleteReview = async (review: Review, book: Book) => {
  if (book.reviews.includes(review)) {
    book.reviews = book.reviews.filter((tempReview) => tempReview !== review);
    const db = getFirestore();
    await updateDoc(doc(db, "books", book.id), {
      reviews: book.reviews,
    });
    window.location.reload();
  }
};

export const ReviewList = ({ book }: ReviewListProps) => {
  const { isAdmin } = useContext(DataContext);
  return (
    <div className="flex flex-wrap max-w-3xl m-auto gap-4 py-2">
      {book.reviews.map((review) => (
        <div
          key={review.userID}
          className="bg-background w-full p-4 shadow rounded transition-all cursor-pointer m-auto relative hover:bg-secondaryBackground"
        >
          <div className="basis-1/2">
            <div className="flex w-full">
              <h2 className="font-bold text-text">{review.userName}</h2>
            </div>
            <span className="text-lightText text-sm">{review.comment}</span>
            <p className="text-lightText text-xl">
              Rating: {printWorms(review.rating)}
            </p>
          </div>
          {(isAdmin || auth.currentUser?.uid === review.userID) && (
            <BsTrash
              className="float-right text-text hover:text-red-500"
              onClick={() => deleteReview(review, book)}
            />
          )}
        </div>
      ))}
    </div>
  );
};
