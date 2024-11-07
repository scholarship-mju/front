import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import mainlogo from "../png/mainlogo.png";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  background-color: #fafafa;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #ff6a00;
  margin-bottom: 20px;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;

  &:focus {
    border-color: #ff6a00;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background-color: #ff6a00;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e55a00;
  }
`;

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  align-items: center;
`;

const SocialLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  gap: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

const KakaoButton = styled(SocialLoginButton)`
  background-color: #fee500;
  color: #3c1e1e;

  svg {
    font-size: 20px;
  }
`;

const GoogleButton = styled(SocialLoginButton)`
  background-color: #ffffff;
  color: #757575;
  border: 1px solid #e0e0e0;

  svg {
    font-size: 20px;
    color: #757575;
  }
`;

function LoginPage({ setIsLoggedIn }) {
  const [name, setName] = useState("");

  const handleLogin = (provider) => {
    window.location.href = `ec2-52-78-181-84.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/${provider}`;
  };

  const kakaoLogin = async () => {
    try {
      const response = await axios.get("ec2-52-78-181-84.ap-northeast-2.compute.amazonaws.com:8080/login");
      if (response.status === 200) {
        setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
      }
    } catch (error) {
      console.error("카카오 로그인 실패:", error);
    }
  };

  return (
    <LoginContainer>
      <Logo src={mainlogo} alt="mainlogo" />
      <LoginForm
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin("manual");
        }}
      >
        <Title>로그인</Title>
        <InputField
          type="text"
          placeholder="아이디 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </LoginForm>

      <h3>소셜 로그인</h3>
      <SocialLoginContainer>
      <KakaoButton onClick={() => handleLogin("kakao")}>
          카카오 로그인
        </KakaoButton>
        <GoogleButton onClick={() => handleLogin("google")}>
          구글 로그인
        </GoogleButton>
      </SocialLoginContainer>
    </LoginContainer>
  );
}

export default LoginPage;