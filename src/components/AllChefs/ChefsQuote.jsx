import master from "../../assets/master-chefs.jpg";
import ChefList from "../Home/ChefList";
import XShapeMask from "../Shared/XShapeMask";
import cover from "../../assets/res-bg/kitchen.jpg";

const ChefsQuote = () => {
  return (
    <div className="mt-8 sm:mt-12 md:mt-16">
      <XShapeMask bg={cover}>
        {/* first child */}
        <h3 className="heading-4 sm:heading-3 md:heading-3 lg:heading-2 text-center">
          “To me, there's no great <br /> chef without a great <br /> team”
        </h3>
        {/* second child */}
        <div className="text-center mb-20">
          <div className="h-20 w-20 bg-gray rounded-full mx-auto mb-3">
            <img
              className="block rounded-full h-full w-full"
              src={master}
              alt=""
            />
          </div>
          <p className="text-xl font-bold">Shoo par dhee</p>
          <p>Master Chefs</p>
        </div>
      </XShapeMask>
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 mt-4 sm:mt-6 md:mt-10 mb-5 sm:mb-10 md:mb-20 ">
        <ChefList />
      </div>
    </div>
  );
};

export default ChefsQuote;
