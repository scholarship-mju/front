import React, { useState } from "react";
import {
  AdditionalInfoContainer,
  Title,
  InputField,
  Label,
  SubmitButton,
  FormContainer,
} from "../style/AdditionalInfoPageStyle";

function AdditionalInfoPage({ onSubmit }) {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [languageScores, setLanguageScores] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const additionalData = {
      name,
      birthdate,
      phone,
      email,
      location,
      languageScores,
      additionalInfo,
    };
    onSubmit(additionalData);
    window.location.href = "/";
  };

  return (
    <AdditionalInfoContainer>
      <Title>추가 정보 입력</Title>
      <FormContainer onSubmit={handleSubmit}>
        <Label>이름</Label>
        <InputField
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Label>생년월일</Label>
        <InputField
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <Label>전화번호</Label>
        <InputField
          type="tel"
          placeholder="전화번호"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Label>이메일</Label>
        <InputField
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>위치</Label>
        <InputField
          type="text"
          placeholder="거주 지역"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <Label>언어 점수</Label>
        <InputField
          type="text"
          placeholder="언어 점수 (예: TOEIC 900)"
          value={languageScores}
          onChange={(e) => setLanguageScores(e.target.value)}
        />

        <Label>추가 정보</Label>
        <InputField
          type="text"
          placeholder="추가 정보를 입력하세요"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />

        <SubmitButton type="submit">제출</SubmitButton>
      </FormContainer>
    </AdditionalInfoContainer>
  );
}

export default AdditionalInfoPage;