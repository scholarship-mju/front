import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AnimatedNumbers from "react-animated-numbers";
// 기존 colors 객체 재사용
const colors = {
  ivory: "#FFFFF0",
  navy: "#000080",
  lightNavy: "#000066",
  darkIvory: "#F5F5DC",
};

// 스타일링된 컴포넌트
const Background = styled.div`
  background-color: ${colors.darkIvory};
  min-height: 100vh;
  padding: 20px;
`;

const Container = styled.div`
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${colors.ivory};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
  margin-top: 50px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f7eb;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.navy};
`;

const Nav = styled.div`
  display: flex;
  gap: 10px;
`;

const NavButton = styled(Link)`
  padding: 10px 15px;
  background-color: ${colors.navy};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.lightNavy};
  }
`;

const Title = styled.h2`
  text-align: center;
  color: ${colors.navy};
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  padding: 12px;
  background-color: ${colors.navy};
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
  margin-top: 10px;
  width: 400px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  color: yellow;
  background-color: #9370db;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  font-size: 0.9em;
  color: ${colors.navy};
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
const TotalAmountText = styled.span`
  margin: 0px 5px;
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
  // const [scholarships, setScholarships] = useState([
  //   { id: 1, name: "장학금 1", amount: 1000000 },
  //   { id: 2, name: "장학금 2", amount: 500000 },
  // ]);
  // const [newScholarship, setNewScholarship] = useState("");
  //
  // const handleAddScholarship = (name) => {
  //   const existingScholarship = scholarships.find(
  //     (scholarship) => scholarship.name === name,
  //   );
  //   if (existingScholarship) {
  //     alert("이미 등록된 장학금입니다.");
  //   } else {
  //     const newId = scholarships.length + 1;
  //     const randomAmount = Math.floor(Math.random() * 5000000) + 100000;
  //     setScholarships([
  //       ...scholarships,
  //       { id: newId, name, amount: randomAmount },
  //     ]);
  //   }
  // };
  const scholarshipData = [
    { name: "장학금 A", amount: 1000000 },
    { name: "장학금 B", amount: 1500000 },
    { name: "장학금 C", amount: 2000000 },
    { name: "장학금 D", amount: 2500000 },
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

  const totalAmount = scholarships.reduce(
    (total, scholarship) => total + scholarship.amount,
    0,
  );

  return (
    <Background>
      <Container>
        <Header>
          <Logo>숨은 장학금 찾기</Logo>
          <Nav>
            <NavButton to="/login">로그인</NavButton>
            <NavButton to="/signup">회원가입</NavButton>
            <NavButton to="/mypage">마이페이지</NavButton>
          </Nav>
        </Header>

        <Title>받은 장학금</Title>

        <Table>
          <thead>
            <tr>
              <TableHeader>고유 번호</TableHeader>
              <TableHeader>장학금</TableHeader>
              <TableHeader>금액</TableHeader>
            </tr>
          </thead>

          {/* <TableBody> */}
          {/*   <TransitionGroup> */}
          {/*     {scholarships.map((scholarship) => ( */}
          {/*       <CSSTransition */}
          {/*         key={scholarship.id} */}
          {/*         timeout={300} */}
          {/*         classNames="fade" */}
          {/*       > */}
          {/*         <tr> */}
          {/*           <TableCell>{scholarship.id}</TableCell> */}
          {/*           <TableCell>{scholarship.name}</TableCell> */}
          {/*           <TableCell> */}
          {/*             {scholarship.amount.toLocaleString()}원 */}
          {/*           </TableCell> */}
          {/*         </tr> */}
          {/*       </CSSTransition> */}
          {/*     ))} */}
          {/*   </TransitionGroup> */}
          {/* </TableBody> */}
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

        {/* <TotalAmount> */}
        {/*   총 장학금 금액: {totalAmount.toLocaleString()}원 */}
        {/* </TotalAmount> */}
        <TotalAmount>
          <span style={{ marginRight: "4px" }}>총 장학금 금액:</span>
          {/* <span>총 장학금 금액:</span> */}
          <AnimatedNumbers
            includeComma
            animateToNumber={totalAmount} // 애니메이션할 숫자
            fontStyle={{
              fontSize: "1.2rem", // 폰트 크기 조정
              color: "yellow", // 숫자 색상 조정
            }}
            transitions={(index) => ({
              type: "tween",
              duration: 0.7,
              delay: index * 0.07, // 각 숫자에 대한 지연 시간
            })}
          />
          <span>원</span>
        </TotalAmount>
      </Container>

      <Footer>
        Team Project | 치즈왕만두 <br />© 2024 Scholarship Finder. All Rights
        Reserved.
      </Footer>
    </Background>
  );
}

export default ReceivedScholarshipsPage;
