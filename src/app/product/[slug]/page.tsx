'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '@/app/sanity/lib/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import { Product } from '../../types/product';

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
          // Removed console.error statement
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const imageUrl = product?.image?.asset?.url || '';

  const handleAddToCart = () => {
    // Removed console.log statement
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product.productName}
              width={400}
              height={400}
              className="w-full h-[400] object-cover rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full h-96 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
              No Image Available
            </div>
          )}
        </div>

        <div className="sm:w-1/2 sm:pl-6">
          <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl text-black font-bold mb-4"> PKR</p>
          <p className="text-xl text-red-600 font-bold mb-4">
            ${product.price}{' '}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Category: {product.category}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Inventory: {product.inventory}
          </p>

          <div className="mt-4">
            <p className="font-semibold">Choose Color</p>
            <div className="flex gap-2 mt-2">
              {product.colors.map((color: string) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-indigo-500' : 'border-gray-300'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-700 transition"
          >
            Add to Cart
          </button>

          <Link href="/cart">
            <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
