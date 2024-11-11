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

  const handleLogin = async (provider) => {
    try {
      window.location.href = `http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/${provider}`;

      // OAuth2 인증 후 사용자 정보를 확인하여 첫 로그인 여부를 처리
      const response = await axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/oauth2/current-user", {
        withCredentials: true,
      });

      if (response.data) {
        if (response.data === true) { // 첫 로그인 여부가 true인지 확인
          window.location.href = "/new-user-page"; // 처음 로그인한 사용자 처리
        } else {
          setIsLoggedIn(true); // 기존 사용자 처리
        }
      }
    } catch (error) {
      console.error("Error during login process:", error);
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
