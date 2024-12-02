import logo from "../assets/images/logo_full.jpeg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navBarButtonClass =
    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <nav className="bg-white border-gray-200 dark:bg-black dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Flowbite Logo" />
        </NavLink>

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink to="/login" className={navBarButtonClass}>
              Login
            </NavLink>
            <NavLink to="/register" className={navBarButtonClass}>
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
