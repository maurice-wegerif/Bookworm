import { Book } from "../../helpers/types";

interface ReviewListProps {
  book: Book;
}

const printWorms = (amount: number) => {
  return "🐛".repeat(amount);
};

export const ReviewList = ({ book }: ReviewListProps) => {
  return (
    <div className="flex flex-wrap max-w-3xl m-auto gap-4 py-2">
      {book.reviews.map((review) => (
        <div className="bg-surface w-full p-4 shadow rounded transition-all cursor-pointer m-auto flex flex-row hover:bg-secondaryBackground">
          <div className="basis-1/2">
            <h2 className="font-bold text-text">{review.userName}</h2>
            <span className="text-lightText text-sm">{review.comment}</span>
            <p className="text-lightText text-xl">
              Rating: {printWorms(review.rating)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
