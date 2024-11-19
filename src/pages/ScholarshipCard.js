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
    const response = axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/all", {
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
    <CardStyledWrapper style={{ listStyleType: "none" }} className = "Card"> {/* 스타일 적용된 리스트 */}
      {serverdata.map((scholarshipitem, index) => (
        <ScholarshipItem key={index}>
          <strong>
            <div  style={{ }}>{scholarshipitem.name}
            </div>
            </strong>

            <div style={{ float: "left",  display: "flex", alignItems: "stretch" }}>
  <img 
    src={schoolImage} 
    style={{ 
     
     
      height: "109px", 
      width: "109px", 
      objectFit: "contain" 
    }} 
    alt="School"
  />
</div>

<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
  <span>{scholarshipitem.description}</span>
  <div>
    {parseInt(scholarshipitem.price).toLocaleString() + "원"}
  </div>
</div>

          
           
            <HeartCheckbox /> {/* 하트 버튼 컴포넌트 */}
          <div style={{ display:"flex" ,  justifyContent: "end"}}>
            <DownButton 
              onClick={() => handleToggleDetails(index)}
              src={downImage}
              alt="Expand details"
              id={scholarshipitem.button?.id || `button-${index}`} 
            /></div>
          
          
         

          {expandedScholarships[index] && (
            <DetailBox>
              <p>자세한 내용: {scholarshipitem.notes || "No additional details"}</p>
              {displayAttachment(scholarshipitem.DetailBox?.attachment)}
              {scholarshipitem.DetailBox?.link && (
                <a href={scholarshipitem.DetailBox.link} target="_blank" rel="noopener noreferrer">링크</a>
              )}
            </DetailBox>
          )}

         
        </ScholarshipItem>
      ))}
    </CardStyledWrapper>
  );
};

export default ScholarshipCard;


{/*const Card = () => {
  return (
    <StyledWrapper>
      <a className="card education" href="#">
        <div className="overlay" />
        <div className="circle">
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="29 14 71 76" height="76px" width="71px">
            <desc>Created with Sketch.</desc>
            <defs />
            <g transform="translate(30.000000, 14.000000)" fillRule="evenodd" fill="none" strokeWidth={1} stroke="none" id="Group">
              <g fill="#D98A19" id="Group-8">
                <g id="Group-7">
                  <g id="Group-6">
                    <path id="Fill-1" d="M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z" />
                  </g>
                </g>
              </g>
              <g strokeLinecap="square" stroke="#FFFFFF" transform="translate(0.000000, 14.114286)" id="Group-20">
                <path id="Line" d="M0.419998734,54.9642857 L4.70316223,54.9642857" />
                <path id="Line" d="M0.419998734,50.4404762 L4.70316223,50.4404762" />
                <path id="Line" d="M0.419998734,45.9166667 L4.70316223,45.9166667" />
                <path id="Line" d="M0.419998734,41.3928571 L2.93999114,41.3928571" />
                <path id="Line" d="M0.419998734,36.8690476 L4.70316223,36.8690476" />
                <path id="Line" d="M0.419998734,32.3452381 L4.70316223,32.3452381" />
                <path id="Line" d="M0.419998734,27.8214286 L4.70316223,27.8214286" />
                <path id="Line" d="M0.419998734,23.297619 L2.93999114,23.297619" />
                <path id="Line" d="M0.419998734,18.7738095 L4.70316223,18.7738095" />
                <path id="Line" d="M0.419998734,14.25 L4.70316223,14.25" />
                <path id="Line" d="M0.419998734,9.72619048 L4.70316223,9.72619048" />
                <path id="Line" d="M0.419998734,5.20238095 L2.93999114,5.20238095" />
                <path id="Line" d="M0.419998734,0.678571429 L4.70316223,0.678571429" />
              </g>
            </g>
          </svg>
        </div>
        <p>Education</p>
      </a>
    </StyledWrapper>
  );
}*/}