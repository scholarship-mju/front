import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import CustomScholarshipsPage from "./pages/CustomScholarshipsPage";
import ReceivedScholarshipsPage from "./pages/ReceivedScholarshipsPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import LoginSuccessPage from "./pages/auth/LoginSuccessPage";
import SignUpFlow from "./pages/SignUpFlow";
import mainlogo from "./png/mainlogo.png";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: #FFFFF0;
  transition: top 0.3s ease-in-out;
`;

const Logo = styled.img`
  width: 700px;
  height: auto;
  cursor: pointer;
`;

const MainContent = styled.div`
  margin-top: 150px;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const storedUsername = localStorage.getItem("username");

    if (accessToken) {
      setIsLoggedIn(true);
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowHeader(window.scrollY <= lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header style={{ backgroundColor: "#FFFFF0", top: showHeader ? "0" : "-100px" }}>
        <Link to="/"><Logo src={mainlogo} alt="Main Logo" /></Link>
      </Header>

      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} username={username} />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/custom-scholarships" element={<CustomScholarshipsPage />} />
          <Route path="/received-scholarships" element={<ReceivedScholarshipsPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/auth/success" element={<LoginSuccessPage />} />
          <Route path="/signup" element={<SignUpFlow />} />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;