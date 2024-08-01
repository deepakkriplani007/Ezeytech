import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
const Service = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-40">
        <Navbar />
      </div>
      <div className="pt-6">
        <div className="flex justify-center font-semibold sm:pt-[10vh]  pb-12 pl-4 pr-4">
          <h1 className="sm:text-5xl">Services</h1>
        </div>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default Service;
