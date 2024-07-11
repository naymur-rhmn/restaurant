import { useEffect, useState } from "react";
import SingleFoodMenu from "./SingleFoodMenu";

const FoodMenu = ({ sliced }) => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((res) => res.json())
      .then((data) =>
        sliced ? setFoodItems(data.slice(0, 6)) : setFoodItems(data)
      );
  }, [sliced]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {foodItems.map((item) => (
        <SingleFoodMenu key={item._id} menu={item} />
      ))}
    </div>
  );
};

export default FoodMenu;
