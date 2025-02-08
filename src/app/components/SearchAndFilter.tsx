'use client';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';

interface Product {
  _id: string;
  productName: string;
  price: number;
  category: string;
  description: string;
  colors: string[];
  image: string;
  slug: {
    current: string;
  };
}

interface ProductFiltersProps {
  products: Product[];
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const categories = useMemo(() => {
    const allCategories = [...new Set(products.map(product => product.category))];
    return allCategories;
  }, [products]);

  const colors = useMemo(() => {
    const allColors = [...new Set(products.flatMap(product => product.colors))];
    return allColors;
  }, [products]);

  const filteredData = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesColor = selectedColor ? product.colors.includes(selectedColor) : true;
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

      return matchesCategory && matchesColor && matchesPrice;
    });
  }, [products, selectedCategory, selectedColor, minPrice, maxPrice]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Products Display</h2>

      {/* Filters Section */}
      <div className="mb-6">
        <div>
          <label htmlFor="category" className="block font-semibold mb-2">Category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="color" className="block font-semibold mb-2">Color</label>
          <div className="flex flex-wrap gap-2">
            {colors.map(color => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-indigo-500' : 'border-gray-300'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-semibold mb-2">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              placeholder="Min Price"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              placeholder="Max Price"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedData.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <Link href={`/product/${product.slug.current}`}>
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
              ) : (
                <p className="text-center text-gray-500">No image available</p>
              )}
            </Link>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{product.productName}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
              <strong className="text-xl text-red-600">${product.price}</strong>
              <button className="text-blue-700 px-4 py-2 rounded-md">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;
