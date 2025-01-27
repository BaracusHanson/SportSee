import "../styles/userName.css";

const UserName = () => {
  return (
    <div className="user-name">
      <h1 className="greeting">
        Bonjour <span className="greeting-name">Thomas</span>
      </h1>
      <p className="congratulations">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default UserName;
