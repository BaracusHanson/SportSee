import { NavLink } from "react-router-dom";
import logo from "../assets/brand.png";
import "../styles/Navbar.css";

/**
 * Navbar component that renders the navigation bar for the SportSee application.
 * 
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 * 
 * @returns {JSX.Element} The rendered navigation bar component.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo" />
        <span className="navbar-brand">SportSee</span>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link-active" : "navbar-link"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/profil"
            className={({ isActive }) =>
              isActive ? "navbar-link-active" : "navbar-link"
            }
          >
            Profil
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              isActive ? "navbar-link-active" : "navbar-link"
            }
          >
            Réglages
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive ? "navbar-link-active" : "navbar-link"
            }
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
