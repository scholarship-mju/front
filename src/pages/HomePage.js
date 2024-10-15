import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex: 1;
`;

const Button = styled(Link)`
  padding: 13px 30px;
  font-size: 16px;
  justify-content: center;
  text-decoration: none;
  color: black;
  background-color: lightblue;
  border-radius: 5px;
  transition: background-color 0.3s ease;
`;

const RightButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const RightButton = styled(Link)`
  padding: 12px 18px;
  text-decoration: none;
  color: black;
  background-color: lightblue;
  border-radius: 5px;
  transition: background-color 0.3s ease;
`;

function HomePage({ isLoggedIn, username }) {
  return (
    <div>
      <Nav>
        <ButtonGroup>
          <Button to="/scholarships">전체장학금</Button>
          <Button to="/custom-scholarships">맞춤형장학금</Button>
          <Button to="/received-scholarships">받은장학금</Button>
        </ButtonGroup>

        {isLoggedIn ? (
          <RightButtonGroup>
            <Link to="/mypage">마이페이지</Link>
            <span>{username}님</span>
          </RightButtonGroup>
        ) : (
          <RightButtonGroup>
            <RightButton to="/login">로그인</RightButton>
            <RightButton to="/signup">회원가입</RightButton>
          </RightButtonGroup>
        )}
      </Nav>

      <div>
        <h2>이달의왕</h2>
        <div
          style={{ border: "1px solid black", height: "200px", margin: "20px 0" }}
        >
          {/* 이달의왕 내용 추가 */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;