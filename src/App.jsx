import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Setting from "./pages/Setting";
import Community from "./pages/Community";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import {
  fetchUserData,
  fetchUserDataFromMock,
} from "../public/utils/fetchUser";

/**
 * App component that sets up the main application structure with routing.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * return (
 *   <App />
 * )
 *
 * @description
 * The App component initializes the user state and userId state. It fetches user data based on the userId and sets the user state accordingly. The component uses React Router for navigation between different routes: Home, Profil, Setting, and Community.
 *
 * @function
 * @name App
 */
function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return; // Ne fait rien si userId n'est pas défini

      try {
        const userData = await fetchUserData(userId);
        setUser(userData);
      } catch (error) {
        console.error(
          "Erreur lors du fetch des données API, passage au mock :",
          error
        );

        try {
          const userMock = await fetchUserDataFromMock(userId);
          setUser(userMock);
        } catch (mockError) {
          console.error(
            "Erreur lors du fetch des données mockées :",
            mockError
          );
        }
      }
    };

    fetchData();
  }, [userId]);

  return (
    <HashRouter>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home setUserId={setUserId} user={user} />} />
        <Route path="/profil" element={<Profil user={user} />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
