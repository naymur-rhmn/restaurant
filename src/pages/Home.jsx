import About from "../components/Home/About";
import Chefs from "../components/Home/Chefs";
import CoveredImage from "../components/Home/CoveredImage";
import FavMenu from "../components/Home/FavMenu";
import Hero from "../components/Home/Hero";
import LongevityComponent from "../components/Home/LongevityComponent";
import ReservationCard from "../components/Home/ReservationCard";
import cover1 from "../assets/res-bg/res-bg-1.jpg";
import cover2 from "../assets/res-bg/res-bg-5.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <LongevityComponent />
      <CoveredImage bgImg={cover1} />
      <FavMenu />
      <CoveredImage bgImg={cover2} />
      <Chefs />
      <About />
      <ReservationCard />
    </>
  );
};

export default Home;
