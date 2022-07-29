import React, { useContext } from "react";
import FavoritesContext from "../FavoritesContext";
import FavoriteItem from "../components/FavoriteItem/FavoriteItem";

export default function Favorites() {
  const { favItems } = useContext(FavoritesContext);

  return (
    <div>
      {favItems.map((itemId) => {
        return <FavoriteItem key={itemId} favoritesItemId={itemId} />;
      })}
    </div>
  );
}
