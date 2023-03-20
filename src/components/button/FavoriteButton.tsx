import { BsHeart, BsHeartFill } from "react-icons/bs";

interface FavoriteButtonProps {
  isFavorite: boolean;
  handleClick: () => Promise<void>;
}

export const FavoriteButton = ({
  isFavorite,
  handleClick,
}: FavoriteButtonProps) => (
  <button
    onClick={handleClick}
    type="button"
    className="inline-flex items-center gap-x-2 rounded-md bg-cta py-2.5 px-3.5 text-sm font-semibold text-ctaText shadow-sm hover:bg-ctaHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    {isFavorite ? <BsHeartFill size={18} /> : <BsHeart size={18} />}
    Favorite
  </button>
);
