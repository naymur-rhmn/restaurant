import service from "../../assets/service/restaurant-service.png";
import cooking from "../../assets/service/cooking-food.png";
import foodServe from "../../assets/service/food-serve.png";
import ButtonLg from "../Shared/ButtonLg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-darkGray text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex items-center  h-[calc(100vh-135px)]">
        <div className="lg:w-2/5 w-1/2 z-10">
          <h5 className="heading-5 uppercase text-green">Welcome To</h5>
          <h1 className="heading-3 md:heading-2 mt-4 mb-2 md:mt-6 md:mb-4">
            Izakaya Restaurant
          </h1>
          <p>
            Experience the finest in traditional Japanese cuisine, from
            exquisite sushi and sashimi to savory ramen and delicate tempura.
          </p>
          <div className="mt-6 md:mt-10">
            {/* <Button text="Make Reservation" /> */}
            <Link to={"reservation"}>
              <ButtonLg text={"Make Reservation"} px={"px-4 md:px-6"} />
            </Link>
          </div>
        </div>
        <div className="lg:w-3/5 w-1/2 h-fit items-center flex z-0">
          <div className="w-2/3 h-[376px] relative hero-bg-box">
            <div className="hero-bg hero-bg-1"></div>
            <div className="hero-bg hero-bg-2"></div>
          </div>
          {/* service icons in md devices */}
          <div className="w-1/3 md:flex flex-col items-end hidden ">
            <div className="border p-4 flex flex-col gap-4 z-20 service-icons">
              <img className="h-[80px] w-[50px]" src={cooking} alt="" />
              <img className="h-[80px] w-[50px]" src={service} alt="" />
              <img className="h-[80px] w-[50px]" src={foodServe} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* service icons in small devices */}
      <div className="md:hidden -mt-16 m-4 flex flex-row gap-4 justify-center z-20">
        <div className="flex flex-row gap-6 px-6 border justify-center items-center h-20">
          <img className="h-[55px] w-[50px]" src={cooking} alt="" />
          <img
            className="h-[55px] w-[50px] transform -scale-x-100"
            src={service}
            alt=""
          />
          <img className="h-[80px] w-[50px]" src={foodServe} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
