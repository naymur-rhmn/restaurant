import React from "react";

const UserButton = ({ value }) => {
  const lowercasedValue = value.toLowerCase();
  return (
    <button
      className={`border px-5 py-1  font-medium transition rounded w-full ${
        lowercasedValue === "register"
          ? "hover:bg-orange hover:border-orange"
          : lowercasedValue === "logout"
          ? "hover:bg-gray hover:border-gray"
          : "hover:border-[#289A47] hover:bg-[#289A47]"
      }`}
    >
      {value}
    </button>
  );
};

export default UserButton;
