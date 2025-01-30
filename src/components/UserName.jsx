import "../styles/userName.css";
import PropTypes from "prop-types";

/**
 * UserName component displays a greeting message with the user's first name
 * and a congratulatory message.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.data - The data object containing user information.
 * @param {Object} props.data.userInfos - The user information object.
 * @param {string} props.data.userInfos.firstName - The first name of the user.
 *
 * @returns {JSX.Element} The rendered component.
 */
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
