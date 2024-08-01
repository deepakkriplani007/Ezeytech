import React from "react";
import devops from "../assets/devops2.svg";
import aws from "../assets/aws.svg";
import dol from "../assets/dol.svg";
import leaf from "../assets/leaf.svg";
import express from "../assets/express.svg";
import flutter from "../assets/flutter.svg";
import fre from "../assets/fre.svg";
import google from "../assets/googlecloud.svg";
import node from "../assets/node.svg";
import php from "../assets/php.svg";
import react from "../assets/react.svg";

const Services = () => {
  return (
    <>
      <div className="p-4 sm:pl-16 grid-cols-2  min-[500px]:grid-cols-3 grid sm:grid-cols-4 md:grid-cols-5 gap-4 pb-32">
        <div className="">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)] "
            src={devops}
            alt="Image 1"
          />
        </div>
        <div className="">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]"
            src={aws}
            alt="Image 2"
          />
        </div>
        <div className="">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]"
            src={express}
            alt="Image 3"
          />
        </div>
        <div className="">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]"
            src={leaf}
            alt="Image 4"
          />
        </div>
        <div className="">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]"
            src={dol}
            alt="Image 5"
          />
        </div>
        <div className="">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]"
            src={fre}
            alt="Image 6"
          />
        </div>
        <div className="">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]"
            src={flutter}
            alt="Image 7"
          />
        </div>
        <div className="">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]"
            src={google}
            alt="Image 8"
          />
        </div>
        <div className="">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]"
            src={node}
            alt="Image 9"
          />
        </div>
        <div className="">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]"
            src={php}
            alt="Image 10"
          />
        </div>
        <div className="md:col-span-5 flex justify-center">
          <img
            className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]"
            src={react}
            alt="Image 11"
          />
        </div>
      </div>
    </>
  );
};

export default Services;

//   <div className="flex justify-center font-semibold sm:pt-[10vh] pt-10 pl-4 pr-4">
//     <h1 className="max-sm:text-xl">Our Technology Expertise</h1>
//   </div>
//   <div className="flex gap-8 justify-between  sm:pt-[8vh] pt-12 flex-wrap pl-4 pr-4">
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={devops} alt="" />
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={aws} alt="" />
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={dol} alt="" />
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={leaf} alt="" />
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={express} alt="" />
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={flutter} alt="" />
//   </div>
//   <div className="sm:pl-[16vh] pl-4 pr-4 flex flex-wrap gap-8 justify-between sm:pr-[16vh] pt-[8vh] pb-20">
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={fre} alt="" />
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={google} alt="" />
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={node} alt="" />
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={php} alt="" />
//     <img className="w-28 h-28 md:w-32 md:h-32 drop-shadow-[1px_2px_5px_rgba(0,0,0,0.65)]" src={react} alt="" />
//   </div>
