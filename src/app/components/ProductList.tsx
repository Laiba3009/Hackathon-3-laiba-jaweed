import React from 'react';
// Import the data from the 'data' file, which contains the list of products
import { nikeProducts } from './Cards/datas'; 

// Import the Card component that will be used to display each product
import Card from './Cards/Card';

// ProductList component to display the list of Nike products
const ProductList = () => {
  return (
    // A grid layout that displays the products. The number of columns changes based on the screen size.
    // On small screens, it will display 1 column, 3 columns on medium screens, and 3 columns on large screens.
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pb-10 border-b-2">
      {
        // Mapping through the nikeProducts array and rendering a Card component for each product
        nikeProducts.map((product) => (
          // Each Card component needs a unique key prop, which is set to the product's ID
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
