import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

/* 공통 스타일 정의 */
const buttonStyles = css`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: #ffece6;
  color: #ff6a00;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #ffd8cc;
    color: #ff5a00;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

/* LinkButton 스타일 */
export const StyledLinkButton = styled(Link)`
  ${buttonStyles}
`;

/* ButtonElement 스타일 */
export const StyledButtonElement = styled.button`
  ${buttonStyles}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 210px;
  height: auto;
  cursor: pointer;
  margin-left: 200px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavLink = styled(Link)`
  margin: 0 20px;
  font-size: 1em;
  font-weight: bold;
  color: ${(props) => (props.hoverState && !props.isHovered ? "gray" : "black")};
  text-decoration: none;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 200px;

  @media (max-width: 768px) {
    margin-right: 0;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 120px;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  font-size: 0.85em;
  color: black;
  border-top: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.75em;
    padding: 15px;
  }
`;