import React, { useState } from "react";
import { InputField, SubmitButton, AdditionalInfoContainer } from "../style/AdditionalInfoPageStyles";

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
    <div style={{ backgroundColor: "#F5F5DC", minHeight: "100vh", padding: "20px" }}>
      <AdditionalInfoContainer>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="date"
            placeholder="생년월일"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputField
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="위치"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="언어 점수"
            value={languageScores}
            onChange={(e) => setLanguageScores(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="추가 정보"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />
          <SubmitButton type="submit">제출</SubmitButton>
        </form>
      </AdditionalInfoContainer>
    </div>
  );
}

export default AdditionalInfoPage;