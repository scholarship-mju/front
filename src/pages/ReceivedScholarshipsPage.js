import React, { useState, memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AnimatedNumbers from "react-animated-numbers";
import axios from "axios";
// 기존 colors 객체 재사용
const colors = {
  white: "white",
  orange: "#ff6a00",
  background_color: "#ffd8cc",
  white: "white",
};

// 스타일링된 컴포넌트
const Background = styled.div`
  background-color: ${colors.white};
  min-height: 100vh;
  padding: 20px;
`;

const Container = styled.div`
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 5px solid r
  max-width: 1100px;
  margin: auto;
  margin-top: 50px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const MyButton = styled(Link)`
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

const Title = styled.h2`
  text-align: center;
  color: ${colors.orange};
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  padding: 12px;
  background-color: ${colors.orange};
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 1.1rem;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
`;

const TableBody = styled.tbody`
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

const WarningText = styled.p`
  margin-top: 20px;
  color: #e74c3c;
  text-align: center;
`;

const TotalAmount = styled.p`
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

const Form = styled.form`
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

const Input = styled.input`
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

const Button = styled.button`
  border: none;
  background: none;
  color: #8b8ba7;
`;

const ResetButton = styled(Button)`
  opacity: 0;
  visibility: hidden;

  &:focus + .reset {
    opacity: 1;
    visibility: visible;
  }
`;

const Svg = styled.svg`
  width: 17px;
  margin-top: 3px;
`;

const SearchSvg = () => (
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

const ResetSvg = () => (
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

const DeleteButton = styled.button`
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

const AuthButton = styled.button`
  background-color: ${(props) => (props.isVerified ? "#2ecc71" : "#e74c3c")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isVerified ? "#27ae60" : "#c0392b")};
  }
`;

const Modal = styled.div`
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalButton = styled.button`
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

const MemoizedAnimatedNumbers = memo(({ animateToNumber }) => (
  <AnimatedNumbers
    includeComma
    animateToNumber={animateToNumber}
    fontStyle={{
      fontSize: "1.2rem",
      color: "white",
    }}
    transitions={(index) => ({
      type: "tween",
      duration: 0.7,
      delay: index * 0.07,
    })}
  />
));

const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setInputValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue);
      setInputValue(""); // clear input after search
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button>
        <SearchSvg />
      </Button>
      <Input
        className="input"
        placeholder="받은 장학금 입력"
        required
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ResetButton className="reset" type="reset" onClick={handleReset}>
        <ResetSvg />
      </ResetButton>
    </Form>
  );
};

function ReceivedScholarshipsPage() {
  const scholarshipData = [
    { name: "장학금 A", amount: 1000000 },
    { name: "장학금 B", amount: 1500000 },
    { name: "장학금 C", amount: 2000000 },
    { name: "장학금 D", amount: 2500000 },
    { name: "장학금 E", amount: 10000000 },
  ];

  const [scholarships, setScholarships] = useState([
    { id: 1, name: "장학금 1", amount: 1000000 },
    { id: 2, name: "장학금 2", amount: 500000 },
  ]);

  const handleAddScholarship = (name) => {
    const matchingScholarship = scholarshipData.find(
      (scholarship) => scholarship.name === name,
    );

    if (matchingScholarship) {
      const newId = scholarships.length + 1;
      setScholarships([
        ...scholarships,
        {
          id: newId,
          name: matchingScholarship.name,
          amount: matchingScholarship.amount,
        },
      ]);
    } else {
      alert("장학금을 찾지 못했습니다.");
    }
  };

  const handleDeleteScholarship = (id) => {
    setScholarships((prevScholarships) =>
      prevScholarships
        .filter((scholarship) => scholarship.id !== id)
        .map((scholarship, index) => ({
          ...scholarship,
          id: index + 1, // 삭제 후 고유 번호 재설정
        })),
    );
  };

  const totalAmount = scholarships.reduce(
    (total, scholarship) => total + scholarship.amount,
    0,
  );

  const [isVerified, setIsVerified] = useState(false); // 인증 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [selectedFile, setSelectedFile] = useState(null); // 업로드된 파일

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsVerified(true);
      setIsModalOpen(false);
      alert("사진이 성공적으로 업로드되었습니다!");
    } else {
      alert("사진을 선택해주세요!");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Background>
      <ButtonsContainer>
        <MyButton to="/mypage">마이페이지</MyButton>
      </ButtonsContainer>
      <Container>
        <Title>받은 장학금</Title>
        <Table>
          <thead>
            <tr>
              <TableHeader
                style={{
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                고유 번호
              </TableHeader>
              <TableHeader>장학금</TableHeader>
              <TableHeader>금액</TableHeader>
              <TableHeader>인증 상태</TableHeader>
              <TableHeader
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              ></TableHeader>
            </tr>
          </thead>

          <TableBody>
            <TransitionGroup component={null}>
              {scholarships.map((scholarship) => (
                <CSSTransition
                  key={scholarship.id}
                  timeout={300}
                  classNames="fade"
                >
                  <React.Fragment>
                    <tr>
                      <TableCell>{scholarship.id}</TableCell>
                      <TableCell>{scholarship.name}</TableCell>
                      <TableCell>
                        {scholarship.amount.toLocaleString()}원
                      </TableCell>
                      <TableCell>
                        <AuthButton
                          onClick={handleButtonClick}
                          isVerified={isVerified}
                        >
                          {isVerified ? "인증 O" : "인증 X"}
                        </AuthButton>
                        {isModalOpen && (
                          <>
                            <Overlay onclick={handleCloseModal} />
                            <Modal>
                              <div
                                style={{
                                  display: "flex",
                                  alignItem: "center",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <ModalButton onClick={handleCloseModal}>
                                  닫기
                                </ModalButton>
                              </div>
                              <h3>사진 업로드</h3>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                              />
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: "10px",
                                }}
                              >
                                <ModalButton onClick={handleUpload}>
                                  업로드
                                </ModalButton>
                              </div>
                            </Modal>
                          </>
                        )}
                      </TableCell>
                      <TableCell>
                        <DeleteButton
                          onClick={() =>
                            handleDeleteScholarship(scholarship.id)
                          }
                        >
                          삭제
                        </DeleteButton>
                      </TableCell>
                    </tr>
                  </React.Fragment>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </TableBody>
        </Table>
        <InputContainer>
          <SearchForm onSearch={handleAddScholarship} />
        </InputContainer>
        <WarningText>이미 등록된 장학금이 있을 수 있습니다.</WarningText>

        <TotalAmount>
          <span style={{ marginRight: "4px" }}>총 장학금 금액:</span>
          <MemoizedAnimatedNumbers animateToNumber={totalAmount} />
          <span>원</span>
        </TotalAmount>
      </Container>
    </Background>
  );
}

export default ReceivedScholarshipsPage;
