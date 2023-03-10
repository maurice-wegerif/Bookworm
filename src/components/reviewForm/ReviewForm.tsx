import { useContext, useState } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../helpers/DataContext";
import { Button } from "../button";
import { Review } from "../../helpers/types";
import { auth } from "../../firebase";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { Slider } from "@mui/material";

export const ReviewForm = () => {
  const { books } = useContext(DataContext);
  const params = useParams<Params<"id">>();
  const book = books.find((book) => book.id === params.id!);
  const navigate = useNavigate();
  const [commentInput, setCommentInput] = useState("");
  const [ratingValue, setRatingValue] = useState(1);
  const [error, setError] = useState("");

  const changeRating = (event: Event, value: number | number[]) => {
    const rating = Array.isArray(value) ? value[0] : value;
    setRatingValue(rating);
  };

  const clickHandler = async () => {
    let doubleReview: boolean = false;
    if (auth.currentUser?.uid && auth.currentUser?.email && book) {
      //Check for already made review from user
      book.reviews?.forEach(function (review) {
        if (review.userID === auth.currentUser?.uid) {
          setError("Can not review book twice!😡");
          doubleReview = true;
        }
      });

      if (!doubleReview) {
        //Make new review
        const review: Review = {
          userID: auth.currentUser.uid,
          rating: ratingValue,
          comment: commentInput,
          userName: auth.currentUser.email,
        };

        //Add review to books review array and update firebase
        book.reviews?.push(review);
        const db = getFirestore();
        await updateDoc(doc(db, "books", book.id), {
          reviews: book.reviews,
        });

        let ratingSum: number = 0;
        for (
          let reviewIndex = 0;
          reviewIndex < book.reviews.length;
          reviewIndex++
        ) {
          ratingSum += book.reviews[reviewIndex].rating;
        }
        book.averageRating = ratingSum / book.reviews.length;

        navigate("/");
      }
    }
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
      <div className="w-[320px]">
        <p>Give this book a rating:</p>
        <Slider
          value={ratingValue}
          aria-label="Rating"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={5}
          className="grayscale"
          onChange={changeRating}
        />
      </div>
      <textarea
        placeholder="Your thoghts on the book"
        className="block max-w-xs w-full h-24 appearance-none rounded-md border border-gray-300 px-3 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        onChange={(evt) => {
          setCommentInput(evt.currentTarget.value);
        }}
      />
      <div className="py-4 max-w-xs">
        <Button label="Submit" clickHandler={clickHandler} />
        {error !== "" && <p className="text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
};
