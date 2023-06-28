import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./MainNavigation.module.css";
const MainNav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> BR7 Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quotes" activeClassName={classes.active}>
              Add a Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
