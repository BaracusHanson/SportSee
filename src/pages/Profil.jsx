import { useEffect, useState } from "react";
import ChartActivity from "../components/ActivityChart";
import Card from "../components/Card";
import UserName from "../components/UserName";
import { getApportNutritionnel } from "../utils/constants";
import { fetchUserData } from "../utils/fetchUser";
import AverageSessionChart from "../components/AverageSessionChart";
import IntensityChart from "../components/IntensityChart";
import GoalChart from "../components/GoalChart";
import "../styles/index.css";

const Profil = () => {
  const [user, setUser] = useState(null);
  const [apportNutritionnel, setApportNutritionnel] = useState([]);
  const [coordinate, setCoordinate] = useState({});
  // console.log(coordinate);

  // const tooltipStyle = {
  //   left: `${coordinate.x}px`,

  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user12 = await fetchUserData(18);
        setUser(user12);
        if (user12?.keyData) {
          const nutritionData = getApportNutritionnel(user12.keyData);
          setApportNutritionnel(nutritionData);
        }
      } catch (error) {
        console.error("Erreur lors du fetch des données utilisateur :", error);
      }
    };

    fetchData();
  }, []);
  // console.log(user);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Page">
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
    </div>
  );
};
export default Profil;
