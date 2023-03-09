import { useContext } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../helpers/DataContext";
import { Button } from "../button";

export const ReviewForm = () => {
  const { books } = useContext(DataContext);
  const params = useParams<Params<"id">>();
  const book = books.find((book) => book.id === params.id!);
  const navigate = useNavigate();

  const clickHandler = async () => {
    navigate("/");
  };

  return (
    <div className="bg-surface p-16">
      <h1 className="text-3xl pb-8 font-bold text-text">
        Give this book a review
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <img src={book?.imageUrl} className="w-24 py-1.5" />
        <div>
          <p className="font-bold text-xl font-serif text-text">
            {book?.title}
          </p>
          <p className="text-lightText">{book?.author}</p>
        </div>
      </div>
      <div className="py-7 text-text">
        <p>Select number of worms</p>
        <p>🐛 🐛 🐛 🐛 🐛 🐛</p>
      </div>
      <textarea
        placeholder="Your thoughts on the book"
        className="block max-w-xs w-full h-24 appearance-none rounded-md bg-background border border-gray-300 px-3 py-3 placeholder-lightText shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
      <div className="py-4 max-w-xs">
        <Button label="Submit" clickHandler={clickHandler} />
      </div>
    </div>
  );
};
