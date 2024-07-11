import { Outlet } from "react-router-dom";
import NavbarTop from "../components/Global/NavbarTop";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";

const MotherLayout = () => {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <ScrollToTop />
      <NavbarTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MotherLayout;
