import React, { useState ,useEffect } from "react";
import downImage from '../png/down.png';
import axios from "axios";
import SearchImage from '../png/search.png';// 이미지 파일을 import
import HeartCheckbox from './HeartButton';  // ButtonGroup 임포트


import {
  Background, Button, ResetButton, Fieldset, List, ScholarshipItem,
  ScholarshipAmount, CenterContainer, ListItem, ListContainer, TextInput,
  SearchContainer, SliderContainer, DownButton, DetailBox, Selectioncontainer,
     OverlayForm, FilterForm, FilterButton,Slider,AmountLabel
  ,Select,StyledWrapper
} from '../style/schloarshipsPageStyle';


/////////////////////////////////////////////////////////////////////////////////////////////
const ScholarshipsPage = () => {
  const scholarships = [ // scholarships 배열 이름 변경
    {
      name: "A 장학금",
      amount: "1,000,000",
      feature: ["성적 우수자 대상", "리더십 장려", "교내"],
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
      feature: ["저소득층 대상", "학업 성취도", "교외"],
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
      feature: ["우수 체육인 대상", "국제 대회 참가", "교내"],
      DetailBox: {
        link: "https://example.com/c",
        notes: "C 장학금에 대한 특이사항",
        category: "교내",
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-c" }
    }, {
      name: "D 장학금",
      amount: "3,500,000",
      feature: ["우수 체육인 대상", "국제 대회 참가", "교내"],
      DetailBox: {
        link: "https://example.com/c",
        notes: "D 장학금에 대한 특이사항",
        category: "교내",
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-d" }
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [minAmount, setMinAmount] = useState(100000);
  const [maxAmount, setMaxAmount] = useState(5000000);
  const [expandedScholarships, setExpandedScholarships] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("전체"); // 카테고리 상태 추가
  const [isChecked, setIsChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const parseAmount = (amount) => parseInt(amount.replace(/[^0-9]/g, ''), 10);
  

  const filterScholarships = (category, minAmount, maxAmount) => {
    return scholarships.filter((scholarship) => {
      const isCategoryMatch = (category === "전체") || (scholarship.DetailBox.category === category);
      const scholarshipAmount = parseAmount(scholarship.amount);
      const isAmountMatch = scholarshipAmount >= minAmount && scholarshipAmount <= maxAmount;

      // 대소문자 구분 없이 이름 검색
      const isNameMatch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase());

      // 특징 검색
      const isFeatureMatch = scholarship.feature.join(", ").toLowerCase().includes(searchTerm.toLowerCase());

      // 금액 범위 검색
      const isAmountRangeMatch = scholarshipAmount >= minAmount && scholarshipAmount <= maxAmount;

      // 모든 조건을 만족하는지 확인
      return isCategoryMatch && isAmountMatch && (isNameMatch || isFeatureMatch) && isAmountRangeMatch;
    });
  };

  //검색 필터 열기 닫기
  const openFilterForm = () => setIsFilterOpen(true);
  const closeFilterForm = () => setIsFilterOpen(false);

  // 필터링된 장학금 목록을 계산
  const filteredScholarships = filterScholarships(selectedCategory, minAmount, maxAmount);

  const resetbutton = () => {
    setSearchTerm("");
    setMinAmount(100000);
    setMaxAmount(5000000);
    setExpandedScholarships({});
    setSelectedCategory("전체"); // 카테고리 초기화
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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // 체크 상태 토글
  };

  const [serverdata, setServerdata] = useState([]); // 서버 데이터 저장용 state


  useEffect(() => {
    // 서버로 GET 요청을 보냄
    const token = " "; // 실제 토큰 값??
    const response = axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/all", {
        headers: {
          Authorization:  `Bearer ${token}`, // 토큰이 필요할 경우 포함
        },
      })
      .then((response) => {
        // 응답 데이터를 serverdata에 저장
        setServerdata(response.data);
        console.log(response.data); // 데이터 확인용 콘솔 출력
      })
      .catch((error) => {
        console.error('데이터 가져오기 실패:', error);
      });
  }, []);

  {serverdata.map((item, index) => (          //serverdata->item 객체 
    <div key={index} >
      {item.name} {item.age}  {item.university} {/* 예시로 각 항목의 name을 버튼 텍스트로 사용 */}
    </div>
  ))}


  return (
    
    <Background>
      <CenterContainer className="intro">
        <h1 className="bigtitle">전체 장학금 페이지</h1>

      </CenterContainer>

      <SearchContainer className="search">

        <FilterButton onClick={openFilterForm}>검색 필터</FilterButton>

        <TextInput
          placeholder="검색어 입력"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색창 
        />

        {/*<SearchButton 
        src={SearchImage} // 실제 이미지 경로로 변경
        alt="클릭할 이미지"/>*/}
      </SearchContainer>

      {isFilterOpen && (
        <OverlayForm onClick={closeFilterForm}>
          <FilterForm className="Filter" onClick={(e) => e.stopPropagation()}>
          <h2 style={{ display: "inline" }}>검색 필터</h2>
            <ResetButton onClick={resetbutton}>초기화</ResetButton> {/* 초기화 버튼 */}
            <Selectioncontainer>
      <label >장학금 유형 :</label>
      <Select
        id="scholarship-category"
        value={selectedCategory}
        onChange={handleSelectChange}
      >
        <option value="전체">전체</option>
        <option value="교내">교내</option>
        <option value="교외">교외</option>
      </Select>
    </Selectioncontainer>

            <SliderContainer>
      <AmountLabel>
        최소 금액: {minAmount.toLocaleString()}원
        <Slider
          type="range"
          min="100000"
          max="5000000"
          step="100000"
          value={minAmount}
          onChange={(e) => setMinAmount(parseInt(e.target.value))}
        />
      </AmountLabel>
      <AmountLabel>
        최대 금액: {maxAmount.toLocaleString()}원
        <Slider
          type="range"
          min="100000"
          max="5000000"
          step="100000"
          value={maxAmount}
          onChange={(e) => setMaxAmount(parseInt(e.target.value))}
        />
      </AmountLabel>
    </SliderContainer>


          </FilterForm>

          <h3>검은 부분을 누르면 종료됩니다</h3>
        </OverlayForm>
      )}
    
    
      
     
        
  
    
    
    

      <Fieldset className="result">
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
                   <HeartCheckbox /> {/* Checkbox 컴포넌트 사용 */}

                
                   {serverdata.map((item, index) => (          //serverdata->item 객체 
          <div key={index} >
            {item.name} {item.age}  {item.university} {/* 예시로 각 항목의 name을 버튼 텍스트로 사용 */}
          </div>
        ))}


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

