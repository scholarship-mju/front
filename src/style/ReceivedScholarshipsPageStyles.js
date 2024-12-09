import styled from "styled-components";

export const colors = {
  white: "white",
  orange: "#ff6a00",
  background_color: "#ffd8cc"
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

export const Button = styled.button`
  border: none;
  background: none;
  color: #8b8ba7;
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

export const ModalHeader = styled.div`
  align-items: center;
  justify-content: space-between;
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