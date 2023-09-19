import { Link } from "react-router-dom";

export const MainNav = () => {
  return (
    <nav className="main-navigation">
      <ul className="main-navigation__list">
        <li>
          <Link className="main-navigation__list__item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="main-navigation__list__item" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="main-navigation__list__item" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
