import React from "react";

const NavbarTop = () => {
  return (
    <div className="hidden sm:block bg-darkGray text-disable border-b border-[#4D4D4D] ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex justify-between items-center h-[45px]">
        <div className="flex items-center gap-2 md:gap-4">
          <p>123 Sushi St., Tokyo, Japan</p>
          <a href="tel:+81312345678">+81 3-1234-5678</a>
        </div>
        {/* social */}
        <ul className="flex items-center gap-4">
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              Fb
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank">
              Tw
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              In
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank">
              Yt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;
