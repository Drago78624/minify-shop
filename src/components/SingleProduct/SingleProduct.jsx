import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../CartContext";
import FavoritesContext from "../../FavoritesContext";
import "./SingleProduct.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function SingleProduct(props) {
  const [singleProduct, setSingleProduct] = useState();
  const { addToCart } = useContext(CartContext);
  const { addToFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.productId}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);
  return (
    <>
      {(
        <div className="single-product">
          <div className="sp-img-container">
            <img className="sp-img" src={singleProduct?.image} alt="" />
          </div>
          <div className="sp-content">
            <button
              onClick={() => addToFavorites(props.productId)}
              className="sp-btn"
            >
              <FaHeart className="sp-icon" />
              Add to favorites
            </button>
            <h2 className="sp-title">{singleProduct?.title}</h2>
            <p className="sp-price">${singleProduct?.price}</p>
            <p className="sp-desc">{singleProduct?.description}</p>
            <button
              onClick={() => addToCart(props.productId)}
              className="sp-btn"
            >
              <FaShoppingCart className="sp-icon" />
              Add to cart
            </button>
          </div>
        </div>
      ) || "loading......"}
    </>
  );
}
