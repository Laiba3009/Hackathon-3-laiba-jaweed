// cart-action/page.ts
import { Product } from "../types/product";

// Get cart items from localStorage
export const getCartItems = (): Product[] => {
  const cartData = localStorage.getItem('cart');
  // Safely parse the cart data or return an empty array if it's null or invalid
  return cartData ? (JSON.parse(cartData) as Product[]) : [];
};

// Add a product to the cart
export default function addToCart(product: Product): void {
  // function implementation
  const cart = getCartItems(); // Get current cart items from localStorage
  const existingProductIndex = cart.findIndex((item: Product) => item._id === product._id);

  if (existingProductIndex > -1) {
    // If product already exists, increase the quantity (inventory)
    cart[existingProductIndex].inventory += 1;
  } else {
    // If product is not in the cart, add it with initial inventory of 1
    const newProduct = { ...product, inventory: 1 };
    cart.push(newProduct);  // Ensure newProduct has the correct structure
  }

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart)); 
};

  

// Remove a product from the cart
export const removeFromCart = (productId: string): void => {
  let cart = getCartItems();
  cart = cart.filter((item) => item._id !== productId); // Remove the product with the given ID
  localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart back to localStorage
};

// Update the quantity of a product in the cart
export const updateCartQuantity = (productId: string, quantity: number): void => {
  const cart = getCartItems();
  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    // Update the inventory (quantity) of the product
    cart[productIndex].inventory = quantity;
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart back to localStorage
  }
};

// Calculate the total price of all items in the cart
export const calculateTotal = (): number => {
  const cart = getCartItems();
  // Calculate the total price by multiplying the price of each item by its inventory count
  return cart.reduce((total, item) => total + item.price * item.inventory, 0);
};
