import { useEffect, useState } from "react";

const ChefList = ({ sliced }) => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then((data) => (sliced ? setChefs(data.slice(0, 4)) : setChefs(data)));
  }, [sliced]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 shadow-lg">
      {chefs.map((chef) => {
        const { _id, name, img, role } = chef;
        return (
          <div
            key={_id}
            className="bg-gradient-to-r from-gray flex justify-between items-center bg-opacity-30 relative shadow-xl"
          >
            <div
              style={{
                backgroundImage: `url(${img})`,
              }}
              className="flex-1 chef-bg relative h-52 left-0 bottom-0 mt-4 bg-no-repeat bg-cover bg-top"
            ></div>
            <div className="flex-1 px-2">
              <p className="capitalize heading-5  md:heading-4">{name}</p>
              <p className="para-lead">{role}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChefList;
