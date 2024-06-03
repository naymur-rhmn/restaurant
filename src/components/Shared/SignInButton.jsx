const SignInButton = ({ value, onclick, icon }) => {
  const lowerValue = value.toLowerCase();
  return (
    <button
      onClick={onclick}
      className={`px-4 w-full text-lg font-medium  shadow-md tracking-[1px] py-2.5  rounded-full transition flex gap-2 items-center justify-center capitalize ${
        value === "google"
          ? "bg-orange"
          : value === "facebook"
          ? "bg-[#4B68A6]"
          : "bg-[#32CBFE]"
      } `}
    >
      <img className="h-6 w-6" src={icon} alt="" />
      <span>{value}</span>
    </button>
  );
};

export default SignInButton;
