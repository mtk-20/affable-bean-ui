'use client'
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {HeaderComponent} from "@/components/HeaderComponent";
import {FooterComponent} from "@/components/FooterComponent";
import {createContext, useState} from "react";

export const ShoppingCartContext = createContext({
  cartItems: [],
  addToCart: (item) => {
  },
  removeFromCart: (item) => {
  },
  increaseQuantity: (product) => {
  },
  decreaseQuantity: (product) => {
  },
  itemTotal: (item) => {
  },
  clearCart: () => {
  }
})

export default function RootLayout({children}) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (!duplicateCartItems(item)) {
      const updateItem = {...item, quantity: 1};
      setCartItems([...cartItems, updateItem]);
    }
  }
  const duplicateCartItems = (item) => {
    return cartItems.some(i => i.id === item.id);
  }
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(i => i.id !== item.id));
  }
  const increaseQuantity = (product) => {
    let item = cartItems.find(item => item.id === product.id);
    let updatedItem = {...item, quantity: item.quantity + 1};
    let updatedCart = cartItems.map(item => item.id === product.id ? updatedItem : item);
    setCartItems(updatedCart);
  }
  const decreaseQuantity = (product) => {
    let quantity = product.quantity;

    if (quantity > 1) {
      let item = cartItems.find(item => item.id === product.id);
      let updatedItem = {...item, quantity: item.quantity - 1};
      let updatedCart = cartItems.map(item => item.id === product.id ? updatedItem : item);
      setCartItems(updatedCart);
    }
  }
  const itemTotal = cartItems
      .map(item => {
        return item.price * item.quantity
      }).reduce((acc, curr) => acc + curr, 0);
  const clearCart = () => {
    setCartItems([]);
  }

  const contextValues = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    itemTotal,
    clearCart
  }

  return (
      <html lang="en">
      <body id="body">
      <HeaderComponent/>
      <ShoppingCartContext.Provider value={contextValues}>
        {children}
      </ShoppingCartContext.Provider>
      <FooterComponent/>
      </body>
      </html>
  );
}