import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  max-width: 2000px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const SwiperSlideImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 5.56;
  object-fit: cover;
  object-position: center;
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
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 70px;
  padding: 10px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
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
    width: 120px;
    height: 120px;
    font-size: 0.9em;
  }
`;