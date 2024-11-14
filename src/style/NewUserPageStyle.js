import styled from "styled-components";

export const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
`;

export const AddInfoLogo = styled.img`
  max-width: 12%;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 470px;
  background: white;
  padding: 40px 20px; /* 패딩을 좌우 동일하게 설정 */
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* 중앙 정렬 */
`;

export const InputGroup = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #495057;
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  width: 93%;
  padding: 12px 16px;
  border: 1.5px solid #dee2e6;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.2s ease-in-out;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #ff6a00;
    box-shadow: 0 0 0 3px rgba(255, 106, 0, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #dee2e6;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;

  &:focus {
    outline: none;
    border-color: #ff6a00;
    box-shadow: 0 0 0 3px rgba(255, 106, 0, 0.1);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #ffece6;
  color: #ff6a00;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;

  &:hover {
    background-color: #ffd8cc;
    color: #ff5a00;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const GenderSelectField = styled.select`
  width: auto;
  min-width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #dee2e6;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
  appearance: none;
  color: ${(props) => (props.value === "" ? "#adb5bd" : "#495057")};
  cursor: pointer;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;

  &:focus {
    outline: none;
    border-color: #ff6a00;
    box-shadow: 0 0 0 3px rgba(255, 106, 0, 0.1);
  }
`;