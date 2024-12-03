import React from "react";
import styled from "styled-components";

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

function MyPageInfo({ memberInfo }) {
  if (!memberInfo) return <p>로딩 중...</p>;

  const renderInfoField = (label, name) => (
    <InfoItem key={name}>
      <Label>{label}:</Label>
      <Value>{memberInfo[name]}</Value>
    </InfoItem>
  );

  return (
    <div>
      <h2>내 정보</h2>
      <InfoGrid>
        {[
          { label: "닉네임", name: "nickname" },
          { label: "사용자 이름", name: "username" },
          { label: "이메일", name: "email" },
          { label: "전화번호", name: "phone" },
          { label: "대학교", name: "university" },
          { label: "나이", name: "age" },
          { label: "성별", name: "gender" },
          { label: "도", name: "province" },
          { label: "시", name: "city" },
          { label: "학과", name: "department" },
          { label: "학년", name: "grade" },
          { label: "소득 분위", name: "incomeQuantile" },
        ].map((field) => renderInfoField(field.label, field.name))}
      </InfoGrid>
    </div>
  );
}

export default MyPageInfo;
