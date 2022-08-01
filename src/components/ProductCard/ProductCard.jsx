import React, { useContext } from "react";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import MoonLoader from "react-spinners/MoonLoader";
import "./ProductCard.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import CartContext from "../../CartContext";
import FavoritesContext from "../../FavoritesContext";
import { Link } from "react-router-dom";

export default function ProductCard({ id, img, title, price }) {
  const { addToCart } = useContext(CartContext);
  const { addToFavorites } = useContext(FavoritesContext);
  const { deleteFavoriteItem } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false)


  function favorite(id){
    if(isFavorite){
      deleteFavoriteItem(id)
      setIsFavorite(prevState => !prevState)
    }else{
      setIsFavorite(prevState => !prevState)
    }
  }

  function truncate(str) {
    return str.length > 10 ? str.substring(0, 7) + "..." : str;
  }
  return (
    <div className="card">
      <Link to={`/products/${id}`}>
        <div className="card-media">
          <img className="card-img" src={img} alt="" />
        </div>
      </Link>

      <div className="card-content">
        <h3 className="product-name">{truncate(title)}</h3>
        <p className="product-price">${price}</p>

        <div className="product-actions">
          {isFavorite ? <FaHeart className="cursor heart-icon" onClick={() => favorite(id)} /> : 
          <FaRegHeart className="cursor heart-icon" onClick={() => {
            addToFavorites(id);
            favorite(id)}} />}
          <FaShoppingCart className="cursor" onClick={() => addToCart(id)} />
        </div>
      </div>
    </div>
  );
}
