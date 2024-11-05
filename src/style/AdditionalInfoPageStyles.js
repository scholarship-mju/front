import styled from "styled-components";

export const ivory = "#FFFFF0";
export const navy = "#000080";
const lightNavy = "#000066";
export const darkIvory = "#F5F5DC";

export const AdditionalInfoContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${ivory};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const InputField = styled.input`
  &[type="text"], &[type="date"], &[type="tel"], &[type="email"] {
    width: 95%;
    height: 30px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid ${navy};
    border-radius: 5px;
    background-color: ${ivory};
    color: ${lightNavy};
    font-size: 16px;

    &:focus {
      border-color: ${lightNavy};
      outline: none;
    }
  }
`;

export const SelectField = styled.select`
  width: 95%;
  height: 45px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${navy};
  border-radius: 5px;
  background-color: ${ivory};
  color: ${lightNavy};
  font-size: 16px;

  &:focus {
    border-color: ${lightNavy};
    outline: none;
  }

  option {
    background-color: ${ivory};
    color: ${lightNavy};
    padding: 10px;
  }
`;

export const SubmitButton = styled.button`
  width: 90%;
  padding: 12px;
  background-color: ${navy};
  color: ${ivory};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  display: block;
`;
