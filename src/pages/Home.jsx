import About from "../components/Home/About";
import Chefs from "../components/Home/Chefs";
import CoveredImage from "../components/Home/CoveredImage";
import FavMenu from "../components/Home/FavMenu";
import Hero from "../components/Home/Hero";
import LongevityComponent from "../components/Home/LongevityComponent";
import ReservationCard from "../components/Home/ReservationCard";
import bg1 from "../assets/bg-1.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <LongevityComponent />
      <CoveredImage bgImg={bg1} />
      <FavMenu />
      <CoveredImage bgImg={bg1} />
      <Chefs />
      <About />
      <ReservationCard />
    </>
  );
};

export default Home;
