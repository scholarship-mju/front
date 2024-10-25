import React, { useState } from "react";
import {
  SignUpContainer,
  Title,
  InputField,
  ErrorMessage,
  SubmitButton,
} from "../style/SignUpPageStyles";

const idDuplicateCheck = async (id) => {
  const dummyResponse = { available: id !== "taken" };
  return dummyResponse.available;
};

function SignUpPage({ onNext }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const [isIdCheck, setIsIdCheck] = useState(false);
  const [isIdAvailable, setIsIdAvailable] = useState(false);

  const idCheckHandler = async (idValue) => {
    const idRegex = /^[a-z\d]{5,10}$/;
    
    if (!idValue) {
      setIdError('아이디를 입력해주세요.');
      setIsIdAvailable(false);
      return false;
    } else if (!idRegex.test(idValue)) {
      setIdError('아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.');
      setIsIdAvailable(false);
      return false;
    }
    
    try {
      const responseData = await idDuplicateCheck(idValue);
      if (responseData) {
        setIdError('사용 가능한 아이디입니다.');
        setIsIdCheck(true);
        setIsIdAvailable(true);
        return true;
      } else {
        setIdError('이미 사용중인 아이디입니다.');
        setIsIdAvailable(false);
        return false;
      }
    } catch (error) {
      alert('서버 오류입니다. 관리자에게 문의하세요.');
      console.error(error);
      return false;
    }
  };

  const passwordCheckHandler = (passwordValue, confirmValue) => {
    const passwordRegex = /^[a-z\d!@*&-_]{8,16}$/;
    if (!passwordValue) {
      setPasswordError('비밀번호를 입력해주세요.');
      return false;
    } else if (!passwordRegex.test(passwordValue)) {
      setPasswordError('비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다.');
      return false;
    } else if (confirmValue && confirmValue !== passwordValue) {
      setPasswordError('');
      setConfirmError('비밀번호가 일치하지 않습니다.');
      return false;
    } else {
      setPasswordError('');
      setConfirmError('');
      return true;
    }
  };

  const onChangeIdHandler = (e) => {
    const idValue = e.target.value;
    setId(idValue);
    idCheckHandler(idValue);
  };

  const onChangePasswordHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
      passwordCheckHandler(value, confirm);
    } else {
      setConfirm(value);
      passwordCheckHandler(password, value);
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    
    const idCheckResult = await idCheckHandler(id);
    if (!idCheckResult) return;

    if (!isIdCheck || !isIdAvailable) {
      alert('아이디 중복 검사를 해주세요.');
      return;
    }

    const passwordCheckResult = passwordCheckHandler(password, confirm);
    if (!passwordCheckResult) return;

    onNext({ id, password });
  };

  return (
    <SignUpContainer>
      <Title>회원가입</Title>
      <form onSubmit={signupHandler}>
        <InputField
          type="text"
          placeholder="아이디 입력"
          value={id}
          onChange={onChangeIdHandler}
          maxLength={10}
        />
        {idError && <ErrorMessage>{idError}</ErrorMessage>}

        <InputField
          type="password"
          placeholder="비밀번호 입력"
          name="password"
          value={password}
          onChange={onChangePasswordHandler}
          maxLength={16}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

        <InputField
          type="password"
          placeholder="비밀번호 확인"
          name="confirm"
          value={confirm}
          onChange={onChangePasswordHandler}
          maxLength={16}
        />
        {confirmError && <ErrorMessage>{confirmError}</ErrorMessage>}

        <SubmitButton type="submit">다음</SubmitButton>
      </form>
    </SignUpContainer>
  );
}

export default SignUpPage;