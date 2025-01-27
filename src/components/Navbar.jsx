import { Link } from "react-router-dom";
import logo from "../assets/brand.png";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo" />
        <span className="navbar-brand">SportSee</span>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Accueil
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/profil" className="navbar-link">
            Profil
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/setting" className="navbar-link">
            Réglages
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/community" className="navbar-link">
            Communauté
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
