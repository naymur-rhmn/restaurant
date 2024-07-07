import ReservationCard from "../components/Home/ReservationCard";
import Menus from "../components/Menu/Menus";
import PageTitle from "../components/Shared/PageTitle";

const Menu = () => {
  return (
    <div className="">
      <PageTitle title={"our menu"} />
      <Menus />
      <ReservationCard />
    </div>
  );
};

export default Menu;
