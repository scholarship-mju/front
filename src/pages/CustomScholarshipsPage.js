import React, { useState, useEffect } from "react";
import axios from "axios";
import king from "../png/king.png";
import CustomLogo from "../png/customLogo.png";

import {
  Background, Display, Cardbox, MainThree, Filterbox, ScholarLogo, KingSection,
  KingLogo, KingListContainer, ListBox
} from '../style/CustomScholarshipsPageStyles';
import ScholarshipCard from "./ScholarshipCard";

const CustomScholarshipsPage = () => {

  const [rankings, setRankings] = useState([]);
  const [customScholarships, setCustomScholarships] = useState([]); // 맞춤 장학금 데이터


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



  // 맞춤 장학금 데이터 가져오기
  const fetchCustomScholarships = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/my-scholarship",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCustomScholarships(response.data); // 맞춤 장학금 데이터 저장
    } catch (error) {
      console.error("맞춤 장학금을 가져오는데 실패했습니다:", error);
    }
  };
  useEffect(() => {
    fetchCustomScholarships();
  }, []);

  return (
    <Background>
      <ScholarLogo src={CustomLogo} />
      <MainThree>
        <Filterbox>

          <div>안내문</div>

        </Filterbox>

        <Display>
          <div>
            <ScholarshipCard scholarships={customScholarships} />
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

export default CustomScholarshipsPage;