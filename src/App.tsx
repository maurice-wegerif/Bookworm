import { useState } from "react";
import { BookList } from "./components/bookList/BookList";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="text-center mt-16 flex flex-col gap-8">
      <h1 className="font-bold text-xl">IMDbooks</h1>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="bg-pink-100 hover:bg-pink-200 rounded w-32 p-4 m-auto"
      >
        count is {count}
      </button>
      <p className="text-gray-500">
        Edit <code className="font-mono bg-pink-50">src/App.tsx</code> and save
        to test HMR
      </p>
      <hr />
      <p>Data from Firebase:</p>
      <BookList />
   </main>
  );
};

export default App;
