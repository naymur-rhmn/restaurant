import logo from "../assets/Group.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="bg-darkGray text-white z-50">
      <div className="sticky top-0 max-w-screen-xl mx-auto px-4 md:px-12 flex items-center gap-12 h-[90px]">
        <div>
          <img className="min-w-[136px]" src={logo} alt="Logo" />
        </div>
        {/* nav */}
        <div className="flex justify-between items-center w-full">
          <nav>
            <ul className="flex gap-4 md:gap-7">
              <li>Home</li>
              <li>Menu</li>
              <li>Galery</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div>
            <Button text="reservation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
