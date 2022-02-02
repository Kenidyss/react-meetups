import { useContext } from "react";
import { Link } from "react-router-dom";
import css from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";
const MainNavigation = () => {
  const FavoritesCtx = useContext(FavoritesContext)
  return (
    <header className={css.header}>
      <div className={css.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/New-meetup"}>Add New Meetup</Link>
          </li>
          <li>
            <Link to={"/Favorites"}>My Favorites <span className={css.badge}>{FavoritesCtx.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
