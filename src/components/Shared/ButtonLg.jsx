import React from "react";

const ButtonLg = ({ text, px, wFull }) => {
  return (
    <button
      className={`capitalize para-lead cursor-pointer bg-green text-black rounded-full shadow-md font-bold py-2 md:py-3 ${
        px ? px : "px-4"
      } ${wFull && "w-full"}`}
    >
      {text}
    </button>
  );
};

export default ButtonLg;
