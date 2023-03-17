import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../helpers/DataContext";
import { Add } from "../../helpers/types";

export const Advertisement = () => {
  const { adds } = useContext(DataContext);

  const shuffleArray = (array: Add[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  shuffleArray(adds);
  const slicedArray = adds.slice(0, 3);

  return (
    <div className="flex flex-wrap max-w-3xl m-auto gap-8">
      {slicedArray.map((add) => (
        <Link to={add.link} key={add.id}>
          <div className="bg-surface w-48 p-4 shadow rounded transition-all hover:scale-105 cursor-pointer m-auto">
            <h2 className="font-serif font-bold text-text">{add.name}</h2>
            <img src={add.imageUrl} alt="error" />
          </div>
        </Link>
      ))}
    </div>
  );
};
