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
    return (
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
                <br /><br />
                {/* <span className="font-bold">Genres:</span>
                {book.genres.map(genre => 
                  <div key={genre} className="flex flex-row text-sm font-bold pt-4">{genre}</div>
                )} */}
              </div>
            </div>

            <div className="flex flex-row">
              <BottomRating topText="Professional ratings:" rating="5.7/6" />
              <BottomRating topText="Reader ratings:" rating="5.9/6" />
            </div>
        </div>
        </div>
      </div>
      
    );
  };
  