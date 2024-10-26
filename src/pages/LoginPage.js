import React, { useState } from "react";
import styled from "styled-components";

const ivory = "#FFFFF0";
const navy = "#000080";
const lightNavy = "#000066";
const darkIvory = "#F5F5DC";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  background-color: ${darkIvory};
`;

const LoginForm = styled.form`
  background-color: ${ivory};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  color: ${navy};
  text-align: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  &[type="text"] {
    width: 95%;
    height: 30px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid ${navy};
    border-radius: 5px;
    background-color: ${ivory};
    color: ${lightNavy};
    font-size: 16px;

    &:focus {
      border-color: ${lightNavy};
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  width: 87%;
  padding: 10px;
  background-color: ${navy};
  color: ${ivory};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${lightNavy};
  }
`;

const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialLoginButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${lightNavy};
  color: ${ivory};
  font-weight: bold;
  font-size: 14px;
`;

function LoginPage({ setIsLoggedIn }) {
  const [name, setName] = useState("");

  const handleLogin = (provider) => {
    try {
      // OAuth2 로그인 경로로 리다이렉트
      window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`;
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <LoginContainer>
      <LoginForm
        onSubmit={(e) => {
          e.preventDefault();
          // 수동 로그인 처리 (필요 시 구현)
          handleLogin("manual");
        }}
      >
        <Title>로그인</Title>
        <InputField
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </LoginForm>

      <h3>소셜 로그인</h3>
      <SocialLoginContainer>
        <SocialLoginButton onClick={() => handleLogin("kakao")}>
          카카오 로그인
        </SocialLoginButton>
        <SocialLoginButton onClick={() => handleLogin("google")}>
          구글 로그인
        </SocialLoginButton>
      </SocialLoginContainer>
    </LoginContainer>
  );
}

export default LoginPage;