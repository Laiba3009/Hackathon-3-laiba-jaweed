export interface Product {
  _id: string;
  _type: 'product';
  productName: string;
  image?: {
    _type: 'image';
    src: string;
    alt: string;
    asset: {
      _type: 'reference';
      url: string;
      src: string;
      alt: string;
      _ref: string;
      };
  };
  price: number;
  originalPrice: number;
  description: string;
  tags: string[];
  sizes: string[];
  stock_quantity: number;
  inventory: number;
  colors: string[];
  category: string;
  slug: {
    _type: 'slug';
    current: string;
  
  };
  quantity: number; // Assuming this is used for tracking quantity in the cart
}
