import { BsFillPencilFill, BsHeart, BsHeartFill, BsPen } from "react-icons/bs";

export const ReviewButton = () => (
  <button
    type="button"
    className="inline-flex items-center gap-x-2 rounded-md bg-cta py-2.5 px-3.5 text-sm font-semibold text-ctaText shadow-sm hover:bg-ctaHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    <BsFillPencilFill size={18} />
    Give review
  </button>
);
