import React, { useContext } from "react";
import CartContext from "../CartContext";
import CartItem from "../components/CartItem/CartItem";

export default function Cart() {
  const { items } = useContext(CartContext);

  return (
    <div>
      {items.map((itemId) => {
        return <CartItem key={itemId} cartItemId={itemId} />;
      })}
    </div>
  );
}
