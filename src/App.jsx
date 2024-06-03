import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default App;
