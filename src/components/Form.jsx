import React from "react";

const Form = () => {
  return (
    <div className="w-screen sm:w-full  bg-[#f79d16] rounded-lg shadow-md p-6   ">
      <h2 className="text-xl sm:text-3xl font-semibold sm:font-bold text-gray-800 mb-4">
        Talk To US
      </h2>
      <div className="flex flex-col">
        <input
          type="text"
          className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Full Name"
        />
        <input
          type="email"
          className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Email"
        />
        <input
          type="number"
          className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Phone Number"
        />

        <textarea
          name="message"
          className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Message"
        ></textarea>
        <button className="bg-[#1c3cc9] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#1c2bc9cb] transition ease-in-out duration-150">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
