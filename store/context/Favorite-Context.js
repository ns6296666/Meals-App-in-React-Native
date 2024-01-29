import { createContext, useEffect, useState } from "react";
export const FavoriteContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});
const FavoriteContextProvider = ({ children }) => {
  const [FavoritesItem, setFavoritesItem] = useState([]);

  const addFavorite = (id) => {
    setFavoritesItem((current) => [...current, id]);
  };

  const removeFavorite = (id) => {
    setFavoritesItem((currentMealId) =>
      currentMealId.filter((mealId) => mealId !== id)
    );
  };
  const value = {
    ids: FavoritesItem,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
      {console.log("ids======", FavoritesItem)}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContextProvider;
