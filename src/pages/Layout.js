// src/pages/Layout.js
import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import mainlogo from "../png/mainlogo.png";

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  cursor: pointer;
  margin-left: 200px;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  margin: 0 20px;
  font-size: 1em;
  font-weight: bold;
  color: black;
  text-decoration: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 200px;
`;

const Button = styled(Link)`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 10px; 
  background-color: #ffece6; 
  color: #ff6a00;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  border: none; 

  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #ffd8cc; 
    color: #ff5a00;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 80px; /* To prevent content overlap with the fixed header */
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  font-size: 0.85em;
  color: black;
  border-top: 1px solid #ddd;
  width: 100%;
  margin-top: 20px;
`;

const Layout = ({ isLoggedIn, handleLogout }) => {
  return (
    <div>
      <Header>
        <Link to="/">
          <Logo src={mainlogo} alt="Main Logo" />
        </Link>
        <Nav>
          <NavLink to="/scholarships">전체장학금</NavLink>
          <NavLink to="/custom-scholarships">맞춤형장학금</NavLink>
          <NavLink to="/received-scholarships">받은장학금</NavLink>
        </Nav>
        <ButtonsContainer>
          {isLoggedIn ? (
            <>
              <Button to="/mypage">마이페이지</Button>
              <Button as="button" onClick={handleLogout}>로그아웃</Button>
            </>
          ) : (
            <>
              <Button to="/login">로그인</Button>
              <Button to="/signup">회원가입</Button>
            </>
          )}
        </ButtonsContainer>
      </Header>

      <ContentWrapper>
        <Outlet />
      </ContentWrapper>

      <Footer>
        Team Project | 치즈왕만두 <br />
        © 2024 Scholarship Finder. All Rights Reserved.
      </Footer>
    </div>
  );
};

export default Layout;