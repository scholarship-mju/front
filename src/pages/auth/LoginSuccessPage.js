import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginSuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 accessToken 및 isFirstLogin 추출
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const isFirstLogin = params.get("isFirstLogin") === "true"; // 문자열 "true"를 Boolean으로 변환

    console.log("accessToken = ", accessToken); // 토큰 확인
    console.log("isFirstLogin = ", isFirstLogin); // 첫 로그인 여부 확인

    if (accessToken) {
      // accessToken을 로컬 스토리지에 저장
      localStorage.setItem("accessToken", accessToken);
      console.log("accessToken이 로컬 스토리지에 저장되었습니다.");

      // 첫 로그인 여부에 따른 경로 이동
      if (isFirstLogin) {
        navigate("/new-user"); // 첫 로그인 시 사용자 설정 페이지로 이동
      } else {
        navigate("/"); // 기존 사용자 홈 화면으로 이동
      }
    } else {
      console.error("Access token이 없습니다.");
    }
  }, [navigate]);

  return (
    <div>
      <h2>로그인 성공</h2>
      <p>잠시만 기다려주세요...</p>
    </div>
  );
}

export default LoginSuccessPage;
