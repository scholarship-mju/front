import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import mainlogo from "../png/mainlogo.png";
import {
  Header,
  Logo,
  Nav,
  NavLink,
  ButtonsContainer,
  StyledButton,
  ContentWrapper,
  Footer,
} from "../style/LayoutStyle";

const Layout = ({ isLoggedIn, handleLogout }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div>
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
              <StyledButton as={Link} to="/mypage">
                마이페이지
              </StyledButton>
              <StyledButton as="button" onClick={handleLogout}>
                로그아웃
              </StyledButton>
            </>
          ) : (
            <>
              <StyledButton as={Link} to="/login">
                로그인
              </StyledButton>
              <StyledButton as={Link} to="/signup">
                회원가입
              </StyledButton>
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