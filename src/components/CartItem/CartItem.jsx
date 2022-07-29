import React, { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md";


export default function CartItem({ cartItemId }) {
  const [cartItem, setCartItem] = useState({})

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${cartItemId}`)
      .then((res) => res.json())
      .then((data) => setCartItem(data));
  }, []);

  return (
    <div className='cart-item' style={{display: "flex", justifyContent: "space-between", backgroundColor: "white", marginBottom: "1rem"}}>
      {cartItemId}
        <div className="cart-img">
            <img style={{maxWidth: "100px", width: "100%"}} src={cartItem.image} alt="" />
        </div>
        <div className="cart-title">
            {cartItem.title}
        </div>
        <div className="delete-cart">
            <MdDelete />
        </div>
    </div>
  )
}
