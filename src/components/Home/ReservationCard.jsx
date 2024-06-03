import Button from "../Shared/Button";

const ReservationCard = () => {
  return (
    <section className="bg-black  pb-10 md:pb-40 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="bg-orange p-20 relative reservation-circle overflow-hidden z-10">
          <div className="">
            <h2 className="capitalize heading-4 md:heading-2 text-white">
              Make online <br /> reservation
            </h2>
            <p className="para-lead text-disable leading-6 mt-6 mb-10 w-4/5 md:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
              <Button text="Reservation" px="px-4 md:px-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCard;
