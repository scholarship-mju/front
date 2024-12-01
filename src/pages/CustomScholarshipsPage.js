import React, { useState, useEffect } from "react";
import downImage from '../png/down.png';
import axios from "axios";
import receiveLogo from "../png/receiveLogo.png";
import schoolImage from '../png/5-1.jpg';
import SearchImage from '../png/search.png';// 이미지 파일을 import
import HeartCheckbox from './HeartButton';  // ButtonGroup 임포트
import customLogo from "../png/customLogo.png";
import king from "../png/king.png";

import {
  Background, Button, ResetButton, Fieldset, List, ScholarshipItem,
  ScholarshipAmount, CenterContainer, ListItem, ListContainer, TextInput,
  SearchContainer, SliderContainer, DownButton, DetailBox, Selectioncontainer,
  OverlayForm, FilterForm, FilterButton, Slider, AmountLabel,FilterContainer,GoButton,FiltersmallContainer
  , Select, StyledWrapper, Display, Cardbox, MainThree, Filterbox, ScholarLogo, KingSection, KingLogo, KingListContainer, ListBox
} from '../style/CustomScholarshipsPageStyles';

import ScholarshipCard from "./ScholarshipCard";


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

  const Gobutton = () => {
   
  };


  const handleToggleDetails = (index) => {
    setExpandedScholarships((prev) => ({
      ...prev,
      [index]: !prev[index] // 해당 인덱스의 장학금 항목을 토글
    }));
  };





  const [serverdata, setServerdata] = useState([]); // 서버 데이터 저장용 state


  useEffect(() => {
    // 서버로 GET 요청을 보냄
    const token = " "; // 실제 토큰 값??
    const response = axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/all", {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰이 필요할 경우 포함
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

  const [rankings, setRankings] = useState([]);
  const fetchRankings = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/rank", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("data = ", response.data);
      setRankings(response.data); // 데이터를 상태에 저장
    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다:", error);
    }
  };
  useEffect(() => {
    fetchRankings();
  }, []);


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Background>
      <ScholarLogo src={customLogo} />
      <MainThree>
        
        <Filterbox>
        <FiltersmallContainer>
        <div>검색필터</div>

          </FiltersmallContainer>
          <FiltersmallContainer>
            <ResetButton onClick={resetbutton}>초기화</ResetButton>
            <GoButton onClick={Gobutton}>적용</GoButton>
          </FiltersmallContainer>
          
        
         
          <FilterContainer>Filter금액 
           {/*  <AmountLabel>
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
            </AmountLabel> */}
          </FilterContainer>
                   
          <FilterContainer>Filter나이</FilterContainer>
          <FilterContainer>Filter성별</FilterContainer>
          <FilterContainer>Filter학교</FilterContainer>
          <FilterContainer>Filter학과</FilterContainer>
          <FilterContainer>Filter지역</FilterContainer>
          <FilterContainer>Filter</FilterContainer>
 
        </Filterbox>
        <Display>
          <div>
            <ScholarshipCard />
            <ScholarshipCard />
          </div>
        </Display>
        
        <Cardbox>
        <KingSection>
          <KingLogo src={king} alt="이달의 왕" />
          <KingListContainer>
            {rankings?.length > 0 ? (
              rankings
                .filter((member) => member.total >= 0) // total 값이 0 이상인 항목만 선택
                .sort((a, b) => b.total - a.total) // total 값 기준 내림차순 정렬
                .slice(0, 10) // 상위 10명만 선택
                .map((user, index) => (
                  <ListBox key={user.id || `rank-${index}`}>
                    {index + 1}위 {user.nickname || "이름 없음"}
                  </ListBox>
                ))
            ) : (
              Array.from({ length: 10 }).map((_, index) => (
                <ListBox key={`placeholder-${index}`}>
                  <span>{index + 1}위</span> 데이터 없음
                </ListBox>
              ))
            )}
          </KingListContainer>
        </KingSection>

        </Cardbox>

        
      </MainThree>
    </Background>
  );
};

export default ScholarshipsPage;