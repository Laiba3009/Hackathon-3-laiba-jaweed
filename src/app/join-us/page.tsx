import React from 'react';    
import Link from "next/link"; // For navigation using Next.js Link component

const Page = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen px-4 md:px-8 lg:px-12">
      {/* Header */}
      <header className="text-center mt-2">  
        <h1 className="text-lg font-bold text-gray-900 my-2">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-sm font-normal text-gray-500 my-2">
          Create your Nike Member profile and get first access to the very best of Nike products inspiration and community.
        </p>
      </header>

      {/* Form for user input */}
      <form action="" className="flex flex-col w-full lg:w-96">
        
        {/* Email input field */}
        <input
          className="w-50 lg:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="email"
          placeholder="Email Address"
        />

        {/* Password input field */}
        <input
          className="w-50 lg:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="password"
          placeholder="Password"
        />

        {/* First Name input field */}
        <input
          className="w-50 lg:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="First Name"
        />

        {/* Last Name input field */}
        <input
          className="w-50 lg:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Last Name"
        />

        {/* Date of Birth input field */}
        <input
          className="w-50 lg:w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="date"
          placeholder="Date of Birth"
        />

        {/* Birthday reward message */}
        <p className='pb-3 text-text-secondary-gray text-sm text-center'>
          Get a Nike Member Reward every year on your Birthday.
        </p>

        {/* Country selection dropdown */}
        <select
          className="w-50 lg:w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px]"
          name="country"
          id="country"
        >
          <option className='text-text-secondary-gray' value="">Select Country</option>
          <option className='text-text-secondary-gray' value="IN">India</option>
          <option className='text-text-secondary-gray' value="US">United States</option>
          <option className='text-text-secondary-gray' value="UK">United Kingdom</option>
          <option className='text-text-secondary-gray' value="PK">Pakistan</option>
          <option className='text-text-secondary-gray' value="CA">Canada</option>
        </select>

        {/* Gender selection (using divs to visually mimic buttons) */}
        <div className='flex gap-5 mt-1'>
          {/* Male gender option */}
          <div className='border-[#E5E5E5] rounded-md py-4 border-[2px] w-2/4 text-center text-text-secondary-gray'>
            Male
          </div>

          {/* Female gender option */}
          <div className='border-[#E5E5E5] rounded-md py-4 border-[2px] w-2/4 text-center text-text-secondary-gray'>
            Female
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center pl-8 pr-10">
          <input
            type="checkbox"
            className="w-5 h-5 mr-2"
          />
          <label className="text-xs text-gray-600">
            Sign up for emails to get updates from Nike on products offers and your Member benefits.
          </label>
        </div>

        <p className="text-xs text-gray-500">
          By creating an account you agree to Nikes{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>.
        </p>

        {/* Custom Button as a <button> element */}
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800 transition duration-300"
        >
          JOIN US
        </button>

        {/* Link to existing member sign-in page */}
        <p className="text-center">
          <span className="text-text-secondary-gray">Already a Member? </span>
          <Link href="/signin">
            <span className="underline">Sign In</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
