// src/app/types/page.t

import { Image } from "sanity";

// 
 interface Product {
  _id: string;
  _type: "product";
  productName: string;
  description: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
      type: Image;
    };
  };
}
export default Product;
