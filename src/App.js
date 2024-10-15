import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import CustomScholarshipsPage from "./pages/CustomScholarshipsPage";
import ReceivedScholarshipsPage from "./pages/ReceivedScholarshipsPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import styled from "styled-components";
import { useState } from "react";
import mainlogo from "./png/mainlogo.png";

const Logo = styled.img`
  width: 200px; /* 로고 크기 설정 */
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainContent = styled.div`
  margin-top: 200px; /* 로고 밑에 컨텐츠 여백 */
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <header>
        <Logo src={mainlogo} alt="Main Logo" />
      </header>

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