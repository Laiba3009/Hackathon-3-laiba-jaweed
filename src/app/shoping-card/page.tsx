import React from 'react';

// Interface for ProductCard Props
interface ProductCardProps {
  imageId: string;
  name: string;
  description: string;
  size: string;
  quantity: number;
  price: string;
}

// ProductCard Component
const ProductCard: React.FC<ProductCardProps> = ({ imageId, name, description, size, quantity, price }) => {
  return (
    <div className="flex flex-col md:flex-row border p-6 w-full md:w-[717px] bg-white">
      {/* Product Image Section */}
      <div className="w-full md:w-[120px] h-[120px] mb-4 md:mb-0 md:mr-6 flex justify-center items-center">
        <img
          src={imageId} // Replace with actual image URL if needed
          alt={name}
          className="w-full h-auto object-contain max-h-[120px] max-w-[120px]"
        />
      </div>

      {/* Product Info Section */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-start flex-wrap">
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <h2 className="m-0 text-[15px] font-medium leading-[28px] text-[#111]">{name}</h2>
            <p className="m-0 text-[13px] leading-[24px] text-gray-700">{description}</p>
            <p className="m-0 text-[13px] leading-[24px] text-gray-700">Ashen Slate/Cobalt Bliss</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] text-gray-700">Size</span>
                <div className="w-[67px] h-[28px] bg-white flex items-center justify-center">
                  <span className="text-[12px] text-gray-700">{size}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] text-gray-700">Quantity</span>
                <div className="w-[58px] h-[28px] bg-white flex items-center justify-center">
                  <span className="text-[12px] text-gray-700">{quantity}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <span className="text-[13px] font-normal leading-[28px] text-[#111] w-full md:w-auto text-right md:text-left mt-4 md:mt-0">{price}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="w-6 h-6 border-none cursor-pointer bg-gray-200 rounded-full">+</button>
          <button className="w-6 h-6 border-none cursor-pointer bg-gray-200 rounded-full">-</button>
        </div>
      </div>
    </div>
  );
};

// Summary Section Component
const SummarySection: React.FC = () => {
  return (
    <div className="bg-white text-[#111111] p-4 rounded-md w-full md:w-[350.67px]">
      <h2 className="text-[21px] font-medium leading-[33px] mb-4">Summary</h2>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[15px] leading-[28px]">Subtotal</span>
        <div className="flex items-center">
          <div className="bg-white w-3 h-7 mr-2"></div>
          <span className="text-[14px] leading-[28px]">₹ 20,890.00</span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[15px] leading-[28px]">Estimated Delivery & Handling</span>
        <span className="text-[15px] leading-[28px]">Free</span>
      </div>
      <hr className="border-t border-[#e5e5e5] mb-2" />
      <div className="flex justify-between items-center mb-4">
        <span className="text-[14px] leading-[28px]">Total</span>
        <span className="text-[14px] leading-[28px]">₹ 20,890.00</span>
      </div>
      <button className="bg-black text-white py-2 px-4 rounded-full w-full font-medium text-[15px] leading-[24px]">
        Member Checkout
      </button>
    </div>
  );
};

// Free Delivery Banner Component
const FreeDeliveryBanner = () => {
  return (
    <div className="flex justify-between items-center p-3.5 bg-white font-inter text-[13px] text-[#111] tracking-[0.5px] leading-[14px]">
      <div className="flex flex-col gap-1">
        <strong className="font-medium">Free Delivery</strong>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] leading-[24px]">Applies to orders of ₹ 14,000.00 or more.</span>
          <a href="#" className="text-[11px] underline text-[#111] leading-[24px]">View details</a>
        </div>
      </div>
    </div>
  );
};

// ShoppingCart Component
const ShoppingCart: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 bg-gray-50 text-black p-5">
      <FreeDeliveryBanner />
      <h1 className="text-2xl font-bold mb-5">Bag</h1>
      <ProductCard
        imageId="/images/products/product-38.png"
        name="Nike Dri-FIT ADV TechKnit Ultra"
        description="Men's Short-Sleeve Running Top"
        size="L"
        quantity={1}
        price="MRP: ₹ 3 895.00"
      />
      <hr className="border border-[#e5e5e5] my-5" />
      <ProductCard
        imageId="/images/products/product-67.png"
        name="Nike Air Max 97 SE"
        description="Men's Shoes"
        size="8"
        quantity={1}
        price="MRP: ₹ 16 995.00"
      />
      <SummarySection />
    </div>
  );
};

export default ShoppingCart;
