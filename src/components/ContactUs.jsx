import React from "react";
import Form from "./Form";

const ContactUs = () => {
  return (
    <>
      <div id="footer" className=" bg-[#162242] py-12">
        <div className=" px-24 gap-4 max-md:flex-col flex justify-around items-center py-8">
          <div className="">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
