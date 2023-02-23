import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useContext } from "react";
import { DataContext } from "../../helpers/DataContext";
import { ProfileModal } from "./ProfileModal";

export const Navbar = () => {
  const navigate = useNavigate();
  const { isAdmin, setIsAdmin } = useContext(DataContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed out successfully");
        setIsAdmin(false);
      })
      .catch((error) => {
        // todo handle error..
      });
  };

  return (
    <nav className="divide-y-2 divide-gray-50 bg-white shadow ring-1 ring-black ring-opacity-5 relative">
      <div className="px-5 pt-5 pb-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-4xl">
            📕🐛🔥
          </Link>
        </div>
        <div className="absolute top-5 right-5 flex">
          <div className="flex px-5 items-center">
            <Link
              to="/search"
              className="px-2 py-2 ml-8 mr-3 w-full items-center hover:bg-gray-200 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2t"
            >
              <RxMagnifyingGlass className="text-indigo-600 text-2xl hover:text-indigo-700" />
            </Link>
          </div>

          {auth.currentUser !== null ? (
            <ProfileModal
              auth={auth}
              isAdmin={isAdmin}
              handleLogout={handleLogout}
            />
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 whitespace-nowrap flex items-center text-base hover:bg-gray-200 font-medium text-gray-500 hover:text-gray-900 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2t"
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
