// Wherever you're importing Product, you will now import it as follows:

import Product from "../../types/page";



// Get cart items from localStorage
export const getCartItems = (): Product[] => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

// Add a product to the cart
export const addToCart = (product: Product): void => {
  const cart = getCartItems(); // Get cart items
  const existingProductIndex = cart.findIndex(item => item._id === product._id);
  
  if (existingProductIndex > -1) {
    cart[existingProductIndex].inventory += 1;
  } else {
    cart.push({ ...product, inventory: 1 });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
};

// Remove a product from the cart
export const removeFromCart = (productId: string): void => {
  let cart = getCartItems();
  cart = cart.filter(item => item._id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Update product quantity in the cart
export const updateCartQuantity = (productId: string, quantity: number): void => {
  const cart = getCartItems();
  const productIndex = cart.findIndex(item => item._id === productId);
  
  if (productIndex > -1) {
    cart[productIndex].inventory = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

// Calculate the total price of all items in the cart
export const calculateTotal = (): number => {
  const cart = getCartItems();
  return cart.reduce((total, item) => total + item.price * item.inventory, 0);
};
