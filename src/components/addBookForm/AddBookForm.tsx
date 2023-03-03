import { doc, setDoc } from "firebase/firestore/lite";
import { useState } from "react";
import { db } from "../../firebase";
import { Button } from "../button";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

export const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [genres, setGenre] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const clickHandler = async () => {
    if (validate()) {
      await setDoc(doc(db, "books", uuid()), {
        title: title,
        author: author,
        imageUrl: cover,
        genres: genres.split("/"),
      });
      navigate("/");
    } else {
      setError("Something is not right😡");
    }
  };

  const validate = () => {
    if (title.length < 3) {
      return false;
    }
    if (author.length < 3) {
      return false;
    }
    if (cover.length < 5) {
      return false;
    }
    if (genres.length === 0) {
      return false;
    }

    return true;
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <h1>Add book</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={title}
          onChange={(evt) => {
            setError("");
            setTitle(evt.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Author"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={author}
          onChange={(evt) => {
            setError("");
            setAuthor(evt.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Cover"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={cover}
          onChange={(evt) => {
            setError("");
            setCover(evt.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="Genres separated with /"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={genres}
          onChange={(evt) => {
            setError("");
            setGenre(evt.currentTarget.value);
          }}
        />
        <Button label="Add book" clickHandler={clickHandler} />
        {error !== "" && <p className="text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
};
