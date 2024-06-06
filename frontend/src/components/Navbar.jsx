import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const activeLink = "text-button";
  const notActiveLink = "text-gray-900";
  return (
    <>
      <nav className="bg-white border-b-2 border-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7 ">
          <Link
            className="self-center text-3xl font-semibold whitespace-nowrap"
            to="/"
          >
            Moody News
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : notActiveLink
                }
                to="/"
              >
                <li className="block py-2 px-3  rounded md:bg-transparent  md:p-0 hover:text-button text-lg">
                  Home
                </li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : notActiveLink
                }
                to="/news"
              >
                <li className="block py-2 px-3  rounded  hover:bg-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-button md:p-0 text-lg cursor-pointer">
                  News
                </li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : notActiveLink
                }
                to="/about"
              >
                <li className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-button md:p-0 text-lg">
                  About
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
