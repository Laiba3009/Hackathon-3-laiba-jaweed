'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '@/app/sanity/lib/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import { Product } from '../../types/product';
import addToCart from '@/app/actions/actions';
import Swal from 'sweetalert2';

async function fetchProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      description,
      "image": image.asset->url,
      category,
      price,
      inventory,
      colors,
      status
    }`,
    { slug }
  );
}

const ProductPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');

  useEffect(() => {
    async function getSlug() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    }
    getSlug();
  }, [params]);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        try {
          const fetchedProduct = await fetchProduct(slug);
          setProduct(fetchedProduct);
        } catch (error) {
          console.error('Error fetching product data', error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const imageUrl = typeof product?.image === 'string' ? product.image : '/fallback-image.jpg'; // Ensure imageUrl is a string

  // Log the image URL for debugging
  console.log("Image URL: ", imageUrl);

  // Handle Add to Cart
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    if (product.inventory === 0) {
      Swal.fire({
        position: 'top-right',
        icon: 'error',
        title: 'Out of stock!',
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        title: `${product.productName} added to cart`,
        showConfirmButton: false,
        timer: 1000,
      });
      addToCart(product); // Correctly using addToCart function
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Product Image Section */}
        <div className="sm:w-1/2 w-full">
          <Image
            src={imageUrl} // Use the fallback image if URL is not available
            alt={product.productName}
            width={600}
            height={450}
            className="w-[600px] h-[450px] object-cover rounded-lg shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/fallback-image.jpg'; // Fallback logic if the image fails to load
            }}
          />
        </div>

        {/* Product Info Section */}
        <div className="sm:w-1/2 w-full sm:pl-6">
          <h1 className="text-3xl font-semibold mb-4">{product.productName}</h1>
          <p className="text-lg mb-4">{product.description || 'No description available.'}</p>
          <p className="text-xl text-black font-bold mb-4">PKR</p>
          <p className="text-xl text-red-600 font-bold mb-4">${product.price}</p>
          <p className="mt-2 text-sm text-gray-500">
            Category: {product.category || 'Not specified'}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Inventory: {product.inventory || 'Out of stock'}
          </p>

          {/* Color Selection Section */}
          <div className="mt-4">
            <p className="font-semibold">Choose Color</p>
            <div className="flex gap-2 mt-2">
              {product.colors && product.colors.length > 0 ? (
                product.colors.map((color: string) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-indigo-500' : 'border-gray-300'}`}
                    style={{ backgroundColor: color }}
                  />
                ))
              ) : (
                <p>No colors available.</p>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Link href="/cart">
            <button
              onClick={(e) => handleAddToCart(e, product)}
              className="mt-6 w-full sm:w-auto text-white bg-black px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              disabled={product.inventory === 0} // Disable the button if out of stock
            >
              {product.inventory === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
