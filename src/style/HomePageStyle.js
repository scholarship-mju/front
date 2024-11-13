import styled, { createGlobalStyle } from "styled-components";

/* 브라우저 기본 여백 제거 */
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

export const Banner = styled.div`
  width: 100vw;
  height: calc(100vw / 5.56);
  max-width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    height: calc(100vw / 3);
  }

  @media (max-width: 480px) {
    height: calc(100vw / 2);
  }
`;

export const SwiperSlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 10px;
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
    padding: 10px 0;
  }
`;

export const KingText = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 70px;
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
  font-size: 1.1em;
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