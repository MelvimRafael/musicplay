import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavoriteContext must be used within a FavoriteProvider');
  }
  return context;
};

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (music) => {
    if (!favorites.some((fav) => fav.trackId === music.trackId)) {
      setFavorites([...favorites, music]);
    }
  };

  const removeFavorite = (trackId) => {
    setFavorites(favorites.filter((fav) => fav.trackId !== trackId));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
    