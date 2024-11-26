import styled, { createGlobalStyle } from "styled-components";
import React, { useState, useEffect } from 'react';
import { List, LoadMoreButton, ScholarshipItem, DownButton ,ScholarshipAmount,DetailBox} from '../style/schloarshipsPageStyle';
import axios from 'axios';
import HeartCheckbox from './HeartButton';  // HeartCheckbox 컴포넌트
import downImage from '../png/down.png';
import schoolImage from '../png/5-1.jpg';
import { CardStyledWrapper } from '../style/schloarshipsPageStyle';

const ScholarshipCard = () => {
  const [serverdata, setServerdata] = useState([]); // 서버에서 가져온 데이터
  const [expandedScholarships, setExpandedScholarships] = useState({});

  // 서버에서 데이터 가져오기
  useEffect(() => {
    const token = " "; // 실제 토큰 값 입력
    axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setServerdata(response.data); // 서버 데이터 설정
        console.log(response.data); // 데이터 확인용 콘솔 출력
      })
      .catch((error) => {
        console.error('데이터 가져오기 실패:', error);
      });
  }, []);

  // 디테일 토글 핸들러
  const handleToggleDetails = (index) => {
    setExpandedScholarships((prev) => ({
      ...prev,
      [index]: !prev[index], // 현재 상태 반전
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

  return (
    <CardStyledWrapper style={{ listStyleType: "none" }} className="Cards"> {/* 스타일 적용된 리스트 */}
      {serverdata.map((scholarshipitem, index) => (
        <ScholarshipItem 
        key={index} 
        onClick={() => handleToggleDetails(index)} // 클릭 시 상세정보 토글
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
          <div display="inline-block"> {scholarshipitem.name}</div>
        </strong>
          <HeartCheckbox scholarshipId={scholarshipitem.id} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>{scholarshipitem.description}</span>
          <div>{parseInt(scholarshipitem.price).toLocaleString() + "원"}</div>
        </div>
        {expandedScholarships[index] && (

          <DetailBox>
            <p>세부 설명 <hr></hr>
            <div>지역 구분 : {scholarshipitem.city}</div></p>
            <div>학과 구분 : {scholarshipitem.department || "제한 없음"}</div>
            <div>나이 제한 : {scholarshipitem.minAge}~{scholarshipitem.maxAge}</div>
            <div>소득 구분 : {scholarshipitem.incomeQuantile}</div> 
            
          </DetailBox>
          
        )}
      </ScholarshipItem>
      ))}
    </CardStyledWrapper>
  );
};

export default ScholarshipCard;