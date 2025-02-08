import Image from "next/image";
import { nikeProducts } from "@/app/components/Cards/data"; // Importing the Nike products data
import Link from "next/link"; // Importing Link component for client-side navigation

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // Extracting the product ID from the URL parameters

  // Finding the product from the nikeProducts data based on the given ID
  const product = nikeProducts.find((item) => item.id === Number(id));

  // If the product is not found, display a fallback message
  if (!product) {
    return <p>Product not found!</p>;
  }

  // Render the product details page
  return (
    <div className="grid grid-cols-12 px-8 md:px-20 my-16 md:my-16 gap-0 md:gap-10">
      {/* Left Section: Product Image */}
      <div className="col-span-12 md:col-span-6">
       <Image 
                src={product.imagesUrls} 
                alt={product.title} 
                width={500} 
                height={500} 
              />
      </div>

      {/* Right Section: Product Details */}
      <div className="col-span-12 md:col-span-6 pr-18 pt-10 md:pt-0">
        {/* Product Title */}
        <h2 className="text-3xl">{product.title}</h2>

        {/* Product Description */}
        <p className="py-10">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid.
          Its inside out-inspired construction including unique layering and
          exposed foam accents ups the ante on this timeless Jordan Brand
          silhouette. Details like the deco stitching on the Swoosh add coveted
          appeal while the unexpected shading rich mixture of materials and
          aged midsole aesthetic give this release an artisan finish.
        </p> 

        {/* Product Price */}
        <h3>{product.price}</h3>

        {/* Add to Cart Button */}
        <div className="flex mt-6">
          <Link href="/shoping-card">
            {" "}
            {/* Link to the cart page */}
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Add to Card
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
