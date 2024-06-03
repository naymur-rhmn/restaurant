const Button = ({ text, px, wFull }) => {
  return (
    <button
      className={`capitalize para-sm py-2 cursor-pointer bg-green text-black rounded-full shadow-md font-bold ${
        px ? px : "px-4"
      } ${wFull && "w-full"}`}
    >
      {text}
    </button>
  );
};

export default Button;
