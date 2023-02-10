import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { Button } from "../button";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  console.log(auth.currentUser);

  return (
    <nav className="divide-y-2 divide-gray-50 bg-white shadow ring-1 ring-black ring-opacity-5 relative">
      <div className="px-5 pt-5 pb-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-4xl">
            📕🐛🔥
          </Link>
        </div>
        <div className="absolute top-5 right-5">
          {auth.currentUser ? (
            <div className="flex">
              <Link to="/add-book">
                <Button label="+" clickHandler={() => console.log("...")} />
              </Link>
              <button
                onClick={handleLogout}
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
