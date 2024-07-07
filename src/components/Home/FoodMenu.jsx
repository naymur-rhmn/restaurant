import { useEffect, useState } from "react";
import SingleFoodMenu from "./SingleFoodMenu";

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
      {foodItems.map((item) => (
        <SingleFoodMenu key={item.id} menu={item} />
      ))}
    </div>
  );
};

export default FoodMenu;
