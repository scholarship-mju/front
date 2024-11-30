import React, { useState, useEffect } from "react";
import axios from "axios";
import scholarLogo from "../png/scholarLogo.png";
import king from "../png/king.png";

import {
  Background, Button, ResetButton, Fieldset, List, ScholarshipItem,
  ScholarshipAmount, CenterContainer, ListItem, ListContainer, TextInput,
  SearchContainer, SliderContainer, DownButton, DetailBox, Selectioncontainer,
  OverlayForm, FilterForm, FilterButton, Slider, AmountLabel, GoButton
  , Select, StyledWrapper, Display, Cardbox, MainThree, Filterbox, ScholarLogo, KingSection,
  KingLogo, KingListContainer, ListBox, FilterContainer,FiltersmallContainer
} from '../style/schloarshipsPageStyle';
import ScholarshipCard from "./ScholarshipCard";

/////////////////////////////////////////////////////////////////////////////////////////////
const ScholarshipsPage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [minAmount, setMinAmount] = useState(100000);
  const [maxAmount, setMaxAmount] = useState(5000000);
  const [expandedScholarships, setExpandedScholarships] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("전체"); // 카테고리 상태 추가
  const [isChecked, setIsChecked] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const parseAmount = (amount) => parseInt(amount.replace(/[^0-9]/g, ''), 10);

  const resetbutton = () => {
    setSearchTerm("");
    setMinAmount(100000);
    setMaxAmount(5000000);
    setSelectedCategory("전체"); // 카테고리 초기화
  };
  const Gobutton = () => {
    setSearchTerm("");
    setMinAmount(100000);
    setMaxAmount(5000000);
    setSelectedCategory("전체"); // 카테고리 초기화
  };


  const [serverdata, setServerdata] = useState([]); // 서버 데이터 저장용 state



  const [rankings, setRankings] = useState([]);
  const fetchRankings = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/rank");

      if (response.data && response.data.memberList) {
        setRankings(response.data.memberList);
      }
    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다:", error);
    }
  };
  useEffect(() => { //이달의왕
    fetchRankings();
  }, []);



  //검색 필터 열기 닫기
  const openFilterForm = () => setIsFilterOpen(true);
  const closeFilterForm = () => setIsFilterOpen(false);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Background>
      <ScholarLogo src={scholarLogo} />
      <TextInput
        placeholder="검색어 입력"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // 검색창 
      />
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