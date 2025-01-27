import "../styles/sideBar.css";
import { logos } from "../utils/constants";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <ul className="sidebar-list">
          {logos.map((logo, index) => (
            <li className="sidebar-item" key={index}>
              <img src={logo} alt="sports" className="sidebar-icon" />
            </li>
          ))}
        </ul>
        <p className="sidebar-copyright">Copiryght, SportSee 2020</p>
      </div>
    </nav>
  );
};

export default SideBar;
