import { createContext, useState } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function deleteCartItem(id){
    setItems(prevItems => {
      return prevItems.filter((prevItem)=>{
        return prevItem != id
      })
    })
  }

  function addToCart(id) {
    setItems((prevItems) => {
      return [
        ...prevItems,
        id
      ];
    });
  }
  return (
    <CartContext.Provider value={{ items, addToCart, deleteCartItem }}>{children}</CartContext.Provider>
  );
}
export default CartContext;
