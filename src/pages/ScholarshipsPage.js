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
  ListContainer,
  ListItem,
  TextInput,
  SliderContainer,
  SearchContainer,
  DownButton,
  DetailBox,
  Selectioncontainer,
  Title
} from '../style/ScholarshipsPage';


const ScholarshipsPage = () => {
  const scholarships = [ // scholarships 배열 이름 변경
    { 
      name: "A 장학금", 
      amount: "1,000,000", 
      feature: ["성적 우수자 대상", "리더십 장려","교내"],
      DetailBox: { 
        link: "https://example.com/a", 
        notes: "A 장학금에 대한 특이사항", 
        category: "교내", // 교내 장학금
        attachment: "https://example.com/a-attachment.pdf" // 첨부파일 URL
      },
      button: { id: "button-a" }
    },
    { 
      name: "B 장학금", 
      amount: "500,000", 
      feature: ["저소득층 대상", "학업 성취도","교외"],
      DetailBox: { 
        link: "https://example.com/b", 
        notes: "B 장학금에 대한 특이사항", 
        category: "교외", // 교외 장학금
        attachment: "https://example.com/b-attachment.pdf"
      },
      button: { id: "button-b" }
    },
    { 
      name: "C 장학금", 
      amount: "1,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가","교내"],
      DetailBox: { 
        link: "https://example.com/c", 
        notes: "C 장학금에 대한 특이사항", 
        category: "교내", 
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-c" }
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [minAmount, setMinAmount] = useState(100000);
  const [maxAmount, setMaxAmount] = useState(5000000);
  const [searchField, setSearchField] = useState("name");
  const [lastButton, setLastButton] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [expandedScholarships, setExpandedScholarships] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("전체"); // 카테고리 상태 추가

  const parseAmount = (amount) => parseInt(amount.replace(/[^0-9]/g, ''), 10);

  const filterScholarships = (category, searchField, searchTerm, minAmount, maxAmount) => {
    return scholarships.filter((scholarship) => {
      const isCategoryMatch = (category === "전체") || (scholarship.DetailBox.category === category);
  
      const isMatch = (() => {
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
      })();
  
      return isCategoryMatch && isMatch;
    });
  };

  // 필터링된 장학금 목록을 계산
  const filteredScholarships = filterScholarships(selectedCategory, searchField, searchTerm, minAmount, maxAmount);

  const resetbutton = () => {
    setSearchTerm("");
    setMinAmount(100000);
    setMaxAmount(5000000);
    setSearchField("name");
    setLastButton(null);
    setErrorMessage("");
    setExpandedScholarships({});
    setSelectedCategory("전체"); // 카테고리 초기화
  };

  const handleSearch1 = (field) => {
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

  const displayAttachment = (attachment) => { //첨부파일 함수
    if (!attachment) return null;
    return (
      <a href={attachment} target="_blank" rel="noopener noreferrer">
        첨부파일 보기
      </a>
    );
  };

  const handleSelectChange = (event) => { // 카테고리 선택 변경 핸들러
    setSelectedCategory(event.target.value);
  };

  return (
    <Background>
      <CenterContainer className="intro">
        <Title>전체 장학금 페이지</Title>
        
      </CenterContainer>

      <SearchContainer className="search">              
        <TextInput 
          placeholder="검색어 입력" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색창 
        /> 
         
         <Selectioncontainer>
          <label htmlFor="scholarship-category">장학금 유형:</label>
          <select
            id="scholarship-category"
            value={selectedCategory}
            onChange={handleSelectChange}
          >
            <option value="전체">전체</option>
            <option value="교내">교내</option>
            <option value="교외">교외</option>
          </select>
         {/* 드롭 다운 - 교내 교외 전체 */}
       </Selectioncontainer>

        <ResetButton onClick={resetbutton}>초기화</ResetButton> {/* 리셋 버튼 */}
      </SearchContainer>

      {searchField === "amount" && ( //금액 검색 설정 
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
            <Button className={lastButton === "name" ? "button-active" : ""} onClick={() => handleSearch1("name")}>
              장학금명 검색
            </Button>
          </ListItem>
          <ListItem>
            <Button className={lastButton === "amount" ? "button-active" : ""} onClick={() => handleSearch1("amount")}>
              금액 검색
            </Button>
          </ListItem>
          <ListItem>
            <Button className={lastButton === "feature" ? "button-active" : ""} onClick={() => handleSearch1("feature")}>
              특징 검색
            </Button>
          </ListItem>
        </ListContainer>
      </CenterContainer>

      {errorMessage && <CenterContainer style={{ color: 'red' }}>{errorMessage}</CenterContainer>}
         
      <Fieldset>
        <legend><strong>검색 결과</strong> </legend>
        <List>
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship, index) => (
              <ScholarshipItem key={index}>
                <strong>{scholarship.name}</strong>: {scholarship.feature.join(", ")}
                <ScholarshipAmount>
                  {scholarship.amount + "원"} 
                  <DownButton 
                    onClick={() => handleToggleDetails(index)} 
                    src={downImage} // 실제 이미지 경로로 변경
                    alt="클릭할 이미지" 
                    id={scholarship.button.id} // 각 장학금에 대해 고유 ID 부여
                  />
                </ScholarshipAmount>

                {expandedScholarships[index] && (
                  <DetailBox>
                    <p>자세한 내용: {scholarship.DetailBox.notes}</p>
                    {displayAttachment(scholarship.DetailBox.attachment)} {/* 첨부파일 표시 */}
                    <a href={scholarship.DetailBox.link} target="_blank" rel="noopener noreferrer">링크</a>
                  </DetailBox>
                )}
              </ScholarshipItem>
            ))
          ) : (
            <CenterContainer>검색 결과가 없습니다.</CenterContainer>
          )}
        </List>
      </Fieldset>
    </Background>
  );
};

export default ScholarshipsPage;

