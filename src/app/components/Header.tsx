"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {  FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <div className="bg-[#F5F5F5] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
          <Image
            src="/assests/logo2.svg"
            alt={'logo'}
            width={24}
            height={24}
            className="w-[24px] h-[24px]"
          />

          {/* Right side links for large screens */}
          <div className="hidden md:flex md:gap-4 sm:gap-3 gap-2">
            <Link href="#" className="hover:text-gray-800">Find Link Store</Link>
            <Link href="/contact-us" className="hover:text-gray-800">Help</Link>
            <Link href="/join-us" className="hover:text-gray-800">Join Us</Link>
            <Link href="/login" className="hover:text-gray-800">Sign In</Link>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex flex-wrap justify-between items-center px-6 py-4">
          {/* Left section (Logo) */}
          <div className="flex items-center">
            <Image
              src="/assests/nike.png"
              alt="Nike Logo"
              className="md:w-[78px] sm:w-[60px] w-[30px]"
              width={30}
              height={30}
            />
          </div>

          {/* Center section (Navigation Links) for large screens */}
          <nav className="hidden md:flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px]">
            <Link href="/hero" className="hover:text-black whitespace-nowrap">Home</Link>
            <Link href="#" className="hover:text-black whitespace-nowrap">New Featured</Link>
            <Link href="/all-products" className="hover:text-black whitespace-nowrap">Men</Link>
            <Link href="/all-products" className="hover:text-black whitespace-nowrap">Women</Link>
            <Link href="/all-products" className="hover:text-black whitespace-nowrap">Kids</Link>
            <Link href="/all-products" className="hover:text-black whitespace-nowrap">Sale</Link>
            <Link href="/all-products" className="hover:text-black whitespace-nowrap">SNKRS</Link>
          </nav>

          {/* Right section (Search, Wishlist, Cart) */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
              />
              <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
            </div>
            <FaRegHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
            <Link href="/checkout" className="hover:text-gray-800">
              <BiShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="block md:hidden px-6 mt-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Mobile Menu Button - Positioned at the top-right of the header */}
      <div
        className="md:hidden block text-3xl text-black cursor-pointer absolute right-5 top-4 z-10"
        onClick={toggleMenu}
      >
        <IoMenu className="md:hidden block text-3xl text-black cursor-pointer absolute right-5 top-4 z-10"
 />
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className={`bg-white w-3/4 h-full p-6 transition-transform duration-300 ease-in-out transform overflow-y-scroll ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Cross Icon - Positioned at the top right of the sidebar */}
          <div className="flex justify-end items-center">
            <Link href="#" onClick={toggleMenu}>
              <RxCross1 className="text-x lflex justify-end items-center"/>
            </Link>
          </div>

          {/* Search Bar inside the Sidebar */}
          <div className="flex px-4 py-3 mt-6 rounded-full w-[96%] bg-light-gray">
            <FaSearch />
            <input
              className="pl-4 focus-visible:outline-none w-[64%] bg-light-gray"
              type="text"
              placeholder="Search"
            />
          </div>

          {/* Sidebar Links */}
          <ul className="space-y-6 mt-6">
            <li><Link href="/all-products" onClick={toggleMenu}>New & Featured</Link></li>
            <li><Link href="/all-products" onClick={toggleMenu}>Men</Link></li>
            <li><Link href="/all-products" onClick={toggleMenu}>Women</Link></li>
            <li><Link href="/all-products" onClick={toggleMenu}>Kids</Link></li>
            <li><Link href="/all-products" onClick={toggleMenu}>Sale</Link></li>
            <li><Link href="/all-products" onClick={toggleMenu}>SNKRS</Link></li>
            <li className="border-t-2 pt-6">
              <Link href="#" onClick={toggleMenu}>Find a Store</Link>
            </li>
            <li><Link href="/contact-us" onClick={toggleMenu}>Help</Link></li>
            <li><Link href="/join-us" onClick={toggleMenu}>Join Us</Link></li>
            <li><Link href="/login" onClick={toggleMenu}>Sign In</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
