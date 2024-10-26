import React, { useState } from "react";
import styled from "styled-components";

const ivory = "#FFFFF0";
const navy = "#000080";
const lightNavy = "#000066";
const darkIvory = "#F5F5DC";

const TermsContainer = styled.div`
  max-width: 900px;
  background-color: ${ivory};
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: ${navy};
  text-align: center;
  margin-bottom: 20px;
`;

const TermsText = styled.p`
  width: 98%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${navy};
  border-radius: 5px;
  background-color: ${ivory};
  color: ${lightNavy};
  font-size: 16px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const NextButton = styled.button`
  width: 95%;
  margin-top: 20px;
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

function TermsPage({ onNext }) {
  const [agreed, setAgreed] = useState(false);

  const handleAgreement = (e) => setAgreed(e.target.checked);

  const handleNext = () => {
    if (agreed) {
      onNext();
    } else {
      alert("이용약관에 동의해주세요.");
    }
  };

  return (
    <div style={{ backgroundColor: darkIvory, minHeight: "100vh", padding: "20px" }}>
    <TermsContainer>
      <Title>이용약관</Title>
      <TermsText>이용약관 내용이 여기에 표시됩니다.</TermsText>
        <Checkbox type="checkbox" checked={agreed} onChange={handleAgreement}/>
        이용약관에 동의합니다.
        <NextButton onClick={handleNext} disabled={!agreed}>
        다음
      </NextButton>
      </TermsContainer>
    </div>
  );
}

export default TermsPage;