import Button from "./Button";
import logo from "../assets/Group.png";
import bar from "../assets/menu-icon.png";
import close from "../assets/arrowClose.png";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-darkGray backdrop-blur-lg bg-opacity-60 text-white sticky top-0  z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex items-center justify-between md:justify-normal md:gap-12 h-[65px]">
        <div className=" z-20">
          <img className="min-w-[136px] z-20" src={logo} alt="Logo" />
        </div>
        {/* nav */}
        <div className="hidden md:flex justify-between items-center w-full">
          <nav>
            <ul className="flex gap-4 md:gap-7">
              <li>Home</li>
              <li>Menu</li>
              <li>Galery</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div>
            <Button text="reservation" />
          </div>
        </div>
        <div className="block md:hidden z-20">
          {!toggle ? (
            <img
              onClick={() => setToggle(!toggle)}
              className="h-10  w-10 cursor-pointer"
              src={bar}
            />
          ) : (
            <img
              onClick={() => setToggle(!toggle)}
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
              <li>Home</li>
              <li>Menu</li>
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
