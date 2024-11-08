import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #ff6a00;
  font-weight: bold;
`;

export const AllAgreementBox = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 20px auto;
  padding: 15px;
  border: 1px solid #333;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TermsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  max-width: 400px;
  margin: 20px auto;
`;

export const TermsItem = styled.li`
  margin-bottom: 15px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;

export const CustomCheckbox = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.checked ? "#ff6a00" : "transparent")};
  border: 2px solid #333;
  position: relative;

  &::before {
    content: "${(props) => (props.checked ? "✔" : "")}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 14px;
  }
`;

export const NextButton = styled.button`
  width: 50%;
  padding: 15px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: #ff6a00;
  color: #fff;
  transition: background-color 0.3s;
  margin: 0 auto;
  display: block;

  &:disabled {
    background-color: #ddd;
    color: #aaa;
    cursor: not-allowed;
  }
`;
