import { NavLink } from "react-router-dom";

interface NavItemProps {
  label: string;
  path: string;
}

export const NavItem = ({ label, path }: NavItemProps) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      `text-lg hover:text-text ${
        isActive ? "text-text border-b-2 border-b-blue-600" : "text-lightText"
      }`
    }
  >
    {label}
  </NavLink>
);
