import { useState } from "react";
import JourneySingleContent from "./JourneySingleContent";
import sushiSeller from "../../assets/sushi-seller.jpg";
import restaurantOutlook from "../../assets/restaurant-outlook.jpg";
import award from "../../assets/World-Restaurant-Awards.png.webp";
import fiveStar from "../../assets/five-star.jpg";

const OurJourney = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const handleTab = (e) => {
    setCurrentTab(e);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-12 py-6 sm:py-8 md:py-16">
      <h3 className="capitalize text-white heading-5 md:heading-4">
        Our journey
      </h3>
      {/* tab and content */}
      <div className="md:grid grid-cols-12 gap-6 mt-3 md:mt-4">
        {/* tabs */}
        <div className="flex flex-row gap-4 md:flex-col md:col-span-4">
          <div
            onClick={() => handleTab(1)}
            className={`hover:bg-gray mb-2 p-2 transition cursor-pointer ${
              currentTab === 1 ? "bg-gray" : ""
            }`}
          >
            <p className="text-green font-semibold">2008</p>
            <p className="font-semibold">Small Sushi Seller</p>
          </div>
          <div
            onClick={() => handleTab(2)}
            className={`hover:bg-gray mb-2 p-2 transition cursor-pointer ${
              currentTab === 2 ? "bg-gray" : ""
            }`}
          >
            <p className="text-green font-semibold">2012</p>
            <p className="font-semibold">Build the Restaurant</p>
          </div>
          <div
            onClick={() => handleTab(3)}
            className={`hover:bg-gray mb-2 p-2 transition cursor-pointer ${
              currentTab === 3 ? "bg-gray" : ""
            }`}
          >
            <p className="text-green font-semibold">2015</p>
            <p className="font-semibold">Global Achivements</p>
          </div>
          <div
            onClick={() => handleTab(4)}
            className={`hover:bg-gray mb-2 p-2 transition cursor-pointer ${
              currentTab === 4 ? "bg-gray" : ""
            }`}
          >
            <p className="text-green font-semibold">2020</p>
            <p className="font-semibold">Five-star standard Restaurant</p>
          </div>
        </div>
        {/* content */}
        <div className=" md:col-span-8 min-h-[400px] mt-2 md:mt-0">
          <div className={` mb-2 ${currentTab === 1 ? "block" : "hidden"}`}>
            <JourneySingleContent
              bg={sushiSeller}
              content={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab esse  nemo architecto, excepturi eius quas! Provident! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab esse nemo architecto, excepturi eius quas! Provident!"
              }
            />
          </div>
          <div className={`mb-2 ${currentTab === 2 ? "block" : "hidden"}`}>
            <JourneySingleContent
              bg={restaurantOutlook}
              content={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab esse  nemo architecto, excepturi eius quas! Provident! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab esse nemo architecto, excepturi eius quas! Provident!"
              }
            />
          </div>
          <div className={`mb-2 ${currentTab === 3 ? "block" : "hidden"}`}>
            <JourneySingleContent
              bg={award}
              content={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab esse  nemo architecto, excepturi eius quas! Provident! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab esse nemo architecto, excepturi eius quas! Provident!"
              }
            />
          </div>
          <div className={`mb-2 ${currentTab === 4 ? "block" : "hidden"}`}>
            <JourneySingleContent
              bg={fiveStar}
              content={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab esse  nemo architecto, excepturi eius quas! Provident! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab esse nemo architecto, excepturi eius quas! Provident!"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
