import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import mainlogo from "../png/mainlogo.png";

import {
  Header,
  Logo,
  Nav,
  NavLink,
  ButtonsContainer,
  StyledLinkButton,
  StyledButtonElement,
  ContentWrapper,
  Footer,
} from "../style/LayoutStyle";

const Layout = ({ isLoggedIn = false, handleLogout }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const handleLogoutAndRedirect = () => {
    handleLogout(); // 기존 로그아웃 로직 실행
    navigate("/"); // 메인 페이지로 리다이렉트
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header>
        <Link to="/">
          <Logo src={mainlogo} alt="Main Logo" />
        </Link>
        <Nav>
          <NavLink
            to="/scholarships"
            isHovered={hoveredLink === "scholarships"}
            hoverState={hoveredLink !== null}
            onMouseEnter={() => handleMouseEnter("scholarships")}
            onMouseLeave={handleMouseLeave}
          >
            전체장학금
          </NavLink>
          <NavLink
            to="/custom-scholarships"
            isHovered={hoveredLink === "custom-scholarships"}
            hoverState={hoveredLink !== null}
            onMouseEnter={() => handleMouseEnter("custom-scholarships")}
            onMouseLeave={handleMouseLeave}
          >
            맞춤형장학금
          </NavLink>
          <NavLink
            to="/received-scholarships"
            isHovered={hoveredLink === "received-scholarships"}
            hoverState={hoveredLink !== null}
            onMouseEnter={() => handleMouseEnter("received-scholarships")}
            onMouseLeave={handleMouseLeave}
          >
            받은장학금
          </NavLink>
        </Nav>
        <ButtonsContainer>
          {isLoggedIn ? (
            <>
              <StyledLinkButton to="/mypage">마이페이지</StyledLinkButton>
              <StyledButtonElement onClick={handleLogoutAndRedirect}>
                로그아웃
              </StyledButtonElement>
            </>
          ) : (
            <StyledLinkButton to="/login">로그인/회원가입</StyledLinkButton>
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