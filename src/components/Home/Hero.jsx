import Button from "../Shared/Button";
import service from "../../assets/restaurant-service.png";
import cooking from "../../assets/cooking-food.png";
import foodServe from "../../assets/food-serve.png";

const Hero = () => {
  return (
    <section className="bg-darkGray text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex items-center  h-[calc(100vh-135px)]">
        <div className="lg:w-2/5 w-1/2 z-10">
          <h5 className="heading-5 uppercase text-green">Welcome To</h5>
          <h1 className="heading-3 md:heading-2 my-4 md:my-6">
            Kamakura restaurant
          </h1>
          <p>Special Japanese Cuisine</p>
          <div className="mt-10">
            <Button text="Make Reservation" />
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
