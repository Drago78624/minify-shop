import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../CartContext";
import FavoritesContext from "../../FavoritesContext";

export default function SingleProduct(props) {
  const [singleProduct, setSingleProduct] = useState();
  const {addToCart} = useContext(CartContext)
  const {addToFavorites} = useContext(FavoritesContext)
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.productId}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);
  return (
    <>
      {<div className="single-product" style={{display: "flex", gap: "50px"}}>
        <div className="sp-img">
          <img className="img" style={{maxWidth: "250px"}} src={singleProduct?.image} alt="" />
        </div>
        <div className="sp-content">
          <button onClick={()=>addToFavorites(props.productId)}>add to favorites</button>
          <h2>{singleProduct?.title}</h2>
          <p>{singleProduct?.price}</p>
          <p>{singleProduct?.description}</p>
          <button onClick={()=>addToCart(props.productId)}>add to cart</button>
        </div>
      </div> || "loading......"}
    </>
  );
}
