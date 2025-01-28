import { useEffect, useState } from "react";
import ChartActivity from "../components/ActivityChart";
import Card from "../components/Card";
import UserName from "../components/UserName";
import { getApportNutritionnel } from "../utils/constants";
import { fetchUserData } from "../utils/fetchUser";

const Profil = () => {
  const [user, setUser] = useState(null);
  const [apportNutritionnel, setApportNutritionnel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user12 = await fetchUserData(12);
      setUser(user12);
      //  console.log(ok);
    };
    
    fetchData();
  
  }, []);
  // console.log(user);
  console.log(user?.keyData);
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
              <ChartActivity data={user} />
            </div>
            <div className="other"> others activite </div>
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
