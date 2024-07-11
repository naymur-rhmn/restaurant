import React from "react";

const SuccessModal = ({ onHandler }) => {
  return (
    <div className="h-screen w-full flex justify-center items-center absolute top-0 left-0">
      <div className="w-fit h-fit bg-[#578eac] py-4 px-6 m-6 rounded-xl shadow-lg">
        <div className=" text-black text-center">
          <p className="heading-5">Welcome to Izakaya</p>
          <p className="text-lg font-semibold">
            Your Booking Registered Successfully
          </p>
          <p className="text-white font-bold">Sir, We are awaiting for you!</p>
        </div>
        <div className="flex justify-center mt-2">
          <button
            onClick={onHandler}
            className="bg-white px-3 py-1 text-black rounded font-semibold"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
