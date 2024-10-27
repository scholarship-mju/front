import React, { useState } from "react";
import {
  Background,
  TextInput,
  Button,
  Fieldset,
  List,
  ScholarshipItem,
  ScholarshipAmount,
  CenterContainer,
} from '../sylte/schloarshipsPageStyle'; // 스타일 컴포넌트 불러오기

//여기부터 시작
const ScholarshipsPage = () => {
  const scholarships = [
    { name: "A 장학금", amount: "1,000,000", feature: ["성적 우수자 대상", "리더십 장려"] },
    { name: "B 장학금", amount: "500,000", feature: ["저소득층 대상", "학업 성취도"] },
    { name: "C 장학금", amount: "1,500,000", feature: ["우수 체육인 대상", "국제 대회 참가"] },
    { name: "D 장학금", amount: "2,500,000", feature: ["우수 미술인 대상", "국제 대회 입상"] }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [minAmount, setMinAmount] = useState(100000);
  const [maxAmount, setMaxAmount] = useState(5000000);
  const [searchField, setSearchField] = useState("name");
  const [lastButton, setLastButton] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const parseAmount = (amount) => parseInt(amount.replace(/[^0-9]/g, ''), 10);

  const filteredScholarships = scholarships.filter((scholarship) => {
    switch (searchField) {
      case "name":
        return scholarship.name.toLowerCase().includes(searchTerm.toLowerCase());
      case "amount":
        const scholarshipAmount = parseAmount(scholarship.amount);
        return scholarshipAmount >= minAmount && scholarshipAmount <= maxAmount;
      case "feature":
        return scholarship.feature.join(", ").toLowerCase().includes(searchTerm.toLowerCase());
      default:
        return true;
    }
  });

  const resetSearch = () => {
    setSearchTerm("");
    setMinAmount(100000);
    setMaxAmount(5000000);
    setSearchField("name");
    setLastButton(null);
    setErrorMessage("");
  };

  const handleSearch = (field) => {
    setSearchField(field);
    setLastButton(field);

    if (field === "name" && searchTerm.trim() === "") {
      setErrorMessage("정확한 장학금명을 입력해주세요.");
    } else if (field === "amount" && (minAmount === "" || maxAmount === "")) {
      setErrorMessage("최소 또는 최대 금액을 선택해주세요.");
    } else if (field === "feature" && searchTerm.trim() === "") {
      setErrorMessage("정확한 특징명을 입력해주세요.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <Background>
       <CenterContainer>
        <h1>전체 장학금 페이지</h1>
      </CenterContainer>
      <CenterContainer>
        <h1>장학금 목록</h1>
      </CenterContainer>

      {/* 검색 컨테이너 */}
      <CenterContainer className="search-container">
        <TextInput
          placeholder="검색어 입력"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={resetSearch}>리셋</Button>
      </CenterContainer>

      {/* 금액 검색을 위한 범위 입력 (슬라이더) */}
      {searchField === "amount" && (
        <CenterContainer className="amount-range-container">
          <label>
            최소 금액: {minAmount.toLocaleString()}원
            <input
              type="range"
              min="100000"
              max="5000000"
              step="100000"
              value={minAmount}
              onChange={(e) => setMinAmount(parseInt(e.target.value))}
            />
          </label>
          <label>
            최대 금액: {maxAmount.toLocaleString()}원
            <input
              type="range"
              min="100000"
              max="5000000"
              step="100000"
              value={maxAmount}
              onChange={(e) => setMaxAmount(parseInt(e.target.value))}
            />
          </label>
        </CenterContainer>
      )}

      {/* 검색 버튼 */}
      <CenterContainer className="button-container">
        <Button className={lastButton === "name" ? "button-active" : ""} onClick={() => handleSearch("name")}>
          장학금명 검색
        </Button>
        <Button className={lastButton === "amount" ? "button-active" : ""} onClick={() => handleSearch("amount")}>
          금액 검색
        </Button>
        <Button className={lastButton === "feature" ? "button-active" : ""} onClick={() => handleSearch("feature")}>
          특징 검색
        </Button>
      </CenterContainer>

      {/* 오류 메시지 출력 */}
      {errorMessage && <CenterContainer style={{ color: 'red' }}>{errorMessage}</CenterContainer>}

      {/* 필터링된 결과 출력 */}
      <Fieldset>
        <legend>검색 결과</legend>
        <List className="scholarship-list">
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship, index) => (
              <ScholarshipItem key={index}>
                <div>
                  <strong>{scholarship.name}</strong>: {scholarship.feature.join(", ")
                  }
                </div>
                <ScholarshipAmount>{scholarship.amount}</ScholarshipAmount>
              </ScholarshipItem>
            ))
          ) : (
            <li>검색 결과가 없습니다.</li>
          )}
        </List>
      </Fieldset>
    </Background>
  );
};

export default ScholarshipsPage;