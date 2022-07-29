import React, { useState, useEffect, useContext } from 'react'
import { MdDelete } from "react-icons/md";
import FavoritesContext from '../../FavoritesContext';


export default function FavoritesItem({ favoritesItemId }) {
  const [favoritesItem, setFavoritesItem] = useState({})
  const {deleteFavoriteItem} = useContext(FavoritesContext)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${favoritesItemId}`)
      .then((res) => res.json())
      .then((data) => setFavoritesItem(data));
  }, []);

  return (
    <div className='Favorites-item' style={{display: "flex", justifyContent: "space-between", backgroundColor: "white", marginBottom: "1rem"}}>
      {favoritesItemId}
        <div className="Favorites-img">
            <img style={{maxWidth: "100px", width: "100%"}} src={favoritesItem.image} alt="" />
        </div>
        <div className="Favorites-title">
            {favoritesItem.title}
        </div>
        <div className="delete-Favorites">
            <MdDelete onClick={()=>deleteFavoriteItem(favoritesItemId)} />
        </div>
    </div>
  )
}
