import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import king from "../png/king.png";

const colors = {
  ivory: "#FFFFF0",
  navy: "#000080",
  lightNavy: "#000066",
  darkIvory: "#F5F5DC"
};

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
  color: ${colors.ivory};
  background-color: ${colors.navy};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colors.lightNavy};
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  justify-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
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
  color: ${colors.navy};
  cursor: pointer;
  transition: 400ms;
  text-decoration: none;
  background-color: ${colors.ivory};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  p.tip {
    font-size: 1.4em;
    font-weight: 700;
    color: ${colors.navy};
  }

  p.second-text {
    font-size: 1em;
    color: ${colors.lightNavy};
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
  margin-bottom: 20px;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  justify-items: center;
`;

const ListBox = styled.div`
  border: 3px solid ${colors.navy};
  border-radius: 10px;
  height: 70px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  background-color: ${colors.ivory};
  color: ${colors.navy};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.darkIvory};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

function HomePage({ isLoggedIn, username }) {
  return (
    <div style={{ backgroundColor: colors.darkIvory, minHeight: "100vh", padding: "20px" }}>
      <ButtonsContainer>
        {isLoggedIn ? (
          <Button to="/mypage">
            마이페이지
          </Button>
        ) : (
          <>
            <Button to="/login">
              로그인
            </Button>
            <Button to="/signup" style={{ backgroundColor: colors.lightNavy }}>
              회원가입
            </Button>
          </>
        )}
      </ButtonsContainer>

      <CardsContainer>
        <Card to="/scholarships">
          <p className="tip">전체장학금</p>
          <p className="second-text">모든 장학금</p>
        </Card>
        <Card to="/custom-scholarships">
          <p className="tip">맞춤형장학금</p>
          <p className="second-text">당신에게 맞는 장학금</p>
        </Card>
        <Card to="/received-scholarships">
          <p className="tip">받은장학금</p>
          <p className="second-text">받은 장학금 내역</p>
        </Card>
        <Card>
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