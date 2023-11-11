import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const baseLinkStyle =
    "text-lg px-4 py-2 font-semibold text-gray-200 hover:text-white transition duration-300";
  const activeLinkStyle = "text-white bg-blue-600 rounded-md";
  const toggleMenu = () => setIsOpen(!isOpen);

  const Link = ({ to, text }: { to: string; text: string }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${baseLinkStyle} ${activeLinkStyle}` : baseLinkStyle
        }
      >
        {text}
      </NavLink>
    );
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-3 relative">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none sm:hidden z-20"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`absolute top-full left-0 right-0 bg-gray-800 sm:bg-transparent sm:relative transition-transform duration-500 ease-in-out z-10 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            } sm:translate-y-0 sm:opacity-100`}
          >
            <div className="flex flex-col sm:flex-row">
              <Link to={"/"} text={"Mixed Gallery"} />
              <Link to={"/basic"} text={"Basic Gallery"} />
              <Link to={"/image"} text={"Image Gallery"} />
              <Link to={"/video"} text={"Video Gallery"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
