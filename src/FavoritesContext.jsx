import { createContext, useState } from "react";
const FavoritesContext = createContext();
export function FavoritesProvider({ children }) {
  const [favItems, setFavItems] = useState([]);


  function deleteFavoriteItem(id){
    setFavItems(prevItems => {
      return prevItems.filter((prevItem)=>{
        return prevItem != id
      })
    })
  }

  function addToFavorites(id) {
    setFavItems((prevItems) => {
      return [
        ...prevItems,
        id
      ];
    });
  }
  return (
    <FavoritesContext.Provider value={{ favItems, addToFavorites, deleteFavoriteItem }}>{children}</FavoritesContext.Provider>
  );
}
export default FavoritesContext;
