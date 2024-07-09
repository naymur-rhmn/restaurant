import XShapeMask from "../Shared/XShapeMask";
import cover from "../../assets/res-bg/res-bg-1.jpg";

const Review = () => {
  return (
    <XShapeMask bg={cover}>
      {/* first child */}
      <h3 className="heading-4 sm:heading-3 md:heading-3 lg:heading-2 text-center">
        “To me, there's no great <br /> chef without a great <br /> team”
      </h3>
      {/* second child */}
      <div className="text-center mb-20">
        <div className="h-20 w-20 bg-gray rounded-full mx-auto mb-3">
          <img className="block rounded-full h-full w-full" src={""} alt="" />
        </div>
        <p className="text-xl font-bold">Shoo par dhee</p>
        <p>Master Chefs</p>
      </div>
    </XShapeMask>
  );
};

export default Review;
