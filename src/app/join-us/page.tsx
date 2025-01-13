import React from 'react';
import Image from "next/image"; // Next.js component for optimized image handling
import Link from "next/link"; // For navigation using Next.js Link component

const page = () => {
  return (
    // Container for the page content, flexbox for centering and padding
    <div className="flex flex-col items-center py-10 px-10 md:px-0">
      {/* Logo Image */}
      <Image className="pb-5" src={"/assests/nike.png"} width={40} height={10} alt="Logo" />

      {/* Heading for the page */}
      <h2 className="uppercase text-center font-bold pb-5">
        BECOME A NIKE MEMBER
      </h2>

      {/* Description Text */}
      <p className='w-80 text-center text-text-secondary-gray pb-5'>
        Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
      </p>

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
          className="w-50 lg:w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          name="country"
          id="country"
        >
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

        {/* Newsletter checkbox for signing up */}
        <div className="flex justify-between items-center py-7">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 pl-2 cursor-pointer text-text-secondary-gray" htmlFor="remember">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
            </label>
          </div>
        </div>

        {/* Terms and Conditions section */}
        <p className="text-text-secondary-gray text-center pb-6">
          By creating an account, you agree to Nike's{" "}
          <Link className="underline" href="#">Privacy Policy</Link> and{" "}
          <Link className="underline" href="#">Terms of Use</Link>.
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
          <span className="underline">Join Us.</span>
        </p>
      </form>
    </div>
  );
};

export default page;
