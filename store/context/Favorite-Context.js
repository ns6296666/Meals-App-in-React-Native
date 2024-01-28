import { createContext } from "react";
const FavoriteContext = createContext({
  id: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});
export const FavoriteContextProvider = ({ children }) => {
  return <FavoriteContextProvider>{children}</FavoriteContextProvider>;
};
