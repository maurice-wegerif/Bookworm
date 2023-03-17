import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { RxMagnifyingGlass, RxMoon, RxSun } from "react-icons/rx";
import { useContext } from "react";
import { DataContext } from "../../helpers/DataContext";
import { ProfileModal } from "./ProfileModal";

export const Navbar = () => {
  const navigate = useNavigate();
  const { isAdmin, setIsAdmin, darkmode, setDarkmode } =
    useContext(DataContext);

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

  const handleThemeToggle = () => {
    setDarkmode(!darkmode);
    window.localStorage.setItem("theme", darkmode ? "light" : "dark");
    darkmode
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "#171717");
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <nav className="divide-y-2 divide-gray-50 bg-surface shadow ring-1 ring-black ring-opacity-5 relative">
        <div className="px-5 pt-5 pb-6">
          <div className="absolute right-1/3 left-1/3 flex justify-center items-center">
            <Link to="/" className="font-serif text-5xl text-text hidden">
              Bookworm
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/" className="text-4xl font-serif text-text flex items-center">
              <img src={"public/BookwormLogo.png"} alt="My Logo" className="w-7 h-10" />
              <span className="ml-0">ookworm</span>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex justify-center">
              <Link to="/TopTenPage" className="text-2xl font-serif text-text hover:text-primary">
                Top 10
              </Link>
              <Link to="/NewsPage" className="text-2xl font-serif text-text ml-24 hover:text-primary">
                New Books
              </Link>
              <Link to="/RandomPage" className="text-2xl font-serif text-text ml-24 hover:text-primary">
                Explore
              </Link>
            </div>
          </div>
          <div className="absolute top-5 right-5 flex">
            <div className="flex px-5 items-center">
              <Link
                to="/search"
                className="px-2 py-2 mr-3 w-full items-center hover:bg-background rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2t"
              >
                <RxMagnifyingGlass className="text-primary text-2xl hover:text-primary" />
              </Link>
              <button
                onClick={handleThemeToggle}
                className="px-2 py-2 ml-2 mr-3 w-full items-center hover:bg-background rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2t"
              >
                {darkmode ? (
                  <RxSun className="text-primary text-2xl hover:text-primary" />
                ) : (
                  <RxMoon className="text-primary text-2xl hover:text-primary" />
                )}
              </button>
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
                  className="px-4 py-2 whitespace-nowrap flex items-center text-base font-medium text-lightText hover:text-text rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2t"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cta px-4 py-2 text-base font-medium text-ctaText shadow-sm hover:bg-ctaHover"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
