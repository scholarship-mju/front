import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import king from "../png/king.png";

// 카드 스타일 정의
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px; /* 로고 아래 적당한 간격 설정 */
`;

const Card = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 120px;
  width: 250px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
  text-decoration: none;
  background-color: ${(props) => props.bgColor || "#3b82f6"};
  
  &:hover {
    transform: scale(1.1);
  }
  
  p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  p.second-text {
    font-size: 0.7em;
  }
`;

// 하단 이달의 왕 영역
const KingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px; /* 카드 밑에 간격 설정 */
`;

const KingImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 10px;
`;

function HomePage({ isLoggedIn, username }) {
  return (
    <div>
      {/* 카드 컨테이너 */}
      <CardsContainer>
        <Card to="/scholarships" bgColor="#f43f5e">
          <p className="tip">전체장학금</p>
          <p className="second-text">모든 장학금</p>
        </Card>
        <Card to="/custom-scholarships" bgColor="#3b82f6">
          <p className="tip">맞춤형장학금</p>
          <p className="second-text">당신에게 맞는 장학금</p>
        </Card>
        <Card to="/received-scholarships" bgColor="#22c55e">
          <p className="tip">받은장학금</p>
          <p className="second-text">받은 장학금 내역</p>
        </Card>
      </CardsContainer>

      {/* 이달의 왕 영역 */}
      <KingSection>
        <KingImage src={king} alt="King of the Month" />
        <div
          style={{
            border: "1px solid black",
            height: "200px",
            width: "300px",
            marginTop: "20px"
          }}
        >
          {/* 이달의 왕 내용 추가 */}
        </div>
      </KingSection>
    </div>
  );
}

export default HomePage;
