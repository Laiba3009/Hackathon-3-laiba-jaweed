"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const OrderPage = () => {
  const [pan, setPan] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex justify-between p-8 bg-gray-100">
      <div className="w-1/2">
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4 text-gray-900">How would you like to get your order?</h2>
          <p className="text-sm mb-4 text-gray-600">
            Customs regulation for India require a copy of the recipient’s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <a href="#" className="text-blue-600">Learn More</a>
          </p>
          <div className="bg-white p-4 rounded border border-gray-300">
            <input type="text" placeholder="Deliver it" className="w-full text-base text-gray-900" />
          </div>
        </div>

        <div className="p-5 max-w-md mx-auto">
          <h2 className="text-xl font-medium mb-7 text-gray-900">Enter your name and address:</h2>
          <form className="space-y-7">
            <div className="bg-white p-4 rounded border border-gray-300">
              <input type="text" placeholder="First Name" className="w-full text-base text-gray-900" />
            </div>
            <div className="bg-white p-4 rounded border border-gray-300">
              <input type="text" placeholder="Last Name" className="w-full text-base text-gray-900" />
            </div>
            <div className="bg-white p-4 rounded border border-gray-300">
              <input type="text" placeholder="Address Line 1" className="w-full text-base text-gray-900" />
            </div>
            <div className="bg-white p-4 rounded border border-gray-300">
              <input type="text" placeholder="Address Line 2" className="w-full text-base text-gray-900" />
            </div>
            <div className="bg-white p-4 rounded border border-gray-300">
              <input type="text" placeholder="Address Line 3" className="w-full text-base text-gray-900" />
            </div>
            <div className="flex space-x-4">
              <div className="bg-white p-4 rounded border border-gray-300 flex-1">
                <input type="text" placeholder="Postal Code" className="w-full text-base text-gray-900" />
              </div>
              <div className="bg-white p-4 rounded border border-gray-300 flex-1">
                <input type="text" placeholder="Locality" className="w-full text-base text-gray-900" />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-white p-4 rounded border border-gray-300 flex-1">
                <select className="w-full text-base text-gray-500">
                  <option>State/Territory</option>
                </select>
              </div>
              <div className="bg-white p-4 rounded border border-gray-300 flex-1 relative">
                <select className="w-full text-base text-gray-900">
                  <option>India</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="saveAddress" className="h-4 w-4" />
              <label htmlFor="saveAddress" className="text-sm text-gray-900">Save this address to my profile</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="preferredAddress" className="h-4 w-4" />
              <label htmlFor="preferredAddress" className="text-sm text-gray-900">Make this my preferred address</label>
            </div>
          </form>
        </div>

        <div className="py-5 w-full max-w-md">
          <h2 className="text-xl font-medium mb-7 text-gray-900">What's your contact information?</h2>
          <div className="mb-8">
            <div className="bg-white p-4 rounded border border-gray-300 mb-2">
              <input type="text" placeholder="Email" className="w-full text-base text-gray-900" />
            </div>
            <p className="text-xs text-gray-600 pl-4">A confirmation email will be sent after checkout.</p>
          </div>
          <div>
            <div className="bg-white p-4 rounded border border-gray-300 mb-2">
              <input type="text" placeholder="Phone Number" className="w-full text-base text-gray-900" />
            </div>
            <p className="text-xs text-gray-600 pl-4">A carrier might contact you to confirm delivery.</p>
          </div>
        </div>

        <div className="p-5">
          <h2 className="text-xl font-medium text-black mb-7">What's your PAN?</h2>
          <div className="bg-white rounded-md p-4 mb-2">
            <input
              type="text"
              placeholder="PAN"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="text-base text-black w-full"
            />
          </div>
          <p className="text-xs text-gray-600 mb-4">
            Enter your PAN to enable payment with UPI, Net Banking or local card methods
          </p>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="mr-2"
            />
            <label className="text-xs text-gray-600">Save PAN details to Nike Profile</label>
          </div>
        </div>
      </div>

      <div className="w-1/3">
        <div className="p-4 bg-white w-[320px ] h-[1150px] ">
          <h1 className="text-xl font-medium mb-4 text-gray-900">Order Summary</h1>
          <div className="border-b border-gray-300 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-600">₹ 20,890.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Delivery/Shipping</span>
              <span className="text-gray-600">Free</span>
            </div>
            <div className="flex justify-between font-medium mb-4">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">₹ 20,890.00</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            (The total reflects the price of your order, including all duties and taxes)
          </p>
          <div className="mb-4">
            <span className="font-bold text-gray-900">Arrives Mon, 27 Mar - Wed, 12 Apr</span>
          </div>
          <div className="flex flex-col mb-4">
          <Image
              src="/assests/G1.png"
              alt="Product image"
              width={300}
              height={300}
              className="mx-auto"
            />
              <p className="text-gray-900">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
              <p className="text-gray-600">Qty 1</p>
              <p className="text-gray-600">Size L</p>
              <p className="text-gray-600">₹ 3,895.00</p>
            </div>
            <div>
          </div>
          <div className="flex flex-col">
          <Image
              src="/assests/image3.png"
              alt="Product image"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div>
              <p className="text-gray-900">Nike Air Max 97 SE Men's Shoes</p>
              <p className="text-gray-600">Qty 1</p>
              <p className="text-gray-600">Size UK 8</p>
              <p className="text-gray-600">₹ 16,995.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
