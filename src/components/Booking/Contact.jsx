import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="mb-8 sm:mb-10 md:mb-16">
      <h4 className="heading-5 md:heading-4 capitalize">
        Visit Our restaurant
      </h4>

      <div className="mt-4 flex gap-6 md:gap-10 flex-wrap">
        <div className="flex gap-4 items-center">
          <div className="sm:h-10 h-8 w-8 sm:w-10 flex justify-center items-center rounded-full bg-orange">
            <IoCall color="white" />
          </div>
          <div>
            <p className="text-sm text-zinc-100">Phone Number</p>
            <p>+813-1234-5678</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="sm:h-10 h-8 w-8 sm:w-10 flex justify-center items-center rounded-full bg-orange">
            <HiOutlineMail color="white" />
          </div>
          <div>
            <p className="text-sm text-zinc-100">Email</p>
            <p>info@jpcuisine.com</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="sm:h-10 h-8 w-8 sm:w-10 flex justify-center items-center rounded-full bg-orange">
            <IoLocation color="white" />
          </div>
          <div>
            <p className="text-sm text-zinc-100">Map Street</p>
            <p>Ichigaya Station Y-14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
