"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <h1 className="text-lg font-bold text-gray-900 my-4">
        BECOME A NIKE MEMBER
      </h1>
      <p className="text-sm font-normal text-gray-500 my-2">
        Create your Nike Member profile and get first access to the very best of Nike products inspiration and community.
      </p>
    </header>
  );
};

const FormFields = () => {
  return (
    <div className="p-4 w-[380px] h-[850px] max-w-md mx-auto mb-8">
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
        <p className="text-xs text-gray-500">Get a Nike Member Reward every year on your Birthday.</p>
        <CountryDropdown />
        <GenderSelection />
        <TermsAndConditions />
        <p className="text-xs text-gray-500">
          By creating an account you agree to Nikes <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Use</a>.
        </p>
        <JoinButton />
      </form>
    </div>
  );
};

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <div
        className={`border p-4 cursor-pointer flex flex-col justify-center items-center ${selectedGender === 'Male' ? 'border-blue-500' : 'border-gray-300'}`}
        onClick={() => handleSelect('Male')}
        style={{ width: '153.89px', height: '40px' }}
      >
        <p className="text-center text-gray-500 font-inter font-normal text-sm leading-tight">Male</p>
      </div>
      <div
        className={`border p-4 cursor-pointer flex flex-col justify-center items-center ${selectedGender === 'Female' ? 'border-blue-500' : 'border-gray-300'}`}
        onClick={() => handleSelect('Female')}
        style={{ width: '153.89px', height: '40px' }}
      >
        <p className="text-center text-gray-500 font-inter font-normal text-sm leading-tight">Female</p>
      </div>
    </div>
  );
};

const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('India');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="relative inline-block w-full bg-white border border-gray-300 rounded">
      <select
        value={selectedCountry}
        onChange={handleChange}
        className="block appearance-none w-full bg-transparent px-4 py-2 pr-8 rounded leading-tight focus:outline-none text-gray-500"
      >
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <Image src="" alt="dropdown arrow" width={10} height={6} />
      </div>
    </div>
  );
};

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center pl-8 pr-10">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-5 h-5 mr-2"
      />
      <label className="text-xs text-gray-600">
        Sign up for emails to get updates from Nike on products offers and your Member benefits
      </label>
    </div>
  );
};

const JoinButton = () => {
  return (
    <button className="bg-black text-white py-2.5 border border-black rounded cursor-pointer text-sm font-normal w-full flex justify-center items-center">
      JOIN US
    </button>
  );
};

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-4">
      <p className="text-gray-600 text-center text-xs">
        Already a Member?{' '}
        <a href="/signin" className="text-black font-semibold">
          Sign in
        </a>
      </p>
    </footer>
  );
};

const Singnup = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Header />
      <FormFields />
      <Footer />
    </div>
  );
};

export default Singnup;
