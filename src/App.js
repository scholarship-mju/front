import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import CustomScholarshipsPage from "./pages/CustomScholarshipsPage";
import ReceivedScholarshipsPage from "./pages/ReceivedScholarshipsPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import LoginSuccessPage from "./pages/auth/LoginSuccessPage";
import axios from "axios";
import NewUserPage from "./pages/NewUserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.post("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("accessToken");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
        >
          <Route index element={<HomePage />} />
          <Route path="scholarships" element={<ScholarshipsPage />} />
          <Route path="custom-scholarships" element={<CustomScholarshipsPage />} />
          <Route path="received-scholarships" element={<ReceivedScholarshipsPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="auth/success" element={<LoginSuccessPage />} />
          <Route path="new-user" element={<NewUserPage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;