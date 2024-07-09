import { Outlet } from "react-router-dom";
import NavbarTop from "../components/Global/NavbarTop";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MotherLayout = () => {
  return (
    <>
      <ScrollToTop />
      <NavbarTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MotherLayout;
