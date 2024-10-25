import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// styled-components로 스타일 정의
const Container = styled.div`
  padding: 20px;
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #f5f5de;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  background-color: #f5f5de;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  color: #00007b;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
  padding: 20px;
  background-color: #fafae8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  margin-bottom: 15px;
  color: #00007b;
  border-bottom: 2px solid #00007b;
  padding-bottom: 10px;
`;

const InfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

const InfoItem = styled.div`
  flex: 1 1 30%;
  padding: 10px;
  background-color: #fffff1;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.span`
  font-weight: bold;
  color: #00007b;
`;

const Value = styled.span`
  margin-left: 10px;
  color: #00007b;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #fffff1;
  color: #00007b;
`;

const Button = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #fffff1;
  border-width:thin;
  color: #00007b;
  border-color : #00007b;
  border-radius: 5px;
  cursor: pointer;
`;

const ScholarshipList = styled.div`
  margin-top: 20px;
`;

const ScholarshipItem = styled.div`
  padding: 15px;
  background-color: #e8f5e9;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

function MyPage() {
  const [memberInfo, setMemberInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({});

  useEffect(() => {
    const fetchMemberInfo = async () => {
      const token = localStorage.getItem("accessToken");

      try {
        const response = await axios.get("http://localhost:8080/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMemberInfo(response.data);
        setUpdatedInfo(response.data);
        setLoading(false);
      } catch (error) {
        setError("정보를 불러오는 중 오류가 발생했습니다.");
        setLoading(false);
      }
    };

    fetchMemberInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo({ ...updatedInfo, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.post("http://localhost:8080/my", updatedInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMemberInfo(updatedInfo);
      setIsEditing(false);
    } catch (error) {
      setError("정보를 수정하는 중 오류가 발생했습니다.");
    }
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <Header>
        <Title>마이페이지</Title>
      </Header>

      <Section>
        <SectionTitle>내 정보</SectionTitle>
        {isEditing ? (
          <>
            <InfoGrid>
              <InfoItem>
                <Label>이름:</Label>
                <Input
                  type="text"
                  name="username"
                  value={updatedInfo.username || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
              <InfoItem>
                <Label>이메일:</Label>
                <Input
                  type="email"
                  name="email"
                  value={updatedInfo.email || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
              <InfoItem>
                <Label>전화번호:</Label>
                <Input
                  type="text"
                  name="phone"
                  value={updatedInfo.phone || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
              <InfoItem>
                <Label>비밀번호:</Label>
                <Input
                  type="password"
                  name="password"
                  value={updatedInfo.password || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
              <InfoItem>
                <Label>대학교:</Label>
                <Input
                  type="text"
                  name="university"
                  value={updatedInfo.university || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
              <InfoItem>
                <Label>나이:</Label>
                <Input
                  type="number"
                  name="age"
                  value={updatedInfo.age || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
              <InfoItem>
                <Label>성별:</Label>
                <Input
                  type="text"
                  name="gender"
                  value={updatedInfo.gender || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
              <InfoItem>
                <Label>도시:</Label>
                <Input
                  type="text"
                  name="city"
                  value={updatedInfo.city || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
              <InfoItem>
                <Label>전공:</Label>
                <Input
                  type="text"
                  name="department"
                  value={updatedInfo.department || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
              <InfoItem>
                <Label>학점:</Label>
                <Input
                  type="text"
                  name="grade"
                  value={updatedInfo.grade || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
              <InfoItem>
                <Label>소득 분위:</Label>
                <Input
                  type="text"
                  name="incomeQuantile"
                  value={updatedInfo.incomeQuantile || ""}
                  onChange={handleInputChange}
                />
              </InfoItem>
            </InfoGrid>
            <Button onClick={handleSaveClick}>저장</Button>
          </>
        ) : (
          <>
            <InfoGrid>
              <InfoItem>
                <Label>이름:</Label>
                <Value>{memberInfo.username}</Value>
              </InfoItem>
              <InfoItem>
                <Label>이메일:</Label>
                <Value>{memberInfo.email}</Value>
              </InfoItem>
              <InfoItem>
                <Label>전화번호:</Label>
                <Value>{memberInfo.phone}</Value>
              </InfoItem>
              <InfoItem>
                <Label>비밀번호:</Label>
                <Value>********</Value>
              </InfoItem>
              <InfoItem>
                <Label>대학교:</Label>
                <Value>{memberInfo.university}</Value>
              </InfoItem>
              <InfoItem>
                <Label>나이:</Label>
                <Value>{memberInfo.age}</Value>
              </InfoItem>
              <InfoItem>
                <Label>성별:</Label>
                <Value>{memberInfo.gender}</Value>
              </InfoItem>
              <InfoItem>
                <Label>도시:</Label>
                <Value>{memberInfo.city}</Value>
              </InfoItem>
              <InfoItem>
                <Label>전공:</Label>
                <Value>{memberInfo.department}</Value>
              </InfoItem>
              <InfoItem>
                <Label>학점:</Label>
                <Value>{memberInfo.grade}</Value>
              </InfoItem>
              <InfoItem>
                <Label>소득 분위:</Label>
                <Value>{memberInfo.incomeQuantile}</Value>
              </InfoItem>
            </InfoGrid>
            <Button onClick={handleEditClick}>수정</Button>
          </>
        )}
      </Section>

      <Section>
        <SectionTitle>찜한 장학금</SectionTitle>
        <ScholarshipList>
          {memberInfo.scholarships && memberInfo.scholarships.length > 0 ? (
            memberInfo.scholarships.map((scholarship, index) => (
              <ScholarshipItem key={index}>
                <p>이름: {scholarship.name}</p>
                <p>금액: {scholarship.amount}</p>
                <p>지급 날짜: {scholarship.date}</p>
              </ScholarshipItem>
            ))
          ) : (
            <p>등록된 장학금이 없습니다.</p>
          )}
        </ScholarshipList>
      </Section>
    </Container>
  );
}

export default MyPage;
