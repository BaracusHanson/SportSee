import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Setting from "./pages/Setting";
import Community from "./pages/Community";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import { fetchUserData } from "./utils/fetchUser";

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId) {
          const user = await fetchUserData(userId);
          setUser(user);
        }
      } catch (error) {
        console.error("Erreur lors du fetch des données utilisateur :", error);
      }
    };

    fetchData();
  }, [userId]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SideBar />
        <Routes>
          <Route
            path="/"
            element={<Home setUserId={setUserId} user={user} />}
          />
          <Route path="/profil" element={<Profil user={user} />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
