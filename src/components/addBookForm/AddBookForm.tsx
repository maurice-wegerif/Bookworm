import { useState } from "react";
import { Button } from "../button";

export const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <h1>Add book</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={title}
          onChange={(evt) => setTitle(evt.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={author}
          onChange={(evt) => setAuthor(evt.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="Cover"
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={cover}
          onChange={(evt) => setCover(evt.currentTarget.value)}
        />
        <Button
          label="Add book"
          clickHandler={() => console.log([title, author, cover])}
        />
      </div>
    </div>
  );
};
