import Image from "next/image"; // Importing the Next.js Image component for optimized image loading.
import Link from "next/link"; // Importing the Next.js Link component for client-side navigation.
import React from "react"; // Importing React to use React components.

type Product = {
  id: number; // Unique identifier for the product.
  tags: string; // Tags associated with the product (e.g., category or label).
  title: string; // The title or name of the product.
  description: string; // A brief description of the product.
  color: string; // The color of the product.
  price: string; // The price of the product.
  imagesUrls: string; // URL of the product's image.
};

// Card component to display individual product information.
const Card: React.FC<Product> = ({
  id,
  tags,
  title,
  description,
  color,
  price,
  imagesUrls,
}) => {
  return (
    <div className="mb-6 md:mb-6 m-auto md:m-0 px-2 focus-visible:outline-none">
      {/* Link component wraps the entire card to navigate to the product's detail page. */}
      <Link href={`/all-products/${id}`}>
        {/* Image component displays the product image with specified width and height. */}
        <Image 
          className="focus-visible:outline-none" 
          src={imagesUrls} 
          alt={title} 
          width={300} 
          height={300} 
        />

        {/* Container for product details like tags, title, description, and color. */}
        <div className="py-4 focus-visible:outline-none">
          <h4 className="text-[#9E3500]">{tags}</h4> {/* Product tags displayed in a specific color. */}
          <h2 className="font-semibold">{title}</h2> {/* Product title in bold font. */}
          <p className="text-text-secondary-gray">{description}</p> {/* Product description in secondary gray color. */}
          <p className="text-text-secondary-gray">{color}</p> {/* Product color in secondary gray color. */}
        </div>

        {/* Displaying the product price in bold font. */}
        <h3 className="font-semibold focus-visible:outline-none">{price}</h3>
      </Link>
    </div>
  );
};

export default Card; // Exporting the Card component for use in other parts of the application.
