import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import MyPageInfo from "./MypageInfo.js";
import MyPageInterest from "./MypageInterest.js";
import axios from "axios";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

function MyPage() {
  const [memberInfo, setMemberInfo] = useState(null);
  const [scholarshipList, setScholarshipList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMemberInfo = async () => {
      const token = localStorage.getItem("accessToken");

      try {
        const response = await axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/my", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMemberInfo(response.data);
      } catch (err) {
        console.error("Failed to fetch member info:", err);
      }
    };

    const fetchScholarships = async () => {
      const token = localStorage.getItem("accessToken");

      try {
        const response = await axios.get(
          "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/interest",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setScholarshipList(response.data);
      } catch (err) {
        console.error("Failed to fetch scholarships:", err);
      }
    };

    fetchMemberInfo();
    fetchScholarships();
  }, []);

  return (
    <Container>
      <Sidebar activeTab={location.pathname} />
      <Routes>
        <Route path="/mypage/info" element={<MyPageInfo memberInfo={memberInfo} />} />
        <Route path="/mypage/interest" element={<MyPageInterest scholarshipList={scholarshipList} />} />
      </Routes>
    </Container>
  );
}

export default MyPage;
