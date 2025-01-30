import { useEffect, useState } from "react";
import ChartActivity from "../components/ActivityChart";
import Card from "../components/Card";
import UserName from "../components/UserName";
import { getApportNutritionnel } from "../utils/constants";
import AverageSessionChart from "../components/AverageSessionChart";
import IntensityChart from "../components/IntensityChart";
import GoalChart from "../components/GoalChart";
import "../styles/index.css";
import PropTypes from "prop-types";

const Profil = ({ user }) => {
  const [apportNutritionnel, setApportNutritionnel] = useState([]);
  const [coordinate, setCoordinate] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      if (user?.keyData) {
        const nutritionData = getApportNutritionnel(user.keyData);
        setApportNutritionnel(nutritionData);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Page">
      {!user ? (
        <div className="chargement">
          <p>aucun utilisateur sélectionné !</p>
          <p className="helps">vous devez selectionner un utilisateur pour visialiser son dashboard</p>
        </div>
      ) : (
        <section className="dashboard">
          <UserName data={user} />
          <div className="dashboard-content">
            <div className="dashboard-activity">
              <div className="dayly-activity">
                <h3 className="chartactivity-title">Activité quotidienne</h3>
                <ChartActivity data={user} />
              </div>
              <div className="other">
                <div className="AverageSessionChart">
                  <h3 className="AverageSessionChart-title">
                    Durée moyenne des <br />
                    sessions
                  </h3>
                  <div className="velvet" style={coordinate}></div>
                  <AverageSessionChart
                    data={user.averageSessions}
                    setCoordinate={setCoordinate}
                  />
                </div>
                <div className="IntensityChart">
                  <IntensityChart data={user.performance} />
                </div>
                <div className="goal">
                  <GoalChart data={user.todayScore} />
                </div>
              </div>
            </div>
            <div className="troisAutres">
              <div className="card-container">
                {apportNutritionnel.map((apport, index) => {
                  return (
                    <Card
                      key={index}
                      apport={apport}
                      nutriments={user?.keyData}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
Profil.propTypes = {
  user: PropTypes.object,
};
export default Profil;
