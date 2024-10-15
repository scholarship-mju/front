import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name);
    navigate("/");
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;