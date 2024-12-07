import styled from "styled-components";
import { Link } from "react-router-dom";

export const colors = {
  white: "white",
  orange: "#ff6a00",
  background_color: "#ffd8cc",
  white: "white",
};
// 스타일링된 컴포넌트
export const Background = styled.div`
  min-height: 100vh;
  padding: 20px;
`;

export const Container = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1600px;
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const MyButton = styled(Link)`
  margin-left: 10px;
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  background-color: #ffece6;
  color: ${colors.orange};
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;
  &:hover {
    background-color: ${colors.background_color};
    color: #ff5a00;
  }
`;

export const ReceiveLogo = styled.img`
  max-width: 16%;
  display: block;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  padding: 12px;
  background-color: ${colors.orange};
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const TableHeaderRight = styled.th`
  padding: 12px;
  background-color: ${colors.orange};
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 1.1rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TableHeaderLeft = styled.th`
  padding: 12px;
  background-color: ${colors.orange};
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 1.1rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
`;

export const TableBody = styled.tbody`
  .fade-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 300ms ease-in,
      transform 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition:
      opacity 300ms ease-in,
      transform 300ms ease-in;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

export const WarningText = styled.p`
  margin-top: 20px;
  color: #e74c3c;
  text-align: center;
`;

export const TotalAmount = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 280px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  color: white;
  background-color: ${colors.orange};
`;

export const Form = styled.form`
  border: 2px solid black;
  border-radius: 10px;
  margin: 0px 10px;
  --timing: 0.3s;
  --width-of-input: 200px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2f2ee9;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg, #fff);

  &:focus-within {
    border-radius: var(--after-border-radius);
  }

  &:focus-within::before {
    transform: scale(1);
  }

  &::before {
    content: "";
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
  }
`;

export const Input = styled.input`
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: #8b8ba7;
`;

export const ResetButton = styled(Button)`
  opacity: 0;
  visibility: hidden;

  &:focus + .reset {
    opacity: 1;
    visibility: visible;
  }
`;

export const Svg = styled.svg`
  width: 17px;
  margin-top: 3px;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

export const SingleDataButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;

  &:hover {
    background-color: #ff6a00;
    color: white;
  }
`;

export const AuthButton = styled.button`
  background-color: ${(props) => {
    switch (props.status) {
      case 2: // VERIFIED
        return "#2ecc71";
      case 1: // VERIFYING
        return "#f39c12";
      default: // NOT_VERIFIED
        return "#e74c3c";
    }
  }};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => {
      switch (props.status) {
        case 2: // VERIFIED
          return "#27ae60";
        case 1: // VERIFYING
          return "#d68910";
        default: // NOT_VERIFIED
          return "#c0392b";
      }
    }};
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  z-index: 1000;
`;
export const ModalTitle = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 10px;
  padding: 0;
  line-height: 1.4;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #2980b9;
  }
`;
export const ModalHeader = styled.div`
  // display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  margin: 20px 0;
  padding: 10px;
  width: 90%;
  border: 2px dashed #d1d5db;
  border-radius: 5px;
  background-color: #fafafa;
  text-align: center;
  color: #6b7280;
  cursor: pointer;
`;
// UploadContainer

export const UploadContainer = styled.div`
  width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

export const UploadBox = styled.div`
  border: 2px dashed #d1d5db;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fafafa;
  position: relative;
  cursor: pointer;
  color: #6b7280;
`;

export const FileSelectButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const UploadItem = styled.div`
  margin-bottom: 10px;
  text-align: left;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: #ff5f56;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #e55350;
  }
`;

export const Title = styled.h1`
  background-color: #ff7a00;
  padding: 10px;
  border-radius: 10px;
  margin-top: 5px;
  color: white;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InfoItem = styled.li`
  margin-bottom: 10px;

  & > span {
    font-weight: bold;
    color: #555;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
`;

export const Progress = styled.div`
  height: 10px;
  background-color: #4caf50;
  width: ${(props) => props.width}%;
  transition: width 0.3s ease;
`;

export const UploadProgress = styled.div`
  margin-top: 20px;
`;

export const SearchSvg = () => (
  <Svg
    width="17"
    height="16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="search"
  >
    <path
      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
      stroke="currentColor"
      strokeWidth="1.333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ResetSvg = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </Svg>
);
