import React, { useState, useEffect, useContext } from 'react'
import { MdDelete } from "react-icons/md";
import FavoritesContext from '../../FavoritesContext';
import "../SharedCss/SharedCss.css"

export default function FavoritesItem({ favoritesItemId }) {
  const [favoritesItem, setFavoritesItem] = useState({})
  const {deleteFavoriteItem} = useContext(FavoritesContext)

  function truncate(str) {
    return str.length > 10 ? str.substring(0, 25) + "..." : str;
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${favoritesItemId}`)
      .then((res) => res.json())
      .then((data) => setFavoritesItem(data));
  }, []);

  return (
    <div className='fc-item'>
        <div className="fc-img-container">
            <img className='fc-img'src={favoritesItem.image} alt="" />
        </div>
        <div className="fc-title">
            {favoritesItem.title}
        </div>
        <div className="delete-fc">
            <MdDelete onClick={()=>deleteFavoriteItem(favoritesItemId)} />
        </div>
    </div>
  )
}
