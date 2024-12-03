import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ScholarshipList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ScholarshipItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const ScholarshipName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const ScholarshipPrice = styled.span`
  color: #ff6a00;
`;

function MyPageInterest() {
  const [scholarshipList, setScholarshipList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      const token = localStorage.getItem("accessToken");

      try {
        console.log("Fetching scholarships...");
        const response = await axios.get(
          "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/interest",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("API Response:", response.data);
        setScholarshipList(response.data);
      } catch (err) {
        console.error("Error fetching scholarships:", err);
        setError("찜한 장학금 목록을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>찜한 장학금</h2>
      <ScholarshipList>
        {scholarshipList.length > 0 ? (
          scholarshipList.map((scholarship, index) => (
            <ScholarshipItem key={index}>
              <ScholarshipName>{scholarship.name}</ScholarshipName>
              <ScholarshipPrice>{scholarship.price}원</ScholarshipPrice>
            </ScholarshipItem>
          ))
        ) : (
          <p>등록된 찜한 장학금이 없습니다.</p>
        )}
      </ScholarshipList>
    </div>
  );
}

export default MyPageInterest;
