interface BottomRatingProps {
  topText: string;
  rating: string;
}

export const BottomRating = ({ topText, rating }: BottomRatingProps) => (
  <div className="basis-1/2 text-center text-text">
    {topText}
    <div className="basis-1/2 text-center text-lightText">{rating}</div>
  </div>
);
