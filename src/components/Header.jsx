import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-seba-100 px-2 sm:px-4 py-3">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <img
              src={require("../assets/images/yo.JPG")}
              className="rounded-full mr-3 h-10"
              alt="Sebastian Martínez"
            />
            <span className="self-center md:text-xl font-semibold text-clip text-white">
              Sebastian Martínez
            </span>
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center mx-7 p-1 text-sm text-seba-500 rounded-lg md:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
          <div
            className={`${
              isOpen ? "" : "hidden"
            } w-full md:block md:w-auto duration-200 transition`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-seba-200 md:bg-transparent md:text-seba-400 block py-2 pr-4 pl-3 text-seba-400 rounded md:p-0 font-semibold"
                      : "block py-2 pr-4 pl-3 text-seba-300 rounded md:p-0 font-semibold"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-me"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-seba-200 md:bg-transparent md:text-seba-400 block py-2 pr-4 pl-3 text-seba-400 rounded md:p-0 font-semibold"
                      : "block py-2 pr-4 pl-3 text-seba-300 rounded md:p-0 font-semibold"
                  }
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-seba-200 md:bg-transparent md:text-seba-400 block py-2 pr-4 pl-3 text-seba-400 rounded md:p-0 font-semibold"
                      : "block py-2 pr-4 pl-3 text-seba-300 rounded md:p-0 font-semibold"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-me"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-seba-200 md:bg-transparent md:text-seba-400 block py-2 pr-4 pl-3 text-seba-400 rounded md:p-0 font-semibold"
                      : "block py-2 pr-4 pl-3 text-seba-300 rounded md:p-0 font-semibold"
                  }
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
