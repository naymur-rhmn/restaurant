import { Link } from "react-router-dom";
import Button from "../Shared/Button";
import ChefList from "./ChefList";

const Chefs = () => {
  return (
    <section className="bg-black  py-10 sm:py-20 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        {/* title */}
        <div className="flex justify-between w-full mb-10 items-center">
          <h2 className="heading-4 md:heading-3 text-white capitalize">
            meet our chefs
          </h2>
          <div>
            <Link to={"/chefs"}>
              <Button text="See all" px="px-6" />
            </Link>
          </div>
        </div>
        {/* chefs */}
        <ChefList sliced={true} />
      </div>
    </section>
  );
};

export default Chefs;
