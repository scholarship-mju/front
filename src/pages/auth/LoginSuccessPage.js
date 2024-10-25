import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginSuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 accessToken 추출
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    console.log("accessToken = ", accessToken); // 여기서 콘솔에 찍힌 값을 확인

    if (accessToken) {
      // accessToken을 로컬 스토리지에 저장
      localStorage.setItem("accessToken", accessToken);
      console.log("accessToken이 로컬 스토리지에 저장되었습니다.");

      // 홈 화면으로 리다이렉트
      navigate("/"); // 리다이렉트
    } else {
      console.error("Access token이 없습니다.");
      console.log("ac = ", localStorage.getItem("accessToken"));
    }
  }, [navigate]);

  return (
    <div>
      <h2>로그인 성공</h2>
      <p>잠시만 기다려주세요, 곧 홈 화면으로 이동합니다...</p>
    </div>
  );
}

export default LoginSuccessPage;
