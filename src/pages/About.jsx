import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-40">
        <Navbar />
      </div>
      <div className="pt-24 flex flex-col items-center pl-12 pr-12 bg-gray-50 pb-16">
        <h1 className="text-5xl font-bold text-[#183c57]">About Us </h1>
        <div className="text-2xl pt-2 text-[#2f5169]">
          Ezey Tech puts together a bunch of passionate minds to transform your
          visions into reality imparting an awesome digital experience for your
          users. From website design, development, scalable mobile apps to
          Devops platforms, the solution we engineer accelerate efficiency and
          fuel growth for our clients.
        </div>
      </div>
      <div className="flex  max-sm:flex-col justify-between pl-12 pr-12 pt-12 gap-5 pb-16 ">
        <div className="sm:w-1/2 sm:pr-6">
          <h1 className="text-3xl  text-[#183c57]  font-semibold">
            Who we are
          </h1>
          <div className="text-xl text-[#2f5169]">
            ezeyTech is not just an entity; it's a family that embodies
            togetherness. For us, success means transforming innovative ideas
            into reality through our tech expertise. This is how we, as a team,
            want to be remembered. <br />
            Our vision has propelled ezeyTech to become a leading IT company in
            India, delivering a variety of industry-driven mobility solutions.
            Our goal is to empower clients and businesses by creating new
            possibilities with the technologies of today and tomorrow, ensuring
            the highest quality, satisfaction, and transparency.
          </div>
        </div>

        <div className="sm:w-1/2 sm:pl-6">
          <h1 className="text-3xl text-[#183c57] font-semibold">What we do</h1>
          <div className="text-xl text-[#2f5169]">
            Our enthusiasm has propelled us to become a leading IT company in
            India, delivering industry-driven mobility solutions in web and
            mobile application development. We leverage cutting-edge
            technologies like DevOps and Cloud computing. <br />
            We are empowered by our certified tech experts who continuously
            challenge themselves to assist our global clientele with a wide
            range of IT services and solutions. Engaging with our team ensures
            our clients save substantial money on project development while
            enjoying faster delivery.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
