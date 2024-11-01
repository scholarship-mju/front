import React, { useState } from "react";
import downImage from '../png/down.png'; // 이미지 파일을 import
import {
  Background,
  Button,
  ResetButton,
  Fieldset,
  List,
  ScholarshipItem,
  ScholarshipAmount,
  CenterContainer,
  ScholarshipList,
  ListContainer,
  ListItem,
  TextInput,
  SliderContainer,
  SearchContainer,
  DownButton,
  DetailBox
} from '../style/schloarshipsPageStyle';

const ScholarshipsPage = () => {

  const scholarships = [
    { 
      name: "A 장학금", 
      amount: "1,000,000", 
      feature: ["성적 우수자 대상", "리더십 장려"],
      DetailBox: { link: "https://example.com/a", notes: "A 장학금에 대한 특이사항" },
      button: { id: "button-a" } // DownButton을 위한 속성 추가
    },
    { 
      name: "B 장학금", 
      amount: "500,000", 
      feature: ["저소득층 대상", "학업 성취도"],
      DetailBox: { link: "https://example.com/b", notes: "B 장학금에 대한 특이사항" },
      button: { id: "button-b" } // DownButton을 위한 속성 추가
    },
    { 
      name: "C 장학금", 
      amount: "1,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가"],
      DetailBox: { link: "https://example.com/c", notes: "C 장학금에 대한 특이사항" },
      button: { id: "button-c" } // DownButton을 위한 속성 추가
    },
    { 
      name: "D 장학금", 
      amount: "500,000", 
      feature: ["저소득층 대상", "학업 성취도"],
      DetailBox: { link: "https://example.com/b", notes: "D 장학금에 대한 특이사항" },
      button: { id: "button-b" } // DownButton을 위한 속성 추가
    },];

  const [searchTerm, setSearchTerm] = useState("");
  const [minAmount, setMinAmount] = useState(100000);
  const [maxAmount, setMaxAmount] = useState(5000000);
  const [searchField, setSearchField] = useState("name");
  const [lastButton, setLastButton] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [expandedScholarships, setExpandedScholarships] = useState({}); // 상태 추가

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

  const handleToggleDetails = (index) => {
    setExpandedScholarships((prev) => ({
      ...prev,
      [index]: !prev[index] // 해당 인덱스의 장학금 항목을 토글
    }));
  };

  return (
    <Background>
      <CenterContainer className = "intro">
        <h1>전체 장학금 페이지</h1>
        <p>장학금 목록</p>
      </CenterContainer>

      <SearchContainer className = "search">
        <TextInput 
          placeholder="검색어 입력" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ResetButton onClick={resetSearch}>리셋</ResetButton>
      </SearchContainer>

      {searchField === "amount" && (
        <SliderContainer>
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
        </SliderContainer>
      )}
     
        
      <CenterContainer className="button-container">
        <ListContainer>
          <ListItem>
            <Button className={lastButton === "name" ? "button-active" : ""} onClick={() => handleSearch("name")}>
              장학금명 검색
            </Button>
          </ListItem>
          <ListItem>
            <Button className={lastButton === "amount" ? "button-active" : ""} onClick={() => handleSearch("amount")}>
              금액 검색
            </Button>
          </ListItem>
          <ListItem>
            <Button className={lastButton === "feature" ? "button-active" : ""} onClick={() => handleSearch("feature")}>
              특징 검색
            </Button>
          </ListItem>
        </ListContainer>
      </CenterContainer>

      {errorMessage && <CenterContainer style={{ color: 'red' }}>{errorMessage}</CenterContainer>}

      <Fieldset>
        <legend>검색 결과</legend>
        <List>
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship, index) => (
              <ScholarshipItem key={index}>
              
                <strong>{scholarship.name}</strong>: {scholarship.feature.join(", ")}
              <ScholarshipAmount>
                {scholarship.amount}
                
                <DownButton 
                  onClick={() => handleToggleDetails(index)} 
                  src={downImage} // 실제 이미지 경로로 변경
                  alt="클릭할 이미지" 
                  id={scholarship.button.id} // 버튼 ID 추가
                />
              </ScholarshipAmount>
            
              {/* 클릭 시 상세 정보를 표시 */}
              {expandedScholarships[index] && (
                <DetailBox>
                  {/* 상세 정보 내용 */}
                  <div>장학금 링크 주소: <a href={scholarship.DetailBox.link}>{scholarship.DetailBox.link}</a></div>
                  
                  <div>특이사항: {scholarship.DetailBox.notes}</div>
                </DetailBox>
              )}
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
