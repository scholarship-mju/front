import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    try {
      // OAuth2 로그인 경로로 리다이렉트
      window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`;
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // 수동 로그인 처리 (필요 시 구현)
          handleLogin("manual");
        }}
      >
        <input
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>

      <h3>소셜 로그인</h3>
      <div>
        {/* 카카오 로그인 버튼 */}
        <button onClick={() => handleLogin("kakao")}>카카오 로그인</button>

        {/* 구글 로그인 버튼 */}
        <button onClick={() => handleLogin("google")}>구글 로그인</button>
      </div>
    </div>
  );
}

export default LoginPage;
