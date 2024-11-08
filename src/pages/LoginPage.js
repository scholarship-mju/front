import React, { useState } from "react";
import axios from "axios";
import { SiKakaotalk } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import mainlogo from "../png/mainlogo.png";
import {
  LoginContainer,
  Logo,
  SubtitleContainer,
  Subtitle,
  Divider,
  ButtonContainer,
  KakaoButton,
  GoogleButton,
  LoginForm,
  Title,
  InputField,
  SubmitButton,
} from "../style/LoginPageStyle";

function LoginPage({ setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
      <Logo src={mainlogo} alt="Main Logo" />
      <SubtitleContainer>
        <Divider />
        <Subtitle>로그인/회원가입</Subtitle>
        <Divider />
      </SubtitleContainer>

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
        <InputField
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit">로그인하기</SubmitButton>
      </LoginForm>

      <ButtonContainer>
        <KakaoButton onClick={() => handleLogin("kakao")}>
          <SiKakaotalk />
          카카오로 로그인하기
        </KakaoButton>
        <GoogleButton onClick={() => handleLogin("google")}>
          <FcGoogle />
          구글로 로그인하기
        </GoogleButton>
      </ButtonContainer>
    </LoginContainer>
  );
}

export default LoginPage;