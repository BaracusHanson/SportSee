import Card from "../components/Card";
import UserName from "../components/UserName";
import { apportNutritionnel } from "../utils/constants";

const Profil = () => {
  // 1
  return (
    <div className="Page">
      <section className="dashboard">
        <UserName />
        <div className="dashboard-content">
          <div className="dashboard-content-left">
            <div className="dashboard-activity"></div>
            <div className="troisAutres"></div>
          </div>
          <div className="dashboard-content-right">
     
          </div>
        </div>
      </section>
    </div>
  );
};
export default Profil;
