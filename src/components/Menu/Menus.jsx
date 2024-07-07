import { useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle";
import SingleFoodMenu from "../Home/SingleFoodMenu";
import axios from "axios";
import Loading from "../Shared/Loading";

const Menus = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("main menu");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleCategory(category) {
    setCurrentCategory(category);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("./items.json");
        setFoodMenu(res.data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const categorigedMenu = foodMenu.filter((menu) => {
    if (currentCategory === "main menu") {
      return menu.type === "primary";
    }
    return menu.type === currentCategory;
  });

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-12 mb-8 sm:mb-10 md:mb-16">
      <div>
        {/* category */}
        <div className="flex flex-row gap-4 justify-center py-4 mb-5">
          <button
            onClick={() => handleCategory("main menu")}
            className={`transition hover:text-white ${
              currentCategory === "main menu"
                ? "menu-category "
                : "text-indigo-100"
            } `}
          >
            Main Menu
          </button>
          <button
            onClick={() => handleCategory("dessert")}
            className={`transition hover:text-white ${
              currentCategory === "dessert"
                ? "menu-category "
                : "text-indigo-100"
            } `}
          >
            Dessert
          </button>
          <button
            onClick={() => handleCategory("dish")}
            className={`transition hover:text-white ${
              currentCategory === "dish" ? "menu-category" : "text-indigo-100"
            } `}
          >
            Dish
          </button>
          <button
            onClick={() => handleCategory("beverage")}
            className={`transition hover:text-white ${
              currentCategory === "beverage"
                ? "menu-category "
                : "text-indigo-100"
            } `}
          >
            Beverage
          </button>
        </div>

        {/* menus */}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categorigedMenu?.map((item) => (
              <SingleFoodMenu key={item.id} menu={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menus;
