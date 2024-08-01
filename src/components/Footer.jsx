import React from "react";

const Footer = () => {
  return (
    <div id="footer" className=" bg-gray-50 pt-16">
      <div className="flex max-md:flex-col gap-5 justify-between pl-16 pr-16 max-md:items-center max-md:pl-4 max-md:pr-4">
        <div className="w-1/3 max-md:w-full max-md:text-center max-md:mb-4">
          <h1 className="text-4xl">
            <span className="text-[#1c2bc9]">EZEY</span>{" "}
            <span className="text-[#f7990c]">TECH</span>
          </h1>
          <div className="text-xl">
            EZEY TECH works with the latest technologies and providing the best
            solution for clients in the field of frontend backend mobile
            development and devops.
          </div>
        </div>
        <div className="max-md:text-center max-md:w-full max-md:mb-4">
          <div className="text-[#183c57] text-3xl">Services</div>
          <div className="text-[#183c57] text-xl">Web Development</div>
          <div className="text-[#2f5169] text-xl">Mobile Apps</div>
          <div className="text-[#2f5169] text-xl">Payment Integration</div>
          <div className="text-[#2f5169] text-xl">DevOps & Cloud</div>
          <div className="text-[#2f5169] text-xl">Hosting Solution</div>
        </div>
        <div className="max-md:text-center max-md:w-full">
          <div className="text-[#183c57] text-3xl">Capabilities</div>
          <div className="text-[#2f5169] text-xl">Front-end Engineering</div>
          <div className="text-[#2f5169] text-xl">
            Cloud and DevOps Engineering
          </div>
          <div className="text-[#2f5169] text-xl">Web Framework</div>
          <div className="text-[#2f5169] text-xl">Database</div>
          <div className="text-[#2f5169] text-xl">Machine Learning</div>
        </div>
      </div>

      <div className="mx-24 mt-16 flex justify-around items-center pb-2 border-t text-[#183c57] border-t-[#183c57]"></div>
      <div className="flex justify-around items-center text-lg">
        Copyright © 2024 Ezeytech
      </div>
    </div>
  );
};

export default Footer;
