import styled from "styled-components";
import React, { useState } from "react";
import {
  ModalClose,
  ModalOverlay,
  ModalContent,
  ScholarshipItem,
} from "../style/schloarshipsPageStyle";
import HeartCheckbox from "./HeartButton"; // HeartCheckbox 컴포넌트
import schoolImage from "../png/5-1.jpg";
import { CardStyledWrapper } from "../style/schloarshipsPageStyle";

const ScholarshipCard = ({ scholarships }) => {
  const [selectedScholarship, setSelectedScholarship] = useState(null); // 모달에 표시할 데이터
  const [likedItems, setLikedItems] = useState({}); // 좋아요 상태

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setSelectedScholarship(null); // 모달을 닫기 위해 상태 초기화
  };

  // ScholarshipItem 클릭 핸들러
  const handleItemClick = (scholarship) => {
    setSelectedScholarship(scholarship); // 선택한 장학금 데이터를 상태에 저장
  };

  // 하트 버튼 클릭 핸들러
  const handleHeartClick = (e, scholarship) => {
    e.stopPropagation(); // 이벤트 전파 차단
    setLikedItems((prev) => ({
      ...prev,
      [scholarship.id]: !prev[scholarship.id], // 현재 상태 반전
    }));
    console.log(`Heart clicked for scholarship: ${scholarship.name}`);
  };

  return (
    <CardStyledWrapper style={{ listStyleType: "none"}} className="Cards">
      {/* 스타일 적용된 리스트 */}
      {scholarships.map((scholarshipitem, index) => (
        <div key={index} style={{ position: "relative" }}>

<ScholarshipItem
  onClick={() => handleItemClick(scholarshipitem)} // 클릭 시 상태 업데이트
  style={{ cursor: "pointer", position: "relative" }} // relative로 위치 설정
>
  {/* 이미지 */}
  <div
    style={{
      float: "left",
      display: "flex",
    }}
  >
    <img
      src={schoolImage}
      style={{
        height: "79px",
        width: "109px",
        objectFit: "contain",
      }}
      alt="School"
    />
  </div>

  {/* 이름과 설명 */}
  <div>
    <strong style={{ display: "inline-block", marginBottom: "30px" }}>
      {scholarshipitem.name}
    </strong>
    <div>{scholarshipitem.description}</div>
  </div>

  {/* 하트와 금액 컨테이너 */}
  <div
    style={{
      position: "absolute",
      bottom: "10px", // 아래쪽에 배치
      right: "10px", // 오른쪽에 배치
      display: "flex",
      flexDirection: "row-reverse", // 하트가 오른쪽, 금액이 왼쪽
      alignItems: "flex-end", // 세로 정렬
    }}
  >
    

    {/* 금액 */}
    <div style={{ marginRight: "10px", fontWeight: "bold" }}>
      {parseInt(scholarshipitem.price).toLocaleString() + "원"}
    </div>
  </div>
</ScholarshipItem>


    
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              zIndex: 1,
            }}
          >
           
            <HeartCheckbox
              scholarshipId={scholarshipitem.id}
              isLiked={likedItems[scholarshipitem.id] || false}
              onClick={(e) => handleHeartClick(e, scholarshipitem)}
               // 이벤트 전파 차단 및 item 전달
            />
            </div>
          </div>
       
      ))}

      {/* 모달 컴포넌트 */}
      {selectedScholarship && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={handleCloseModal}>&times;</ModalClose>
            <h3>{selectedScholarship.name}</h3>
            <p>
              나이 제한: {selectedScholarship.minAge}~
              {selectedScholarship.maxAge}
            </p>
            <p>성별 구분 : {selectedScholarship.gender} </p>
            <p>학교 구분 : {selectedScholarship.university}</p>
            <p>학과 구분: {selectedScholarship.department || "제한 없음"}</p>
            <p>소득 구분: {selectedScholarship.incomeQuantile}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </CardStyledWrapper>
  );
};

export default ScholarshipCard;
