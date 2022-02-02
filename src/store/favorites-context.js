import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,

  //for autocompletion purpose only
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavCtxProvider = (props) => {
  const [userFav, setUserFav] = useState([]);

  const addFavHandler = (favMeetup) => {
    setUserFav((prevUserFav) => {
      return prevUserFav.concat(favMeetup);
    });
  };

  const removeFavHandler = (meetupId) => {
    const filterHelper = (meetup) => {
      return meetup.id !== meetupId;
    };
    setUserFav((prevUserFav) => {
      return prevUserFav.filter(filterHelper);
    });
  };

  const itemIsFavHandler = (meetupId) => {
    return userFav.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFav,
    totalFavorites: userFav.length,
    addFavorite: addFavHandler,
    removeFavorite: removeFavHandler,
    itemIsFavorite: itemIsFavHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContext;
