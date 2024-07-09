import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MotherLayout from "../layout/MotherLayout";
import Menu from "../pages/Menu";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Reservation from "../pages/Reservation";
import AllChefs from "../pages/AllChefs";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MotherLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "chefs",
        element: <AllChefs />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
