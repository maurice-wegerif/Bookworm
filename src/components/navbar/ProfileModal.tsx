import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Avatar } from "../avatar";
import { classNames } from "../../helpers/classNames";
import { Auth } from "firebase/auth";
import { Link } from "react-router-dom";

interface ProfileModalProps {
  auth: Auth;
  isAdmin: boolean;
  handleLogout: () => void;
}

export const ProfileModal = ({
  auth,
  isAdmin,
  handleLogout,
}: ProfileModalProps) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleModal = () => setIsShowing(!isShowing);

  const links = ["About", "Butterflies", "Worms"];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button onClick={toggleModal}>
        <figure className="cursor-pointer">
          <Avatar />
        </figure>
      </Menu.Button>
      <Transition
        show={isShowing}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {auth.currentUser && (
            <div className="px-4 py-3">
              <p className="text-sm">
                Logged in {isAdmin ? "administrator" : "regular user"}
              </p>
              <p className="truncate text-sm font-medium text-gray-900">
                {auth.currentUser.email}
              </p>
            </div>
          )}
          <div className="py-1">
            {isAdmin && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    onClick={() => setIsShowing(false)}
                    to="add-book"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Add book
                  </Link>
                )}
              </Menu.Item>
            )}
            {links.map((link) => (
              <Menu.Item key={link}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {link}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Fragment>
                  {auth.currentUser ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsShowing(false);
                      }}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  ) : (
                    <Link to="/login">
                      <button
                        onClick={() => setIsShowing(false)}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-sm"
                        )}
                      >
                        Sign in
                      </button>
                    </Link>
                  )}
                </Fragment>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
