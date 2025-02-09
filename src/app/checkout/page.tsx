'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CgChevronRight } from 'react-icons/cg';
import Swal from 'sweetalert2';
import { urlFor } from '../sanity/lib/image';
import { toast } from 'react-toastify';
import { client } from '../sanity/lib/client';
import { Product } from '../types/product';
import { getCartItems } from '../actions/actions';

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem('appliedDiscount');
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email || !/\S+@\S+\.\S+/.test(formValues.email),
    };

    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    if (formValues.phone && !phoneRegex.test(formValues.phone)) {
      errors.phone = true;
    }

    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (validateForm()) {
      Swal.fire({
        title: 'Processing your order...',
        text: 'Please wait a moment.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Proceed',
      }).then(async (result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('appliedDiscount');

          // Prepare the order data to be sent to the database
          const orderData = {
            _type: 'order',
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipCode: formValues.zipCode,
            phone: formValues.phone,
            email: formValues.email,
            cartItems: cartItems.map((item) => ({
              _type: 'reference',
              _ref: item._id,
            })),
            total: total,
            discount: discount,
            orderDate: new Date().toISOString(),
          };

          try {
            // Save the order data to the database
            await client.create(orderData);
            // Show success toast notification
            toast.success('Your order has been placed successfully!');
            Swal.fire(
              'Success!',
              'Your order has been successfully processed!',
              'success'
            );
          } catch (error) {
            console.error('Error creating order:', error);
            // Show error toast notification in case of failure
            toast.error(
              'There was an issue placing your order. Please try again.'
            );
            Swal.fire(
              'Error',
              'There was an issue processing your order.',
              'error'
            );
          }
        }
      });
    } else {
      Swal.fire(
        'Error',
        'Please fill in all the fields correctly before proceeding.',
        'error'
      );
      toast.error('Please fill in all the fields correctly.');
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50`}>
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.productName}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.productName}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.inventory}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subtotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className={`border border-gray-300 focus:outline-none focus:border-blue-500 hover:border-blue-500 ${formErrors.firstName ? 'border-red-500' : ''}`}
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">
                    First name is required.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className={`border border-gray-300 focus:outline-none focus:border-blue-500 hover:border-blue-500 ${formErrors.lastName ? 'border-red-500' : ''}`}
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">Last name is required.</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
                className={`border border-gray-300 focus:outline-none focus:border-blue-500 hover:border-blue-500 ${formErrors.address ? 'border-red-500' : ''}`}
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">Address is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
                className={`border border-gray-300 focus:outline-none focus:border-blue-500 hover:border-blue-500 ${formErrors.city ? 'border-red-500' : ''}`}
              />
              {formErrors.city && (
                <p className="text-sm text-red-500">City is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code</label>
              <input
                id="zipCode"
                placeholder="Enter your zip code"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className={`border border-gray-300 focus:outline-none focus:border-blue-500 hover:border-blue-500 ${formErrors.zipCode ? 'border-red-500' : ''}`}
              />
              {formErrors.zipCode && (
                <p className="text-sm text-red-500">Zip Code is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
                className={`border border-gray-300 focus:outline-none focus:border-blue-500 hover:border-blue-500 ${formErrors.phone ? 'border-red-500' : ''}`}
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500">Phone is invalid.</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleInputChange}
                className={`border border-gray-300 focus:outline-none focus:border-blue-500 hover:border-blue-500 ${formErrors.email ? 'border-red-500' : ''}`}
              />
              {formErrors.email && (
                <p className="text-sm text-red-500">
                  Please enter a valid email.
                </p>
              )}
            </div>
            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
