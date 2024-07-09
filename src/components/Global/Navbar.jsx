import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Button from "../Shared/Button";
import logo from "../../assets/izakaya-logo.png";
import bar from "../../assets/menu-icon.png";
import close from "../../assets/arrowClose.png";
import UserButton from "../Shared/UserButton";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [toggle, setToggle] = useState(false);
  const [userIcon, setUserIcon] = useState(false);

  const handleUserIcon = () => setUserIcon((prev) => !prev);
  const handleNavMenu = () => setToggle((prev) => !prev);
  const logOutWithhandleUserIcon = () => {
    logOut();
    handleUserIcon();
  };

  return (
    <div className="bg-darkGray backdrop-blur-lg bg-opacity-60 text-white sticky -top-[1px]  z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex items-center justify-between md:justify-between md:gap-12 h-[65px]">
        <div className="h-10 z-20">
          <Link to={"/"}>
            <img
              className="min-w-[136px] h-full z-20"
              src={logo}
              alt="IZAKAYA FOOD & BEVERAGE"
            />
          </Link>
        </div>
        {/*  */}
        <nav className="hidden md:flex">
          <ul className="flex gap-4 md:gap-7">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "active-nav underline-animation text-lg"
                  : "underline-animation  text-lg"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/menu"}
              className={({ isActive }) =>
                isActive
                  ? "active-nav underline-animation text-lg"
                  : "underline-animation  text-lg"
              }
            >
              Menu
            </NavLink>
            <NavLink
              to={"/chefs"}
              className={({ isActive }) =>
                isActive
                  ? "active-nav underline-animation text-lg"
                  : "underline-animation  text-lg"
              }
            >
              Chefs
            </NavLink>
            <NavLink
              to={"/chef"}
              className={({ isActive }) =>
                isActive
                  ? "active-nav underline-animation text-lg"
                  : "underline-animation  text-lg"
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "active-nav underline-animation text-lg"
                  : "underline-animation  text-lg"
              }
            >
              About
            </NavLink>
          </ul>
        </nav>
        <div className="hidden md:flex">
          <Link to={"/reservation"}>
            <Button text="reservation" />
          </Link>
        </div>
        {/* nav */}
        {/* <div className="hidden md:flex justify-between items-center w-full">
          <nav>
            <ul className="flex gap-4 md:gap-7">
              <Link to={"/"}>Home</Link>
              <Link to={"/menu"}>Menu</Link>
              <Link to={"/chefs"}>Chefs</Link>
              <li>Galery</li>
              <Link to={"/about"}>About</Link>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            {!user?.email ? (
              <div className="relative">
                <div
                  onClick={handleUserIcon}
                  className="shadow-lg cursor-pointer transition  rounded-full"
                >
                  <FaUserCircle
                    className="shadow-lg"
                    size={38}
                    color="#B8D20B"
                  />
                </div>
                <div
                  className={`absolute top-[53px]  left-[50%] -translate-x-[50%] px-3 py-3 rounded-md bg-green flex flex-col gap-2 user-box ${
                    userIcon ? "visible" : "hidden"
                  }`}
                >
                  <Link onClick={handleUserIcon} to={"/login"}>
                    <UserButton value={"Login"} />
                  </Link>
                  <Link onClick={handleUserIcon} to={"/register"}>
                    <UserButton value={"Register"} />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div
                  onClick={handleUserIcon}
                  className="shadow-lg cursor-pointer transition  rounded-full"
                >
                  <div className="h-10 w-10 rounded-full">
                    <img
                      className="rounded-full"
                      src={user?.photoURL}
                      alt={user?.displayName}
                    />
                  </div>
                </div>
                <div
                  className={`absolute top-[53px] left-[50%] -translate-x-[50%] px-3 py-3 rounded-md bg-green flex flex-col gap-2 user-box ${
                    userIcon ? "visible" : "hidden"
                  }`}
                >
                  <Link onClick={handleUserIcon} to={"/"}>
                    <UserButton value={"Profile"} />
                  </Link>
                  <button
                    onClick={logOutWithhandleUserIcon}
                    className={`border px-5 py-1  font-medium transition rounded w-full hover:bg-gray hover:border-gray`}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
            <Link to={"/reservation"}>
              <Button text="reservation" />
            </Link>
          </div>
        </div> */}

        {/* Responsive menu open close */}
        <div className="block md:hidden z-20">
          {!toggle ? (
            <img
              onClick={handleNavMenu}
              className="h-10  w-10 cursor-pointer"
              src={bar}
            />
          ) : (
            <img
              onClick={handleNavMenu}
              className="h-10  w-10 cursor-pointer"
              src={close}
            />
          )}
        </div>
        <div
          className={`absolute top-0 left-0 h-[100vh] w-full bg-black flex justify-center items-center ${
            toggle ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col items-center gap-6">
            <ul className="flex flex-col gap-4">
              <Link to={"/"} onClick={handleNavMenu}>
                Home
              </Link>
              <Link to={"/menu"} onClick={handleNavMenu}>
                Menu
              </Link>
              <li>Galery</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div>
              <Button text="reservation" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
