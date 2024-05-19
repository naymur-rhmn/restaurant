import { useEffect, useState } from "react";

const FoodMenu = ({ sliced }) => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("./items.json")
      .then((res) => res.json())
      .then((data) =>
        sliced ? setFoodItems(data.items.slice(0, 6)) : setFoodItems(data.items)
      );
  }, [sliced]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {foodItems.map((item) => {
        const { name, img, category, price, contain } = item;

        return (
          <div
            key={item.id}
            className="group bg-gray bg-opacity-35 p-2 shadow-lg overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                className="group-hover:scale-110 duration-300 transition"
                src={img}
                alt={`Image of ${name}`}
              />
            </div>
            <div className="py-2">
              <div className="flex justify-between items-center">
                <h4 className="heading-4">{name}</h4>
                <span className="py-[2px] px-3 rounded-full text-white capitalize heading-6 bg-orange text-wrap">
                  {category}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-disable">{`${contain[0]} ${
                  contain[1] && contain[1]
                }`}</p>
                <span className="heading-4">${price}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenu;
