import React from "react";

import bg1 from "./assets/bg-1.jpg";

import NavbarTop from "./components/NavbarTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LongevityComponent from "./components/LongevityComponent";
import CoveredImage from "./components/CoveredImage";
import FavMenu from "./components/FavMenu";
import Chefs from "./components/Chefs";
import About from "./components/About";

const App = () => {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Hero />
      <LongevityComponent />
      <CoveredImage bgImg={bg1} />
      <FavMenu />
      <CoveredImage bgImg={bg1} />
      <Chefs />
      <About />
    </>
  );
};

export default App;
