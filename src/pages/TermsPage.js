import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  TermsList,
  TermsItem,
  AllAgreementBox,
  CheckboxLabel,
  CustomCheckbox,
  NextButton,
} from "../style/TermsPageStyle";

function TermsPage({ onNext }) {
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    service: false,
    personal: false,
    marketing: false,
    location: false,
  });

  const handleAllAgreement = () => {
    const newAgreement = !allAgreed;
    setAgreements({
      service: newAgreement,
      personal: newAgreement,
      marketing: newAgreement,
      location: newAgreement,
    });
    setAllAgreed(newAgreement);
  };

  const handleAgreementChange = (key) => {
    const updatedAgreements = {
      ...agreements,
      [key]: !agreements[key],
    };
    setAgreements(updatedAgreements);
  };

  useEffect(() => {
    const isAllAgreed = Object.values(agreements).every(Boolean);
    setAllAgreed(isAllAgreed);
  }, [agreements]);

  const handleNext = () => {
    if (agreements.service) {
      onNext();
    } else {
      alert("필수 약관에 동의해주세요.");
    }
  };

  return (
    <div>
      <Container>
        <Title>약관 동의</Title>

        <AllAgreementBox onClick={handleAllAgreement}>
          <CheckboxLabel>
            <CustomCheckbox checked={allAgreed} />
            <span>이용약관, 개인정보 수집 및 이용에 모두 동의합니다.</span>
          </CheckboxLabel>
        </AllAgreementBox>

        <TermsList>
          <TermsItem>
            <CheckboxLabel onClick={() => handleAgreementChange("service")}>
              <CustomCheckbox checked={agreements.service} />
              <span>이용약관 동의 (필수)</span>
            </CheckboxLabel>
          </TermsItem>
          <TermsItem>
            <CheckboxLabel onClick={() => handleAgreementChange("personal")}>
              <CustomCheckbox checked={agreements.personal} />
              <span>개인정보 수집 및 이용 동의 (선택)</span>
            </CheckboxLabel>
          </TermsItem>
          <TermsItem>
            <CheckboxLabel onClick={() => handleAgreementChange("marketing")}>
              <CustomCheckbox checked={agreements.marketing} />
              <span>마케팅 활용 동의 및 광고 수신 동의 (선택)</span>
            </CheckboxLabel>
          </TermsItem>
        </TermsList>

        <NextButton onClick={handleNext} disabled={!agreements.service}>
          동의하고 계속하기
        </NextButton>
      </Container>
    </div>
  );
}

export default TermsPage;
