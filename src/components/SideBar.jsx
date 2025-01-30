import "../styles/sideBar.css";
import { logos } from "../utils/constants";

/**
 * SideBar component renders a navigation sidebar with a list of logos and a copyright notice.
 *
 * @component
 * @example
 * return (
 *   <SideBar />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 */
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
      </div>
        <p className="sidebar-copyright">Copiryght, SportSee 2020</p>
    </nav>
  );
};

export default SideBar;
