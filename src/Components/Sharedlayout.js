import React from "react";
import { Outlet } from "react-router-dom";
import StylesNavbar from "./StylesNavbar";

const Sharedlayout = () => {
  return (
    <>
      <StylesNavbar />
      <Outlet />
    </>
  );
};

export default Sharedlayout;
