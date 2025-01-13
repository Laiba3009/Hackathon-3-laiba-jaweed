"use client";
import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Filter options moved to a separate configuration
const filterOptions = [
  { id: "shoes", label: "Shoes" },
  { id: "sports-bras", label: "Sports Bras" },
  { id: "tops", label: "Tops & T-Shirts" },
  { id: "hoodies", label: "Hoodies & Sweatshirts" },
  { id: "jackets", label: "Jackets" },
  { id: "trousers", label: "Trousers & Tights" },
  { id: "shorts", label: "Shorts" },
  { id: "tracksuits", label: "Tracksuits" },
  { id: "jumpsuits", label: "Jumpsuits & Rompers" },
  { id: "skirts", label: "Skirts & Dresses" },
  { id: "socks", label: "Socks" },
  { id: "accessories", label: "Accessories & Equipment" },
];

const Page = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="grid grid-cols-12 px-4 md:px-10 py-20 relative">
      {/* Sidebar */}
      <div
        className={`col-span-3 pr-4 md:pr-20 bg-white z-10 transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static p-10 lg:p-0 w-full lg:w-60 fixed top-0 left-0 h-full overflow-y-auto transition-transform duration-500 ease-in-out`}
        aria-hidden={!isSidebarVisible}
      >
        {/* Close Button for Mobile */}
        <button
          className="block lg:hidden absolute top-4 right-4 text-lg"
          onClick={() => setIsSidebarVisible(false)}
          aria-label="Hide Sidebar"
        >
          ✕ Hide Filters
        </button>

        <h3 className="text-2xl">New (500)</h3>
        <ul className="mt-4">
          {filterOptions.map((option) => (
            <li key={option.id} className="leading-8 hover:underline">
              <Link href={`#${option.id}`}>{option.label}</Link>
            </li>
          ))}
        </ul>

        {/* Gender Filter */}
        <div className="my-10 border-t-2 pt-4">
          <div className="flex justify-between pb-4">
            <p>Gender</p>
           <FaChevronLeft/>
          </div>
          <div>
            <input type="checkbox" id="men" />
            <label className="pl-2 cursor-pointer" htmlFor="men">
              Men
            </label>
          </div>
          <div>
            <input type="checkbox" id="women" />
            <label className="pl-2 cursor-pointer" htmlFor="women">
              Women
            </label>
          </div>
          <div>
            <input type="checkbox" id="unisex" />
            <label className="pl-2 cursor-pointer" htmlFor="unisex">
              Unisex
            </label>
          </div>
        </div>

        {/* Price Filter */}
        <div className="my-10 border-t-2 pt-4">
          <div className="flex justify-between pb-4">
            <p>Shop By Price</p>
            <FaChevronRight />
          </div>
          <div>
            <input type="checkbox" id="under-2500" />
            <label className="pl-2 cursor-pointer" htmlFor="under-2500">
              Under ₹ 2,500.00
            </label>
          </div>
          <div>
            <input type="checkbox" id="2500-7500" />
            <label className="pl-2 cursor-pointer" htmlFor="2500-7500">
              ₹ 2,501.00 - ₹ 7,500.00
            </label>
          </div>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsSidebarVisible(false)}
          aria-hidden={!isSidebarVisible}
        ></div>
      )}

      {/* Main Content */}
      <div className="col-span-12 lg:col-span-9">
        <div className="flex justify-between lg:justify-end gap-10 mb-8">
          {/* Sidebar Toggle Buttons */}
          <button
            className="flex items-center lg:hidden"
            onClick={() => setIsSidebarVisible(true)}
            aria-label="Show Sidebar"
          >
            Show Filters{" "}
            
            {  /* 
             <Image
              className="ms-2"
              src={filterIcon}
              alt="Filter"
              loading="lazy"
            /> 
                */  }

          </button>
          <button
            className="hidden lg:flex"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            aria-label={isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
          >
            {isSidebarVisible ? "Hide Filters" : "Show Filters"}{" "}
            {  /* 

            <Image
              className="ms-2"
              src={filterIcon}
              alt="Filter"
              loading="lazy"
            />
                            */  }

          </button>

          {/* Sort By Button */}
          <div className="flex items-center">
            Sort By{" "}
           <FaChevronLeft />
          </div>
        </div>

        <ProductList />

        {/* Related Categories */}
        <div>
          <h3 className="mt-12 font-bold">Related Categories</h3>
          <ul className="flex gap-x-4 gap-y-2 flex-wrap mt-4">
            {[
              "Best Selling Products",
              "Best Shoes",
              "New Basketball Shoes",
              "New Football Shoes",
              "New Men's Shoes",
              "New Running Shoes",
              "Best Men's Shoes",
              "New Jordan Shoes",
              "Best Women's Shoes",
              "Best Training & Gym",
            ].map((category, index) => (
              <li
                key={index}
                className="border-[1px] rounded-full px-6 py-[0.5px] hover:bg-gray-100 focus:ring focus:ring-gray-300"
              >
                <Link href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;