import "../styles/home.css";
import karl from "/public/assets/users/karl.jpg";
import cecilia from "/public/assets/users/cecilia.jpg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Home component allows users to select a profile and navigate to the profile page.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setUserId - Function to set the user ID.
 * @param {Object} props.user - The user object containing user information.
 * @param {Object} props.user.userInfos - The user information object.
 * @param {string} props.user.userInfos.firstName - The first name of the user.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = ({ setUserId, user }) => {
  const [name, setName] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.userInfos) {
      setName(user.userInfos.firstName);
    }
  }, [user]);
  const userKarl = () => {
    const id = 12;
    setUserId(id);
  };

  const userCecilia = () => {
    const id = 18;
    setUserId(id);
  };
  const redirection = () => {
    if (user) {
      navigate("/profil");
    }
  };
  return (
    <div className="Page">
      <section className="dashboard">
        <h1 className="home_title">
          {user == null
            ? "choisissez un profil utilisateur"
            : `Vous avez choisi ${user.userInfos.firstName}`}
        </h1>
        <div className="user-selection-form">
          <div className="user-selection">
            <button className="user-option" onClick={userKarl}>
              <div className="userButton">
                <img src={karl} alt="User_12" className="userImg" />
              </div>
              <p className="home_para">Karl</p>
            </button>
            <button className="user-option" onClick={userCecilia}>
              <div className="userButton">
                <img src={cecilia} alt="User_12" className="userImg" />
              </div>
              <p className="home_para">Cecilia</p>
            </button>
          </div>
          {user && (
            <button onClick={redirection} className="profilButtonActive">
              voir le profil de {name}
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  setUserId: PropTypes.func.isRequired,
  user: PropTypes.object,
};
export default Home;
