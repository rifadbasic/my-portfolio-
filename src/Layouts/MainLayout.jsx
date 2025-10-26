import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DarkVeil from "../utils/DarkVeil";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <DarkVeil />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
