const Button = ({ text, px, wFull }) => {
  return (
    <button
      className={`capitalize para-sm cursor-pointer bg-green text-black text-base md:text-lg rounded-full shadow-md  py-2 hover:bg-opacity-90  transition ${
        px ? px : "px-4"
      } ${wFull && "w-full"}`}
    >
      {text}
    </button>
  );
};

export default Button;
