import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../helpers/DataContext";
import { Link } from "react-router-dom";
import { Book } from "../../helpers/types";
import { BottomRating } from "../BookDetails/BottomRating";
import { FeaturedRating } from "../BookDetails/FeaturedRating";

interface HomepageBookOfDayProps {
  book: Book;
  heading: String;
}

export const HomepageBookOfDay = ({ book, heading }: HomepageBookOfDayProps) => {
  const genresString: string = book.genres.join(" - ");
    return (
      <Link
            to={`/book/${book.id}`}
            key={book.id}>
      <div className="mb-2 p-3 pb-3 bg-secondaryBackground rounded-md">
        <h2 className="leading-tight pl-10 text-3xl text-text font-medium mt-0 font-serif">
          {heading} {book.title}
        </h2>
        <hr className="h-px mb-4 bg-gray-300 border-0" />
        <div className="flex flex-row w-10/12 m-auto">
          <div className="basis-3/12">
            <img className="object-fill h-373 w-96" src={book.imageUrl} />
            
          </div>
          <div className="basis-11/12 px-10 pb-4">
            
            <div className="basis-10/12 text-2xl text-left font-thin text-lightText">
              Author: {book.author}
            </div>

            <div className="flex flex-row py-2">
              <div className="font-bold"></div>
              <div className="basis-full text-base font-thin text-text">
                {book.description}
                
                <div className="basis-1/2 text-sm italic font-bold pt-4">
                 {genresString}</div>
                
              </div>
            </div>

            <div className="flex flex-row">
              <BottomRating topText="Professional ratings:" rating="5.7" />
              
              <BottomRating topText="Reader ratings:" rating={book.averageRating + ""} />
            </div>
        </div>
        </div>
      </div></Link>
      
    );
  };
  