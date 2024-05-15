import React from "react";

import bg1 from "./assets/bg-1.jpg";

import NavbarTop from "./components/NavbarTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LongevityComponent from "./components/LongevityComponent";
import CoveredImage from "./components/CoveredImage";

const App = () => {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Hero />
      <LongevityComponent />
      <CoveredImage bgImg={bg1} />
    </>
  );
};

export default App;
