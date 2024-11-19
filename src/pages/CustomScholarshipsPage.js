import React, { useState } from "react";
import schoolImage from '../png/5-1.jpg';
import emptyImage from '../png/mainlogo.png'; // 'empty.png'
import HeartCheckbox from './HeartButton';  // ButtonGroup 임포트
import downImage from '../png/down.png';
import ScholarshipCard from "./ScholarshipCard.js";
import { likeEffect, dislikeEffect } from '../style/CustomschloarshipPage';
import {
  Background,
  Button,
  ResetButton,
  Fieldset,
  List,
  ScholarshipItem,
  ScholarshipAmount,
  CenterContainer,
  ListItem,
  ListContainer,
  TextInput,
  SearchContainer,
  SliderContainer,
  DownButton,
  DetailBox,
  Selectioncontainer,
  Container,
  Checkmark,
  MainThree,
  Filterbox,
  Display,
  Cardbox,
  AmountLabel,
  Slider,
 
} from '../style/CustomschloarshipPage';


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
    }, { 
      name: "D 장학금", 
      amount: "3,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가","교내"],
      DetailBox: { 
        link: "https://example.com/c", 
        notes: "D 장학금에 대한 특이사항", 
        category: "교내", 
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-d" }
    },{ 
      name: "A2 장학금", 
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
      name: "B2 장학금", 
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
      name: "C2 장학금", 
      amount: "1,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가","교내"],
      DetailBox: { 
        link: "https://example.com/c", 
        notes: "C 장학금에 대한 특이사항", 
        category: "교내", 
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-c" }
    }, { 
      name: "D2 장학금", 
      amount: "3,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가","교내"],
      DetailBox: { 
        link: "https://example.com/c", 
        notes: "D 장학금에 대한 특이사항", 
        category: "교내", 
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-d" }
    },{ 
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
    }, { 
      name: "D25 장학금", 
      amount: "3,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가","교내"],
      DetailBox: { 
        link: "https://example.com/c", 
        notes: "D 장학금에 대한 특이사항", 
        category: "교내", 
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-d" }
    },{ 
      name: "A122 장학금", 
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
      name: "B251 장학금", 
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
      name: "C22 장학금", 
      amount: "1,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가","교내"],
      DetailBox: { 
        link: "https://example.com/c", 
        notes: "C 장학금에 대한 특이사항", 
        category: "교내", 
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-c" }
    }, { 
      name: "D23 장학금", 
      amount: "3,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가","교내"],
      DetailBox: { 
        link: "https://example.com/c", 
        notes: "D 장학금에 대한 특이사항", 
        category: "교내", 
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-d" }
    },{ 
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
    }, { 
      name: "D 장학금", 
      amount: "3,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가","교내"],
      DetailBox: { 
        link: "https://example.com/c", 
        notes: "D 장학금에 대한 특이사항", 
        category: "교내", 
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-d" }
    },{ 
      name: "A2 장학금", 
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
      name: "B2 장학금", 
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
      name: "C2 장학금", 
      amount: "1,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가","교내"],
      DetailBox: { 
        link: "https://example.com/c", 
        notes: "C 장학금에 대한 특이사항", 
        category: "교내", 
        attachment: null // 첨부파일이 없는 경우 null
      },
      button: { id: "button-c" }
    }, { 
      name: "D2 장학금", 
      amount: "3,500,000", 
      feature: ["우수 체육인 대상", "국제 대회 참가","교내"],
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
  const [searchField, setSearchField] = useState("name");
  const [lastButton, setLastButton] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [expandedScholarships, setExpandedScholarships] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("전체"); // 카테고리 상태 추가
  const [isChecked, setIsChecked] = useState(false);
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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // 체크 상태 토글
  };


  const handleClick = () => {
    console.log("Div clicked!");
  };

  const [serverdata, setServerdata] = useState([]); // 서버 데이터 저장용 state
 

  return (
    <Background>

      <MainThree className = "MainThree">

      <Filterbox className="Filterbox">
        검색 필터
        <ResetButton>초기화</ResetButton>
        <SearchContainer className="search">              
       
         
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
      </SearchContainer>
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
        <div className="Filter3"> Filter학교</div>
        <div className="Filter4"> Filter기간</div>
        <div className="Filter5"> Filter5</div>
        <div className="Filter6"> Filter6</div>
        <div className="Filter6"> Filter6</div>
        <div className="Filter6"> Filter6</div>
      </Filterbox>
     
       <Display className = "display">
       
      <div className="result">
       
        <Fieldset>
           
           <ScholarshipCard className="GridTest"/>
          
        <List className = "기존List">
          {[...serverdata].map((scholarshipitem, index) => (
            <ScholarshipItem key={index}>
              <strong className="card">{scholarshipitem.name}</strong> :
              {scholarshipitem.description} 
              
              <ScholarshipAmount>
                {parseInt(scholarshipitem.price).toLocaleString() + "원"}
                <DownButton
                  onClick={() => handleToggleDetails(index)}
                  src={downImage}
                  alt="Expand details"
                  id={scholarshipitem.button?.id || `button-${index}`}
                />
                
              </ScholarshipAmount>

              {expandedScholarships[index] && (
                <DetailBox>
                  <p>자세한 내용: {scholarshipitem.DetailBox?.notes || "No additional details"}</p>
                  {displayAttachment(scholarshipitem.DetailBox?.attachment)} {/* Displays attachment if available */}
                  {scholarshipitem.DetailBox?.link && (
                    <a href={scholarshipitem.DetailBox.link} target="_blank" rel="noopener noreferrer">링크</a>
                  )}
                </DetailBox>
              )}

            </ScholarshipItem>
          ))}
        </List>
        </Fieldset>
      </div>


      </Display>

      <Cardbox className="Cardbox">
      <TextInput 
          placeholder="검색어 입력" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색창 
        /> 
     
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship, index) => (
              
              <ScholarshipItem key={index} onClick={handleClick} style={{ cursor: "pointer" }}>
                <strong>{scholarship.name}</strong>
                <svg width="100" height="100">
  <defs>
   
    <pattern id="imagePattern" patternUnits="userSpaceOnUse" width="100" height="100">
      <image href={schoolImage} x="0" y="0" width="100" height="100" />
    </pattern>
  </defs>

  
  <circle cx="50" cy="50" r="40" fill="url(#imagePattern)" />
</svg>

                {scholarship.amount + "원"} 
              </ScholarshipItem>
            ))
          ) : (
            <CenterContainer>검색 결과가 없습니다.</CenterContainer>
          )}
   
        
        
      </Cardbox>


      </MainThree>
    </Background>
  );
};

export default ScholarshipsPage;