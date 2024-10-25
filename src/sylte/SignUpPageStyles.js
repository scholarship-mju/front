// SignUpPageStyles.js

import styled from "styled-components";

// Define your color variables
export const ivory = "#FFFFF0";
export const navy = "#000080";
export const lightNavy = "#000066";
export const darkIvory = "#F5F5DC";

// Style for the main container
export const SignUpContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${ivory};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

// Style for the title
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

// Style for input fields
export const InputField = styled.input`
  width: 95%;
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
`;

// Style for error messages
export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: -5px 0 10px 0;
`;

// Style for the submit button
export const SubmitButton = styled.button`
  width: 100%;
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