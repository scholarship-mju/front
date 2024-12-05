import React, { useState, useEffect } from "react";
import axios from "axios";
import scholarLogo from "../png/scholarLogo.png";
import king from "../png/king.png";

import {
  Background, Button, ResetButton,  ScholarshipItem,
   TextInput,
   Selectioncontainer,
  GoButton,FilterModalContent
  , Select, StyledWrapper, Display, Cardbox, MainThree, Filterbox, ScholarLogo, KingSection,
  KingLogo, KingListContainer, ListBox, FilterContainer,FiltersmallContainer,ModalClose,ModalContent,ModalOverlay
} from '../style/schloarshipsPageStyle';
import ScholarshipCard from "./ScholarshipCard";

/////////////////////////////////////////////////////////////////////////////////////////////
const ScholarshipsPage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  
  const [expandedScholarships, setExpandedScholarships] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("전체"); // 카테고리 상태 추가
  const [isChecked, setIsChecked] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const parseAmount = (amount) => parseInt(amount.replace(/[^0-9]/g, ''), 10);

  const resetbutton = () => {
    
  
    // formData 초기화
    setFormData({
      minAge: "",
      maxAge: "",
      gender: "",
      university: "",
      department: "",
      name: "",
    
      
    });
  };

  // 장학금 데이터 가져오기 함수
  const fetchScholarships = async (filters = {}) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/all",
        {
          params: {
            minAge: filters.minAge || undefined,
            maxAge: filters.maxAge || undefined,
            gender: filters.gender || undefined,
            university: filters.university || undefined,
            department: filters.department || undefined,
            incomeQuantile: filters.incomeQuantile || undefined,
            name: filters.name || undefined,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setServerdata(response.data);
    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다:", error);
    }
  };

  // 초기 화면에서 데이터 로드
  useEffect(() => {
    fetchScholarships(); // 필터 없이 모든 데이터 가져오기
  }, []);


  const Gobutton = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/all",
        {
          params: {
            minAge: formData.minAge || undefined,
            maxAge: formData.maxAge || undefined,
            university: formData.university || undefined,
            department: formData.department || undefined,
            gender: formData.gender || undefined,
            incomeQuantile: formData.incomeQuantile || undefined,
            name: formData.name || undefined, // name 필터 추가
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setServerdata(response.data); // 필터링된 데이터를 상태에 저장
    } catch (error) {
      console.error("필터링된 데이터를 가져오는데 실패했습니다:", error);
    }
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [formData, setFormData] = useState({
    minAge: "",
    maxAge: "",
    university: "",
    department: "",
    gender: "",
    incomeQuantile: "",
    name: "",
  });

  const handleOpenModal = (filter) => {
    setSelectedFilter(filter); // 선택한 필터 이름 저장
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setSelectedFilter(""); // 선택 필터 초기화
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // 선택된 필터에 맞는 값 업데이트
    }));
  };

  const renderModalContent = () => {
    switch (selectedFilter) {
      case "나이":
        return (
          <div>
             <div>
            <label>최소 나이를 입력하세요:</label>
            <input
              type="number"
              name="minAge"
              value={formData.minAge}
              onChange={handleInputChange}
              placeholder="예: 20"
            />
            </div>
            <div>
            <label>최대 나이를 입력하세요:</label>
            <input
              type="number"
              name="maxAge"
              value={formData.maxAge}
              onChange={handleInputChange}
              placeholder="예: 20"
            />
            
          </div>
            
          </div>
          
        );
      case "성별":
        return (
          <div>
            <label>성별을 선택하세요:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">선택</option>
              <option value="남성">남성</option>
              <option value="여성">여성</option>
            </select>
          </div>
        );
      case "학교":
        return (
          <div>
            <label>학교 이름을 입력하세요:</label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
              placeholder="예: 서울대학교"
            />
          </div>
        );
      case "학과":
        return (
          <div>
            <label>학과 이름을 입력하세요:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              placeholder="예: 컴퓨터공학과"
            />
          </div>
        );
        case "소득 분위":
          return (
            <div>
              <label>소득 분위를 입력하세요:</label>
              <input
                type="text"
                name="incomeQuantile"
                value={formData.incomeQuantile}
                onChange={handleInputChange}
                placeholder="예: 컴퓨터공학과"
              />
            </div>
          );
      case "금액":
        return (
          <div>
             <div>
            <label>최소금액을 입력하세요:</label>
            <input
              type="number"
              name="minprice"
              value={formData.minprice}
              onChange={handleInputChange}
              placeholder="예: 1000000"
            />
            </div>
            <div>
             <label>최대금액을 입력하세요:</label>
             <input
              type="number"
              name="maxprice"
              value={formData.maxprice}
              onChange={handleInputChange}
              placeholder="예: 1000000"
            />
            </div>
          </div>
        );
      default:
        return <p>유효하지 않은 필터입니다.</p>;
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Background>
      <ScholarLogo src={scholarLogo} />
      <TextInput
      placeholder="장학금 이름 검색"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
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
          
        
         
          <div>
          <FilterContainer onClick={() => handleOpenModal("나이")}>
          <p>
  {formData.minAge && formData.maxAge
    ? `나이 : ${formData.minAge} ~ ${formData.maxAge}`
    : "나이 : 입력되지 않음"}
</p>
      </FilterContainer>
      <FilterContainer onClick={() => handleOpenModal("성별")}>
        성별 : {formData.gender || "입력되지 않음"}
      </FilterContainer>
      <FilterContainer onClick={() => handleOpenModal("학교")}>
        학교 : {formData.university || "입력되지 않음"}
      </FilterContainer>
      <FilterContainer onClick={() => handleOpenModal("학과")}>
        학과 : {formData.department || "입력되지 않음"}
      </FilterContainer>
      <FilterContainer onClick={() => handleOpenModal("소득 분위")}>
        소득 분위: {formData.incomeQuantile || "입력되지 않음"}
      </FilterContainer>
     

      {/* 모달 */}
      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <FilterModalContent onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={handleCloseModal}>&times;</ModalClose>
            <h2>{selectedFilter} </h2>
            {renderModalContent()} {/* 선택된 필터에 따라 동적 내용 렌더링 */}
          </FilterModalContent>
        </ModalOverlay>
      )}
    </div>
 
        </Filterbox>



        <Display>
          <div>
          <ScholarshipCard scholarships={serverdata} />
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