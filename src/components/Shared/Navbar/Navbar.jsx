import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo/brand-logo.png";
import "./Navbar.css";
import NavContact from "./NavContact";

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuEnter = (menuIndex) => {
    setActiveMenu(menuIndex);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "About",
      submenu: [
        { label: "History", path: "/history" },
        { label: "Mission & Objectives", path: "/mission-objectives" },
        { label: "Campus", path: "/campus" },
        {
          label: "General Rules and Regulations",
          path: "/general-rules",
        },
        {
          label: "Career",
          path: "/career",
        },
      ],
    },
    {
      label: "Services",
      submenu: [
        { label: "Class Routine", path: "/class-routine" },
        { label: "Exam Schedule", path: "/exam-schedule" },
        {
          label: "Supplementary Exam Schedule",
          path: "/supplementary-exam-schedule",
        },
        { label: "Result", path: "/result" },
      ],
    },
    { label: "Contacts", path: "/contact" },
  ];

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setNavbarVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavContact></NavContact>
      <div
        className={`nav bg-white sticky top-0 z-50 font-serif ${
          isNavbarVisible ? "show" : "hide"
        }`}
      >
        <div className="px-5 container mx-auto flex justify-between py-4">
          <div className="flex items-center">
            <NavLink to={"/"}>
              <img className="w-32 md:w-40" src={logo} alt="" />
            </NavLink>
          </div>
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative text-gray-800"
                  onMouseEnter={() => handleMenuEnter(index)}
                  onMouseLeave={handleMenuLeave}
                >
                  <NavLink
                    className="py-2 px-1 border-b-2 border-transparent hover:text-green-600 hover:border-green-600 truncate uppercase"
                    activeClassName="border-green-600"
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                  {item.submenu && activeMenu === index && (
                    <ul className="absolute left-0 mt-2 py-2 bg-white rounded shadow-lg">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            className="block px-4 p-1 text-gray-800 hover:bg-gray-200 truncate uppercase"
                            activeClassName="text-green-600"
                            to={subItem.path}
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              className="btn btn-circle btn-primary lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 py-2 bg-white rounded shadow-lg flex flex-wrap">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative text-gray-800"
                    onMouseEnter={() => handleMenuEnter(index)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <NavLink
                      className="block px-4 py-2 border-b border-transparent hover:text-green-600 hover:border-green-600 truncate uppercase"
                      activeClassName="border-green-600"
                      to={item.path}
                    >
                      {item.label}
                    </NavLink>
                    {item.submenu && activeMenu === index && (
                      <ul className="absolute left-0 top-24 md:top-16 mt-0 py-2 bg-white rounded shadow-lg">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 truncate uppercase"
                              activeClassName="text-green-600"
                              to={subItem.path}
                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
