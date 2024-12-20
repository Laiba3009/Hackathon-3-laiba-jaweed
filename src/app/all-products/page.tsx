"use client";
import ProductList from "../components/ProductList";
import Link from "next/link";

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

      const Page = ()=>{  
  return (
        <div>
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

      
  )
};

export default Page;
