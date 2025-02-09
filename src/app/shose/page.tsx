'use client';
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '../sanity/lib/client';
import Swal from 'sweetalert2';
import { Product } from '../types/product';
import addToCart from '../actions/actions';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filters and Pagination State
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6; // Adjusted to show 6 products per page

  // Fetch products
  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"]{
         _id,
        productName,
        description,
        category,
        price,
        inventory,
        colors,
        status,
        slug {
          current
        },
        image {
          asset->{
            url
          }
        }
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      setError('Failed to load products.');
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filtering Logic
  const filteredData = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      return matchesCategory;
    });
  }, [products, selectedCategory]);

  // Pagination Logic
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

  const categories = useMemo(() => {
    const allCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    return allCategories;
  }, [products]);

  // Handle Add to Cart
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
   addToCart(product); // Correctly using addToCart function
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Products Display
      </h2>

      {loading ? (
        <div className="text-center text-lg text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-lg text-red-600">{error}</div>
      ) : (
        <>
          {/* Filters Section */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div className="w-auto">
              <label htmlFor="category" className="block font-semibold mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-[200px] p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {paginatedData.map((product) => (
              <div
                key={product._id}
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                {product.slug?.current ? (
                  <Link href={`/product/${product.slug.current}`}>
                    {product.image?.asset?.url ? (
                      <Image
                        src={product.image.asset.url || '/fallback-image.jpg'} // Fallback image
                        alt={`Image of ${product.productName}`}
                        width={500} // Adjusted width for larger images
                        height={500} // Adjusted height for larger images
                        className="w-full h-64 object-contain rounded-md mb-4" // Using object-contain instead of object-cover
                      />
                    ) : (
                      <p className="text-center text-gray-500">
                        No image available
                      </p>
                    )}
                  </Link>
                ) : (
                  <p className="text-center text-gray-500">No slug available</p>
                )}

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.slug?.current ? (
                    <Link href={`/product/${product.slug.current}`}>
                      {product.productName}
                    </Link>
                  ) : (
                    <span>{product.productName}</span>
                  )}
                </h3>
                <span className="inline-block text-gray-500 text-xs mb-2">
                  {product.category}
                </span>
                <div className="flex justify-between items-center mt-4">
                  <strong className="text-xl text-red-600">
                    ${product.price}
                  </strong>
                  <button
                    onClick={(e) => handleAddToCart(e, product)} // Add to cart action
                    className="text-white bg-black px-4 py-2 rounded-md transition-colors"
                  >
                    Add to Cart
                  </button>
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
            <span className="text-lg">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
