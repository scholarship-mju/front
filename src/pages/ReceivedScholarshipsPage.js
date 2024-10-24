import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 기존 colors 객체 재사용
const colors = {
  ivory: "#FFFFF0",
  navy: "#000080",
  lightNavy: "#000066",
  darkIvory: "#F5F5DC",
};

// 스타일링된 컴포넌트
const Background = styled.div`
  background-color: ${colors.darkIvory};
  min-height: 100vh;
  padding: 20px;
`;

const Container = styled.div`
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${colors.ivory};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
  margin-top: 50px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f7eb;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.navy};
`;

const Nav = styled.div`
  display: flex;
  gap: 10px;
`;

const NavButton = styled(Link)`
  padding: 10px 15px;
  background-color: ${colors.navy};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.lightNavy};
  }
`;

const Title = styled.h2`
  text-align: center;
  color: ${colors.navy};
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  padding: 12px;
  background-color: ${colors.navy};
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 1.1rem;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin-right: 10px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${colors.navy};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.lightNavy};
  }
`;

const WarningText = styled.p`
  margin-top: 20px;
  color: #e74c3c;
  text-align: center;
`;

const TotalAmount = styled.p`
  margin-top: 10px;
  width: 400px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  color: yellow;
  background-color: #9370db;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  font-size: 0.9em;
  color: ${colors.navy};
`;

function ReceivedScholarshipsPage() {
  const [scholarships, setScholarships] = useState([
    { id: 1, name: "장학금 1", amount: 1000000 }, // 장학금 예시 추가
  ]);
  const [newScholarship, setNewScholarship] = useState("");

  const handleAddScholarship = () => {
    if (newScholarship.trim()) {
      if (scholarships.find((s) => s.name === newScholarship)) {
        alert("이미 등록된 장학금입니다.");
      } else {
        setScholarships([
          ...scholarships,
          { id: scholarships.length + 1, name: newScholarship, amount: 0 }, // 초기 금액 설정
        ]);
        setNewScholarship("");
      }
    }
  };

  // 장학금 총액 계산
  const totalAmount = scholarships.reduce(
    (total, scholarship) => total + (scholarship.amount || 0),
    0,
  );

  return (
    <Background>
      <Container>
        <Header>
          <Logo>숨은 장학금 찾기</Logo>
          <Nav>
            <NavButton to="/login">로그인</NavButton>
            <NavButton to="/signup">회원가입</NavButton>
            <NavButton to="/mypage">마이페이지</NavButton>
          </Nav>
        </Header>

        <Title>받은 장학금</Title>

        {/* 장학금 리스트 */}
        <Table>
          <thead>
            <tr>
              <TableHeader>고유 번호</TableHeader>
              <TableHeader>장학금</TableHeader>
              <TableHeader>장학금액</TableHeader>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship) => (
              <tr key={scholarship.id}>
                <TableCell>{scholarship.id}</TableCell>
                <TableCell>{scholarship.name}</TableCell>
                <TableCell>{scholarship.amount} 원</TableCell>{" "}
                {/* 장학금액 표시 */}
              </tr>
            ))}
          </tbody>
        </Table>

        {/* 장학금 등록 */}
        <InputContainer>
          <Input
            type="text"
            placeholder="받은 장학금 입력"
            value={newScholarship}
            onChange={(e) => setNewScholarship(e.target.value)}
          />
          <SubmitButton onClick={handleAddScholarship}>등록하기</SubmitButton>
        </InputContainer>

        <WarningText>이미 등록된 장학금이 있을 수 있습니다.</WarningText>

        {/* 총액 표시 */}
        <TotalAmount>장학금 총액: {totalAmount} 원</TotalAmount>
      </Container>

      <Footer>
        Team Project | 치즈왕만두 <br />© 2024 Scholarship Finder. All Rights
        Reserved.
      </Footer>
    </Background>
  );
}

export default ReceivedScholarshipsPage;
