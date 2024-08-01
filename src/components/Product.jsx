import React from "react";
import "./Card.css";
import front from "../assets/front.svg";
import backend from "../assets/backend.svg";
import mobiledev from "../assets/mobiledev.svg";
import devops from "../assets/devops.svg";

const Product = () => {
  return (
    <>
      <div className="bg-[#010936] pt-16 pb-16">
        <div className="flex flex-col">
          <h1 className="sm:text-4xl text-3xl text-white pb-6 sm:pb-4 self-center">
            What we do?
          </h1>
          <div className="text-white pl-[10vh] pr-[10vh] sm:text-2xl text-lg sm:text-center ">
            ezeyTech provides expert Product/Project Freelancing Services
            globally, specializing in DevOps & Cloud, Backend, Frontend, App
            Development, and Salesforce. Our certified professionals offer
            tailored, affordable solutions for development, online training, and
            job support, ensuring reliable and top-notch service to elevate your
            projects.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 min-[1310px]:grid-cols-4 pt-16 gap-8">
          <div className="flex flex-col items-center">
            <div className="card w-[42vh]">
              <img
                src={front}
                className="z-10 w-72 h-48 p-2"
                alt="Frontend Development"
              />
            </div>
            <div className="text-white self-center text-wrap text-center">
              Frontend Development
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="card w-[42vh]">
              <img
                src={backend}
                className="z-10 w-72 h-48"
                alt="Backend Development"
              />
            </div>
            <div className="text-white self-center text-wrap text-center">
              Backend Development
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="card w-[42vh]">
              <img
                src={mobiledev}
                className="z-10 w-72 h-48 p-2"
                alt="Mobile App Development"
              />
            </div>
            <div className="text-white self-center text-wrap text-center">
              Mobile App Development
            </div>
          </div>
          <div className="flex flex-col items-center custom-col-span">
            <div className="card w-[42vh]">
              <img
                src={devops}
                className="z-10 w-72 h-48 p-2"
                alt="DevOps & Cloud Engineering"
              />
            </div>
            <div className="text-white self-center text-wrap text-center w-[42vh]">
              DevOps & Cloud Engineering
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
// className =
//   "flex min-[400px]:pl-16 pb-8 gap-5 pt-16 pr-16 h-68 justify-between flex-wrap  max-md:flex-col max-md:items-center";
