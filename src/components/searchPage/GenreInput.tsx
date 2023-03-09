import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../helpers/DataContext";

interface GenreInputProps {
  genreInput: string;
  setGenreInput: React.Dispatch<React.SetStateAction<string>>;
}

export const GenreInput = ({ genreInput, setGenreInput }: GenreInputProps) => {
  const { genres } = useContext(DataContext);
  return (
    <div className="flex flex-wrap max-w-3xl m-auto gap-4">
      <select
        className="h-9 rounded border-gray-300"
        onChange={(evt) => {
          setGenreInput(evt.currentTarget.value);
        }}
        value={genreInput}
      >
        <option value="no genre">--Select a genre--</option>
        {genres.map((genre) => (
          <option value={this} key={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};
