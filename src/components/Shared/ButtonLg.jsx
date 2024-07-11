import React from "react";

const ButtonLg = ({ text, px, wFull }) => {
  return (
    <button
      className={`capitalize para-lead cursor-pointer bg-green text-black rounded-full shadow-md sm:text-lg block font-bold py-2.5 sm:py-3 md:py-4 tracking-wide hover:bg-opacity-90 transition relative text-wrap ${
        px ? px : "px-4"
      } ${wFull && "w-full"}`}
    >
      {text}
    </button>
  );
};

export default ButtonLg;
