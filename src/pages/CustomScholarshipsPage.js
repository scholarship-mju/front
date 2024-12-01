import React, { useState, useEffect } from "react";
import axios from "axios";
import customLogo from "../png/customLogo.png";
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


const ScholarshipsPage = () => {

  const [rankings, setRankings] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [serverdata, setServerdata] = useState([]); // 서버 데이터 저장용 state


  const fetchRankings = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/rank", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRankings(response.data?.memberList || []); // 응답 데이터가 없을 경우 빈 배열
    } catch (error) {
      console.error("이달의 왕 데이터를 가져오는데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    fetchRankings();
  }, []);

  

// 장학금 데이터 가져오기 함수
const fetchScholarships = async (filters = {}) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axios.get(
      "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/my-scholarship",
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
  return (
    <Background>
      <ScholarLogo src={customLogo} />
      <MainThree>
        <Filterbox>
        
            <div>안내문</div>
         
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
              {rankings.length > 0 ? (
                rankings
                  .sort((a, b) => b.total - a.total)
                  .slice(0, 10)
                  .map((user, index) => (
                    <ListBox key={user.id || `rank-${index}`}>
                      {index + 1}위 {user.nickname || "이름 없음"}
                    </ListBox>
                  ))
              ) : (
                <ListBox>데이터 없음</ListBox>
              )}
            </KingListContainer>
          </KingSection>
        </Cardbox>
      </MainThree>
    </Background>
  );
};

export default ScholarshipsPage;
