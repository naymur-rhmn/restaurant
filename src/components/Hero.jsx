import Button from "./Button";
import service from "../assets/restaurant-service (2).png";
import cooking from "../assets/cooking-food.png";
import foodServe from "../assets/food-serve.png";

const Hero = () => {
  return (
    <section className="bg-darkGray text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex items-center  h-[calc(100vh-135px)]">
        <div className="lg:w-2/5 w-1/2">
          <h5 className="heading-5 uppercase text-green">Welcome To</h5>
          <h1 className="heading-2 my-6">Kamakura restaurant</h1>
          <p>Special Japanese Cuisine</p>
          <div className="mt-10">
            <Button text="Make Reservation" />
          </div>
        </div>
        <div className="lg:w-3/5 w-1/2 h-fit items-center flex">
          <div className="md:w-2/3 w-full h-[376px] relative ">
            <div className="hero-bg hero-bg-1"></div>
            <div className="hero-bg hero-bg-2"></div>

            {/*  */}
          </div>
          <div className="w-1/3 flex flex-col items-end">
            <div className="border p-4 flex flex-col gap-4 z-20">
              <img className="h-[80px] w-[50px]" src={cooking} alt="" />
              <img className="h-[80px] w-[50px]" src={service} alt="" />
              <img className="h-[80px] w-[50px]" src={foodServe} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
