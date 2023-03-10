import { doc, setDoc } from "firebase/firestore/lite";
import { useState } from "react";
import { db } from "../../firebase";
import { Button } from "../button";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { InputField } from "./InputField";

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
        reviews: [],
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
      <h1 className="text-text text-xl mb-4">Add book</h1>
      <div className="flex flex-col gap-4">
        <InputField
          placeholder="Title"
          value={title}
          changeHandler={(evt) => {
            setError("");
            setTitle(evt.currentTarget.value);
          }}
        />
        <InputField
          placeholder="Author"
          value={author}
          changeHandler={(evt) => {
            setError("");
            setAuthor(evt.currentTarget.value);
          }}
        />
        <InputField
          placeholder="Cover"
          value={cover}
          changeHandler={(evt) => {
            setError("");
            setCover(evt.currentTarget.value);
          }}
        />
        <InputField
          placeholder="Genres separated with /"
          value={genres}
          changeHandler={(evt) => {
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
