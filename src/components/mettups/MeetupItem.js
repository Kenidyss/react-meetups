import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../Ui/Card";
import css from "./MeetupItem.module.css";
const MeetupItem = (props) => {
  const item = props.item;
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(item.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      
      favoritesCtx.removeFavorite(item.id);
    } else {
      favoritesCtx.addFavorite({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        address: item.address,
      });
    }
  };

  return (
    <li className={css.item}>
      <Card>
        <div className={css.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={css.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={css.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
