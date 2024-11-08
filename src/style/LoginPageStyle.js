import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  background-color: #ffffff;
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 10px 0;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0 10px;
`;

export const Divider = styled.hr`
  flex: 1;
  border: none;
  border-top: 1px solid #ddd;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const KakaoButton = styled(SocialButton)`
  background-color: #fee500;
  color: #3c1e1e;
  border: 1px solid #fee500;
`;

export const GoogleButton = styled(SocialButton)`
  background-color: #ffffff;
  color: #3c1e1e;
  border: 1px solid #e0e0e0;
`;

export const LoginForm = styled.form`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #ff6a00;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const InputField = styled.input`
  width: 90%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;

  &:focus {
    border-color: #ff6a00;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background-color: #ffece6;
  color: #ff6a00;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffd8cc;
    color: #ff5a00;
  }
`;