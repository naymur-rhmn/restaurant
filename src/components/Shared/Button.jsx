const Button = ({ text, px, wFull }) => {
  return (
    <button
      className={`capitalize para-sm cursor-pointer bg-green text-black rounded-full shadow-md font-bold py-2 ${
        px ? px : "px-4"
      } ${wFull && "w-full"}`}
    >
      {text}
    </button>
  );
};

export default Button;
