import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import king from "../png/king.png";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 150px;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  background-color: ${(props) => props.bgColor || "#9370DB"};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor || "#8A2BE2"};
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  margin-top: 20px;
`;

const Card = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 400px;
  width: 400px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
  text-decoration: none;
  background-color: ${(props) => props.bgColor || "#D8BFD8"};

  &:hover {
    transform: scale(1.05);
  }

  p.tip {
    font-size: 1.2em;
    font-weight: 700;
  }

  p.second-text {
    font-size: 0.9em;
  }
`;

const KingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const KingImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
`;

const ListBox = styled.div`
  border: 2px solid #8A2BE2;
  border-radius: 10px;
  height: 70px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  background-color: #E6E6FA;
  color: #4B0082;
  transition: all 0.3s ease;

  &:hover {
    background-color: #DDA0DD;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

function HomePage({ isLoggedIn, username }) {
  return (
    <div style={{ backgroundColor: "#F0E6FF", minHeight: "100vh", padding: "20px" }}>
      <ButtonsContainer>
        {isLoggedIn ? (
          <Button to="/mypage" bgColor="#9370DB" hoverColor="#8A2BE2">
            마이페이지
          </Button>
        ) : (
          <>
            <Button to="/login" bgColor="#9370DB" hoverColor="#8A2BE2">
              로그인
            </Button>
            <Button to="/signup" bgColor="#DDA0DD" hoverColor="#DA70D6">
              회원가입
            </Button>
          </>
        )}
      </ButtonsContainer>

      <CardsContainer>
        <Card to="/scholarships" bgColor="#DDA0DD">
          <p className="tip">전체장학금</p>
          <p className="second-text">모든 장학금</p>
        </Card>
        <Card to="/custom-scholarships" bgColor="#9370DB">
          <p className="tip">맞춤형장학금</p>
          <p className="second-text">당신에게 맞는 장학금</p>
        </Card>
        <Card to="/received-scholarships" bgColor="#BA55D3">
          <p className="tip">받은장학금</p>
          <p className="second-text">받은 장학금 내역</p>
        </Card>
        <Card bgColor="#D8BFD8">
          <KingSection>
            <KingImage src={king} alt="King of the Month" />
            <ListContainer>
              <ListBox>명단 1</ListBox>
              <ListBox>명단 2</ListBox>
              <ListBox>명단 3</ListBox>
              <ListBox>명단 4</ListBox>
            </ListContainer>
          </KingSection>
        </Card>
      </CardsContainer>
    </div>
  );
}

export default HomePage;