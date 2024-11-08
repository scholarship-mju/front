import styled from "styled-components";

export const ivory = "#FFFFF0";
export const navy = "#000080";
export const lightNavy = "#000066";
export const orange = "#FF6A00";

export const SignUpContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

export const Title = styled.h2`
  color: #ff6a00;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  object-fit: cover;
`;

export const UploadButton = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${orange};
  color: white;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  font-size: 18px;
`;

export const InputField = styled.input`
  width: 90%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    background-color: #ffd8cc;
    color: black;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: -5px 0 10px 0;
  text-align: left;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ffece6;
  color: #ff6a00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #ffd8cc;
    color: #ff5a00;
  }
`;