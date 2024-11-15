import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// 스타일 정의

const SectionTitle = styled.h2`
  margin-bottom: 15px;
  color: black;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
`;
const Container = styled.div`
  padding: 20px;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const Header = styled.header`
//   width: 100%;
//   background-color: #fdf3e7;
//   padding: 20px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

const Title = styled.h1`
  margin: 0;
  
  color: black;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const InfoItem = styled.div`
  flex: 1 1 30%;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.span`
  font-weight: bold;
  color: black;
`;

const Value = styled.span`
  margin-left: 10px;
  color: black;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #white;
  color: wthie;
`;

const Button = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid #e67e22;
  color: #ff6a00;
  border-radius: 5px;
  cursor: pointer;
`;

const ScholarshipItem = styled.div`
  padding: 15px;
  background-color: black;
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
        const response = await axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMemberInfo(response.data);
        setUpdatedInfo(response.data);
      } catch {
        setError("정보를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchMemberInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.post("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/my", updatedInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMemberInfo(updatedInfo);
      setIsEditing(false);
    } catch {
      setError("정보를 수정하는 중 오류가 발생했습니다.");
    }
  };

  const renderInfoField = (label, name, type = "text") => (
    <InfoItem key={name}>
      <Label>{label}:</Label>
      {isEditing ? (
        <Input type={type} name={name} value={updatedInfo[name] || ""} onChange={handleInputChange} />
      ) : (
        <Value>{name === "password" ? "********" : memberInfo[name]}</Value>
      )}
    </InfoItem>
  );

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      {/* <Header> */}
        <Title>마이페이지</Title>
      {/* </Header> */}
      <Section>
        <SectionTitle>내 정보</SectionTitle>
        <InfoGrid>
          {["username", "email", "phone", "password", "university", "age", "gender", "city", "department", "grade", "incomeQuantile"].map((field) =>
            renderInfoField(field.charAt(0).toUpperCase() + field.slice(1), field, field === "password" ? "password" : "text")
          )}
        </InfoGrid>
        {isEditing ? <Button onClick={handleSaveClick}>저장</Button> : <Button onClick={() => setIsEditing(true)}>수정</Button>}
      </Section>
      <Section>
        <SectionTitle>찜한 장학금</SectionTitle>
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
      </Section>
    </Container>
  );
}

export default MyPage;
