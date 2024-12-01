import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 768px) {
    height: 280px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

export const SwiperSlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  background-color: #f2f3f6;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 auto;
  gap: 20px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    gap: 10px;
  }
`;

export const KingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

export const KingLogo = styled.img`
  width: 15%;
  max-width: 200px;
  margin-bottom: 10px;
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 20%;
  }

  @media (max-width: 480px) {
    width: 25%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 60px;
  padding: 10px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    gap: 40px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const ListBox = styled.div`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
  color: black;
  background-color: #f2f3f6;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    font-size: 1em;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    font-size: 0.8em;
  }
`;