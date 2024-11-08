import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

export const Logo = styled.img`
  width: 210px;
  height: auto;
  cursor: pointer;
  margin-left: 200px;
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  margin: 0 20px;
  font-size: 1em;
  font-weight: bold;
  color: ${(props) =>
    props.hoverState && !props.isHovered ? "gray" : "black"};
  text-decoration: none;
  transition: color 0.3s ease;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 200px;
`;

export const StyledButton = styled.button`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: #ffece6;
  color: #ff6a00;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transition: color 0.3s ease, background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #ffd8cc;
    color: #ff5a00;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 120px;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  font-size: 0.85em;
  color: black;
  border-top: 1px solid #ddd;
  width: 100%;
  margin-top: 20px;
`;
