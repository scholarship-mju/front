import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import CustomScholarshipsPage from "./pages/CustomScholarshipsPage";
import ReceivedScholarshipsPage from "./pages/ReceivedScholarshipsPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import styled from "styled-components";
import { useState, useEffect } from "react";
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
  background-color: white;
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

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // 스크롤 아래로: 헤더 숨기기
      } else {
        setShowHeader(true); // 스크롤 위로: 헤더 보이기
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header style={{ backgroundColor: "#F0E6FF", top: showHeader ? "0" : "-100px" }}>
        <Link to="/">
          <Logo src={mainlogo} alt="Main Logo" />
        </Link>
      </Header>

      <MainContent>
        <Routes>
          <Route
            path="/"
            element={<HomePage isLoggedIn={isLoggedIn} username={username} />}
          />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/custom-scholarships" element={<CustomScholarshipsPage />} />
          <Route path="/received-scholarships" element={<ReceivedScholarshipsPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;