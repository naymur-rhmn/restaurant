import { useState } from "react";
import JourneySingleContent from "./JourneySingleContent";
import sushiSeller from "../../assets/about/sushi-seller.jpg";
import restaurantOutlook from "../../assets/about/restaurant-outlook.jpg";
import award from "../../assets/about/World-Restaurant-Awards.png.webp";
import fiveStar from "../../assets/about/five-star.jpg";

const OurJourney = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const handleTab = (e) => {
    setCurrentTab(e);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-12 pt-6 sm:pt-8 md:pt-16">
      <h3 className="capitalize text-white heading-5 md:heading-4">
        Our journey
      </h3>
      {/* tab and content */}
      <div className="md:grid grid-cols-12 gap-6 mt-3 md:mt-4">
        {/* tabs */}
        <div className="flex flex-row flex-wrap sm:flex-nowrap gap-4 md:flex-col md:col-span-4">
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
          <div
            className={` mb-2 w-full ${currentTab === 1 ? "block" : "hidden"}`}
          >
            <JourneySingleContent
              bg={sushiSeller}
              content={
                "In 2008, we started as a humble sushi seller, driven by passion for authentic flavors. With dedication and love for Japanese cuisine, we embarked on a journey to share our culinary heritage."
              }
            />
          </div>
          <div
            className={`mb-2 w-full ${currentTab === 2 ? "block" : "hidden"}`}
          >
            <JourneySingleContent
              bg={restaurantOutlook}
              content={
                "In 2012, we realized our dream by establishing Izakaya Restaurant. From a vision of authentic Japanese dining to a thriving reality, we continue to uphold our commitment to quality and tradition."
              }
            />
          </div>
          <div
            className={`mb-2 w-full ${currentTab === 3 ? "block" : "hidden"}`}
          >
            <JourneySingleContent
              bg={award}
              content={
                "By 2015, we celebrated global recognition, showcasing our commitment to excellence in Japanese cuisine. Our journey continues to unite flavors and cultures from around the world."
              }
            />
          </div>
          <div
            className={`mb-2 w-full ${currentTab === 4 ? "block" : "hidden"}`}
          >
            <JourneySingleContent
              bg={fiveStar}
              content={
                "In 2020, we proudly attained a five-star standard, elevating our commitment to excellence in Japanese dining. It's a testament to our passion for quality and the trust of our valued patrons."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
