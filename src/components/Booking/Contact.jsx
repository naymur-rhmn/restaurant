import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="mb-8 sm:mb-10 md:mb-16">
      <h4 className="heading-4 capitalize">Visit Our restaurant</h4>

      <div className="mt-4 flex gap-10">
        <div className="flex gap-4 items-center">
          <div className="h-10 w-10 flex justify-center items-center rounded-full bg-orange">
            <IoCall color="white" />
          </div>
          <div>
            <p className="text-sm text-zinc-100">Phone Number</p>
            <p>(92) 2635427</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="h-10 w-10 flex justify-center items-center rounded-full bg-orange">
            <HiOutlineMail color="white" />
          </div>
          <div>
            <p className="text-sm text-zinc-100">Email</p>
            <p>restaurant@email.com</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="h-10 w-10 flex justify-center items-center rounded-full bg-orange">
            <IoLocation color="white" />
          </div>
          <div>
            <p className="text-sm text-zinc-100">Map Street</p>
            <p>Raya Subraya 2787</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
