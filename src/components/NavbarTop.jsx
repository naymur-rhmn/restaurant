import React from "react";

const NavbarTop = () => {
  return (
    <div className="bg-darkGray text-disable border-b border-[#4D4D4D]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex justify-between items-center h-[45px]">
        <div className="flex items-center gap-4">
          <p>Main Street, Sanghai</p>
          <a href="tel:+02453452">+02453452</a>
        </div>
        {/* social */}
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Fb</a>
          </li>
          <li>
            <a href="#">Tw</a>
          </li>
          <li>
            <a href="#">In</a>
          </li>
          <li>
            <a href="#">Yt</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;
