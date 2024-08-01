import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-40">
        <Navbar />
      </div>
      <div className="pt-24 flex max-[550px]:flex-col gap-8 items-center pl-12 pr-12 pb-16">
        <div className="bg-[#010936] text-white mr-6 h-full px-4 py-8 rounded-lg">
          <h2 className="text-2xl font-semibold">Our Address</h2>
          <div className="text-lg font-normal">
            p-95, H.No 45, New Delhi 110030
          </div>
          <div className="pt-2">
            <span>Email us</span>
            <span className="flex items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              ezeytech@gmail.com{" "}
            </span>
          </div>
          <div className="pt-2">
            <span>Quick Call </span>
            <span className="flex items-center pt-2 gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
              </svg>
              999999999
            </span>
          </div>
        </div>
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
