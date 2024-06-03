import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MotherLayout from "../layout/MotherLayout";
import Menu from "../pages/Menu";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

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
