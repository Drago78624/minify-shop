import React, { useContext } from "react";
import CartContext from "../CartContext";
import CartItem from "../components/CartItem/CartItem";

export default function Cart() {
  const { items } = useContext(CartContext);

  return (
    <div>
      {items.length ? items.map((itemId) => {
        return <CartItem key={itemId} cartItemId={itemId} />;
      }) : <div className="no-items">No items in cart</div>}
      {items.length ? <div className="proceed">
        <button className="proceed-btn">Proceed to checkout</button>
      </div> : null}
    </div>
  );
}
