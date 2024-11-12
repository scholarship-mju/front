import styled from "styled-components";

export const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #ff6a00;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Label = styled.label`
  width: 100%;
  max-width: 400px;
  font-size: 14px;
  color: black;
  text-align: left;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  width: 95%;
  max-width: 400px;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  color: black;

  &:focus {
    border-color: #ff6a00;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 12px;
  margin-top: 20px;
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

export const FormContainer = styled.form`
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  text-align: left;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const SelectField = styled.select`
  width: 102%;
  height: 45px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 14px;
  color: black;
  appearance: none;
  cursor: pointer;

  &:focus {
    border-color: #ff6a00;
    outline: none;
  }

  option {
    color: black;
    font-size: 14px;
    padding: 10px;
  }
`;