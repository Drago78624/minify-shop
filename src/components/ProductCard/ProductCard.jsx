import React from 'react'
import "./ProductCard.css"
import {FaShoppingCart} from "react-icons/fa"
import {FaHeart} from "react-icons/fa"

export default function ProductCard({img, title, price}) {

    function truncate(str) {
        return str.length > 10 ? str.substring(0, 7) + "..." : str;
    }
  return (
    <div className='card'>
        <div className="card-media">
        <img className='card-img' src={img} alt="" />
        </div>
        <div className="card-content">
            <h3 className='product-name'>{truncate(title)}</h3>
            <p className='product-price'>${price}</p>
            <div className="product-actions">
                <FaHeart />
                <FaShoppingCart />
            </div>
        </div>
    </div>
  )
}
