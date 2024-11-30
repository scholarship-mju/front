import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  ModalClose,
  ModalOverlay,
  ModalContent,
  ScholarshipItem,
} from "../style/schloarshipsPageStyle";
import axios from "axios";
import HeartCheckbox from "./HeartButton"; // HeartCheckbox 컴포넌트
import schoolImage from "../png/5-1.jpg";
import { CardStyledWrapper } from "../style/schloarshipsPageStyle";

const ScholarshipCard = () => {
  const [serverdata, setServerdata] = useState([]); // 서버에서 가져온 데이터
  const [selectedScholarship, setSelectedScholarship] = useState(null); // 모달에 표시할 데이터
  const [likedItems, setLikedItems] = useState({}); // 좋아요 상태

  // 서버에서 데이터 가져오기
  useEffect(() => {
    const token = localStorage.getItem("accessToken") || ""; // 토큰 저장 방식에 따라 가져오기
    axios
      .get(
        "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/all",
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰이 필요할 경우 포함
          },
        }
      )
      .then((response) => {
        setServerdata(response.data);
        console.log(response.data); // 데이터 확인용 콘솔 출력
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });
  }, []);

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setSelectedScholarship(null); // 모달을 닫기 위해 상태 초기화
  };

  // ScholarshipItem 클릭 핸들러
  const handleItemClick = (scholarship) => {
    setSelectedScholarship(scholarship); // 선택한 장학금 데이터를 상태에 저장
  };

  // 하트 버튼 클릭 핸들러
  const handleHeartClick = (e, scholarshipId) => {
    e.stopPropagation(); // 이벤트 전파 차단
    setLikedItems((prev) => ({
      ...prev,
      [scholarshipId]: !prev[scholarshipId], // 현재 상태 반전
    }));
  };

  return (
    <CardStyledWrapper style={{ listStyleType: "none" }} className="Cards">
      {/* 스타일 적용된 리스트 */}
      {serverdata.map((scholarshipitem, index) => (
        <ScholarshipItem
          key={index}
          onClick={() => handleItemClick(scholarshipitem)} // 클릭 시 상태 업데이트
          style={{ cursor: "pointer" }} // 클릭 가능하게 커서 변경
        >
          <div style={{ float: "left", display: "flex", alignItems: "stretch" }}>
            <img
              src={schoolImage}
              style={{ height: "79px", width: "109px", objectFit: "contain" }}
              alt="School"
            />
          </div>

          <strong>
            <div style={{ display: "inline-block" }}> {scholarshipitem.name}</div>
          </strong>

          {/* HeartCheckbox는 독립적으로 동작 */}
          <HeartCheckbox
            scholarshipId={scholarshipitem.id}
            isLiked={likedItems[scholarshipitem.id] || false}
            onClick={(e) => handleHeartClick(e, scholarshipitem.id)} // 이벤트 전파 차단
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{scholarshipitem.description}</span>
            <div>{parseInt(scholarshipitem.price).toLocaleString() + "원"}</div>
          </div>
        </ScholarshipItem>
      ))}

      {/* 모달 컴포넌트 */}
      {selectedScholarship && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={handleCloseModal}>&times;</ModalClose>
            <h3>{selectedScholarship.name}</h3>
            <p>지역 구분: {selectedScholarship.city}</p>
            <p>학과 구분: {selectedScholarship.department || "제한 없음"}</p>
            <p>
              나이 제한: {selectedScholarship.minAge}~{selectedScholarship.maxAge}
            </p>
            <p>소득 구분: {selectedScholarship.incomeQuantile}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </CardStyledWrapper>
  );
};

export default ScholarshipCard;
