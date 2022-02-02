import css from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
const Layout = (props) => {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main className={css.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
