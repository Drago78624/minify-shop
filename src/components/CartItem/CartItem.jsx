import React, { useState, useEffect, useContext } from 'react'
import { MdDelete } from "react-icons/md";
import CartContext from '../../CartContext';
import "../SharedCss/SharedCss.css"


export default function CartItem({ cartItemId }) {
  const [cartItem, setCartItem] = useState({})
  const {deleteCartItem} = useContext(CartContext)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${cartItemId}`)
      .then((res) => res.json())
      .then((data) => setCartItem(data));
  }, []);

  return (
    <div className='fc-item'>
        <div className="fc-img-container">
            <img className='fc-img'src={cartItem.image} alt="" />
        </div>
        <div className="fc-title">
            {cartItem.title}
        </div>
        <div className="delete-fc">
            <MdDelete onClick={()=>deleteCartItem(cartItemId)} />
        </div>

    </div>
  )
}
