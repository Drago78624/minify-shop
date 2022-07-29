import { createContext, useState } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addToCart(id) {
    setItems((prevItems) => {
      return [
        ...prevItems,
        id
      ];
    });
  }
  return (
    <CartContext.Provider value={{ items, addToCart }}>{children}</CartContext.Provider>
  );
}
export default CartContext;
