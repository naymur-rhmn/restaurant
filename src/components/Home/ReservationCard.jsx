import { Link } from "react-router-dom";
import ButtonLg from "../Shared/ButtonLg";

const ReservationCard = () => {
  return (
    <section className="bg-black  pb-8 md:pb-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="bg-orange p-10 md:p-12 relative reservation-circle overflow-hidden z-10 leading-relaxed">
          <div className="">
            <h2 className="capitalize leading-tight  heading-4 md:heading-3 text-white">
              Make online <br /> reservation
            </h2>
            <p className="para-lead text-disable leading-6 md:mt-4 mt-2 mb-4 md:mb-8 w-4/5 md:w-2/3">
              Book your dining experience effortlessly with our online
              reservation system. Enjoy the convenience of securing your table
              from anywhere, ensuring a seamless and enjoyable visit to our
              restaurant. Reserve now and experience the best of Japanese
              cuisine.
            </p>
            <div>
              <Link to={"/reservation"}>
                <ButtonLg text="Reservation" px="px-4 md:px-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCard;
