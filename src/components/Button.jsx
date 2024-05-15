const Button = ({ text, px }) => {
  return (
    <button
      className={`capitalize para-sm py-2 cursor-pointer bg-green text-black rounded-full font-bold ${
        px ? px : "px-4"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
