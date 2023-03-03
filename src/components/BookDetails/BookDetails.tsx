import { useNavigate } from "react-router-dom";
import { Book } from "../../helpers/types";
import { Button } from "../button";

interface BookDetailsProps {
  book: Book;
}

export const BookDetails = ({ book }: BookDetailsProps) => {
  const navigate = useNavigate();

  const clickHandler = async () => {
    navigate(`/book/${book.id}/review`);
  };

  return (
    <section className="bg-white p-16">
      <div className="flex flex-col sm:flex-row gap-4">
        <img src={book.imageUrl} className="w-1/3" />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-serif font-bold">{book.title}</h1>
          <h2 className="text-gray-600">{book.author}</h2>
        </div>
      </div>
      <div className="w-1/3 py-3 flex align-bottom">
        <Button label="Give rating" clickHandler={clickHandler} />
      </div>
    </section>
  );
};
