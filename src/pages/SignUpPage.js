import React from "react";

function SignUpPage() {
  return (
    <div>
      <h2>회원가입</h2>
      <form>
        <input type="text" placeholder="이름 입력" />
        <input type="email" placeholder="이메일 입력" />
        <input type="password" placeholder="비밀번호 입력" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUpPage;