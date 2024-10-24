import React, { useState } from "react";
import styled from "styled-components";

const ivory = "#FFFFF0";
const navy = "#000080";
const lightNavy = "#000066";
const darkIvory = "#F5F5DC";

const SignUpContainer = styled.div`
  background-color: ${ivory};
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: ${navy};
  text-align: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${navy};
  border-radius: 5px;
  background-color: ${darkIvory};
  color: ${lightNavy};
  font-size: 16px;

  &:focus {
    border-color: ${lightNavy};
    outline: none;
  }
`;

const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${navy};
  border-radius: 5px;
  background-color: ${darkIvory};
  color: ${lightNavy};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${navy};
  border-radius: 5px;
  background-color: ${darkIvory};
  color: ${lightNavy};
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: ${navy};
  color: ${ivory};
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${lightNavy};
  }
`;

const IdCheckButton = styled.button`
  padding: 5px 10px;
  background-color: ${navy};
  color: ${ivory};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${lightNavy};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

function SignUpPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [languageScore, setLanguageScore] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [idAvailable, setIdAvailable] = useState(null);

  const handleIdCheck = () => {
    fetch(`/check-id?username=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setIdAvailable(data.available);
        if (data.available) {
          alert("사용 가능한 ID입니다.");
        } else {
          alert("이미 사용 중인 ID입니다.");
        }
      })
      .catch((error) => console.error("ID 중복 확인 오류:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const signupData = {
      id,
      password,
      name,
      dob,
      phone,
      email,
      location,
      languageScore,
      additionalInfo,
    };

    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("회원가입 성공");
        } else {
          alert("회원가입 실패");
        }
      })
      .catch((error) => console.error("회원가입 오류:", error));
  };

  return (
    <div style={{ backgroundColor: darkIvory, minHeight: "85vh", padding: "20px" }}>
    <SignUpContainer>
      <Title>회원가입</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <InputField
            type="text"
            placeholder="아이디 입력"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <IdCheckButton type="button" onClick={handleIdCheck}>
            ID 중복 확인
          </IdCheckButton>
          {idAvailable === false && (
            <ErrorMessage>이미 사용 중인 ID입니다.</ErrorMessage>
          )}
        </div>
        <InputField
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="전화번호 입력"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SelectField
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">사는 지역 선택</option>
          <option value="서울">서울</option>
          <option value="부산">부산</option>
          <option value="대구">대구</option>
        </SelectField>
        <SelectField
          value={languageScore}
          onChange={(e) => setLanguageScore(e.target.value)}
        >
          <option value="">어학 성적 선택</option>
          <option value="TOEIC">TOEIC</option>
          <option value="TOEFL">TOEFL</option>
          <option value="IELTS">IELTS</option>
        </SelectField>
        <TextArea
          placeholder="추가 정보 입력"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />
      </form>
    </SignUpContainer>
    <Label>
    <SubmitButton type="submit">회원가입</SubmitButton>
    </Label>
    </div>
  );
}

export default SignUpPage;