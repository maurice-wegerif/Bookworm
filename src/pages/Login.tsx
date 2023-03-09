import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLoginClick = () => {
    signInWithEmailAndPassword(auth, input.email, input.password).then(
      (response) => navigate("/")
    );
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg"
            alt="bookworm logo"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-text">
            bookworm🦋
          </h2>
          <p className="mt-2 text-center text-sm text-lightText">
            take a good book to bed with you... books do not snore
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-surface py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-lightText"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-lightText shadow-sm bg-background text-text focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={input.email}
                    onChange={(evt) =>
                      setInput({ ...input, email: evt.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-lightText"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-lightText bg-background text-text shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={input.password}
                    onChange={(evt) =>
                      setInput({ ...input, password: evt.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-lightText"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/register"
                    className="font-medium text-cta hover:text-ctaHover"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-cta py-2 px-4 text-sm font-medium text-ctaText shadow-sm hover:bg-ctaHover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleLoginClick();
                  }}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
