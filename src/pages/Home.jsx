import "../styles/home.css";
import karl from "../assets/users/karl.jpg";
import cecilia from "../assets/users/cecilia.jpg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setUserId, user }) => {
  // console.log(user.userInfos.firstName);
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
        <h1 className="home_title">choisissez un profil utilisateur</h1>
        <div className="user-selection-form">
          <div className="user-selection">
            <button className="user-option" onClick={userKarl}>
              <div className="userButton" >
                <img src={karl} alt="User_12" className="userImg" />
              </div>
              <p className="home_para">Karl</p>
            </button>
            <button className="user-option" onClick={userCecilia}>
              <div className="userButton" >
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
