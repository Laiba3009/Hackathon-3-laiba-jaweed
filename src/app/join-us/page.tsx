"use client";
import React from "react";

const JoinUs = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen px-4 md:px-8 lg:px-12">
      {/* Header */}
      <header className="text-center mt-2">
        <h1 className="text-lg font-bold text-gray-900 my-2">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-sm font-normal text-gray-500 my-2">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>
      </header>

      {/* Form Fields */}
      <div className="p-4 w-full max-w-md mx-auto flex-1">
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <p className="text-xs text-gray-500">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          {/* Country Dropdown */}
          <div className="relative inline-block w-full bg-white border border-gray-300 rounded">
            <select className="block appearance-none w-full bg-transparent rounded leading-tight focus:outline-none text-gray-500">
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          {/* Gender Selection */}
          <div className="flex justify-center items-center space-x-4">
            <div className="border p-4 cursor-pointer flex flex-col justify-center items-center border-gray-300" style={{ width: "153.89px", height: "40px" }}>
              <p className="text-center text-gray-500 font-inter font-normal text-sm leading-tight">Male</p>
            </div>
            <div className="border p-4 cursor-pointer flex flex-col justify-center items-center border-gray-300" style={{ width: "153.89px", height: "40px" }}>
              <p className="text-center text-gray-500 font-inter font-normal text-sm leading-tight">Female</p>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center pl-8 pr-10">
            <input
              type="checkbox"
              className="w-5 h-5 mr-2"
            />
            <label className="text-xs text-gray-600">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </label>
          </div>

          <p className="text-xs text-gray-500">
            By creating an account you agree to Nike's{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>.
          </p>

          {/* Join Button */}
          <button className="bg-black text-white py-2.5 border border-black rounded cursor-pointer text-sm font-normal w-full flex justify-center items-center">
            JOIN US
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="flex justify-center items-center py-4 mb-2">
        <p className="text-gray-600 text-center text-xs">
          Already a Member?{" "}
          <a href="/signin" className="text-black font-semibold">
            Sign in
          </a>
        </p>
      </footer>
    </div>
  );
};

export default JoinUs;
