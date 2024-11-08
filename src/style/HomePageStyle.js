import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
`;

export const KingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const KingText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 10px;
  justify-content: center;
  width: 100%;
`;

export const ListBox = styled.div`
  border: 2px solid black;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: bold;
  color: black;
  background-color: #f9f9f9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;
