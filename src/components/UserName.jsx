import "../styles/userName.css";
import PropTypes from "prop-types";

const UserName = ({ data }) => {
  const firstName = data.userInfos.firstName;
  return (
    <div className="user-name">
      <h1 className="greeting">
        Bonjour <span className="greeting-name">{firstName}</span>
      </h1>
      <p className="congratulations">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

UserName.propTypes = {
  data: PropTypes.shape({
    userInfos: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default UserName;
