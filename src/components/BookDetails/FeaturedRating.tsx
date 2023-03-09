interface FeaturedRatingProps {
  quote: string;
  rating: string;
  givenBy: string;
}

export const FeaturedRating = ({
  quote,
  rating,
  givenBy,
}: FeaturedRatingProps) => (
  <div className="basis-1/2 text-xl text-center font-bold text-text">
    {quote}
    <div className="basis-1/2 text-sm text-center font-thin text-lightText">
      {rating}
    </div>
    <div className="basis-1/2 text-base text-center font-normal text-lightText">
      {givenBy}
    </div>
  </div>
);
