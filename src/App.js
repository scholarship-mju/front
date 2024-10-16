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

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
`;

const H1 = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const MainContent = styled.div`
  margin-top: 160px;
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
      {/* 고정된 헤더 */}
      <Header>
        <H1>
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            숨은 장학금
          </a>
        </H1>
      </Header>

      {/* 헤더 아래에 표시될 페이지 내용 */}
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