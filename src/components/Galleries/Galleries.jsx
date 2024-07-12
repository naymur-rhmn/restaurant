import React, { useEffect, useState } from "react";
import SingleGallery from "./SingleGallery";
import GalleryCategory from "./GalleryCategory";
import bg1 from "../../assets/res-bg/res-bg-3.jpg";
import bg2 from "../../assets/res-bg/res-bg-4.jpg";
import Loading from "../Shared/Loading";

const Galleries = () => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const primary = menu.filter((item) => item.type == "primary");
  const beverage = menu.filter((item) => item.type == "beverage");
  const dessert = menu.filter((item) => item.type == "dessert");

  useEffect(() => {
    fetch("https://izakaya-restaurant.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="max-w-screen-xl mx-auto px-4 md:px-12 mb-10 sm:mb-12 md:mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {primary.map((item) => (
              <SingleGallery key={item._id} item={item} />
            ))}
          </div>

          <GalleryCategory bg={bg1} />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {beverage.map((item) => (
              <SingleGallery key={item._id} item={item} />
            ))}
          </div>

          <GalleryCategory bg={bg2} />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {dessert.map((item) => (
              <SingleGallery key={item._id} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Galleries;
