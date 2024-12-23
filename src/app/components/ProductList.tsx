import React from 'react';
import { nikeProducts } from './Cards/data'; 

import Card from './Cards/Cards';

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pb-10 border-b-1">
      {
        nikeProducts.map((product) => (
          <Card
            key={product.id}               // Unique identifier for each card
            id={product.id}                // Passing the product's id to the Card component
            tags={product.tags}            // Passing the tags for the product to the Card
            title={product.title}          // Passing the title of the product to the Card
            description={product.description} // Passing the description to the Card
            color={product.color}          // Passing the color to the Card
            price={product.price}          // Passing the price of the product
            imagesUrls={product.imagesUrls} // Passing the array of image URLs to the Card
          />
        ))
      }
    </div>
  );
};

export default ProductList;  // Export the ProductList component for use in other parts of the application
