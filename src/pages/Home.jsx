import React from "react";
import Navbar from "../components/Navbar";
import TypingAnim from "../components/TypingAnim";
import Product from "../components/Product";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="text-4xl">
      <div className="fixed top-0 w-full z-40 ">
        <Navbar />
      </div>
      <TypingAnim />
      <Product />
      <div>
        <div className="flex justify-center font-semibold sm:pt-[10vh] pt-10 pb-12 pl-4 pr-4">
          <h1 className="max-sm:text-xl">Our Technology Expertise</h1>
        </div>
        <Services />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
