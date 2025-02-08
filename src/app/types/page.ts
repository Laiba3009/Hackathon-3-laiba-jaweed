export interface Product {
  _id: string;         // Unique identifier for the product
  _type: "product";    // Type of the document (fixed value for products)
  productName: string; // Name of the product
  description?: string; // Optional description of the product (can be empty)
  category: string;    // Product category (e.g., electronics, clothing)
  price: number;       // Price of the product
  inventory: number;   // Inventory count
  colors: string[];    // Available colors for the product
  status: string;      // Status of the product (e.g., in stock, out of stock)
  slug: {
    current: string;   // Slug for the product (URL-friendly version)
  };
  image: {
    asset: {
      url: string;    // URL of the product image
      type: string;   // Type of the image (e.g., 'image/jpeg')
    };
  };
}

