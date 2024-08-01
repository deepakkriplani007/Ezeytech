import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About Us",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact Us",
    },
  ];
  return (
    <nav className="bg-[#fff] shadow-lg pr-[4vh]">
      <div className="max-w-full mr-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/">
            <div className="flex-shrink-0 flex ">
              {/* <img className="h-8 w-auto" src={Logo} alt="Logo" /> */}
              <span className="text-[#1D2BCA] text-lg font-semibold ml-2 ">
                EZEY
                <span className="text-[#F8990C] text-lg font-semibold">
                  TECH
                </span>
              </span>
            </div>
          </a>
          {/* menu 1 */}
          <div className="flex-grow flex items-center justify-end">
            <div className="hidden min-[770px]:block">
              <div className="flex space-x-4 lg:max-xl:space-x-2">
                <a
                  href="/"
                  className="text-[#242831] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <Link
                  to="/about"
                  className="text-[#242831] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="text-[#242831] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  className="text-[#242831] content-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          {/* menu 2 */}
          <div className="flex gap-2">
            <div
              className="flex pl-1 min-[770px]:hidden"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-[#FFFFFF] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl shadow-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-[gray]" : "text-blue"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <Link to={`/${link.id}`}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
