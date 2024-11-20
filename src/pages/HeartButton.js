import React, { useState } from "react";
import axios from "axios";
import { StyledWrapper } from "../style/schloarshipsPageStyle";

const HeartCheckbox = ({ scholarshipId }) => {
  const [isLiked, setIsLiked] = useState(false); // 찜 상태 관리
  const [successMessage, setSuccessMessage] = useState(""); // 성공 메시지 상태 관리

  const handleLikeClick = async () => {
    const token = localStorage.getItem("accessToken"); // 실제 토큰 값 입력

    try {
      if (isLiked) {
        // 찜 상태일 경우: 찜 해제 요청
        await axios.delete(
          `http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/${scholarshipId}/interest`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // 인증 토큰 포함
            },
          }
        );
        console.log("찜 해제 성공");
        setIsLiked(false); // 찜 상태 해제
        setSuccessMessage("찜 해제 성공!"); // 성공 메시지 설정
      } else {
        // 찜 상태가 아닐 경우: 찜 등록 요청
        await axios.post(
          `http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/interest/${scholarshipId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("찜 등록 성공");
        setIsLiked(true); // 찜 상태 활성화
        setSuccessMessage("찜 등록 성공!"); // 성공 메시지 설정
      }

      // 성공 메시지를 3초 후 제거
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("찜 상태 변경 실패:", error);
      setSuccessMessage("실패했습니다. 다시 시도해주세요."); // 에러 메시지 설정
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <StyledWrapper style={{ display: "flex", justifyContent: "end" }}>
      <div className="con-like">
        <input
          className="like"
          type="checkbox"
          title="like"
          checked={isLiked} // 애니메이션과 연동
          onChange={handleLikeClick} // 클릭 시 API 호출 및 상태 토글
        />
        <div className="checkmark">
        <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="-2 -2 28 28" >
  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
        fill="none" 
        stroke="black" />
</svg>


          <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height={100} width={100} className="celebrate">
            <polygon className="poly" points="10,10 20,20" />
            <polygon className="poly" points="10,50 20,50" />
            <polygon className="poly" points="20,80 30,70" />
            <polygon className="poly" points="90,10 80,20" />
            <polygon className="poly" points="90,50 80,50" />
            <polygon className="poly" points="80,80 70,70" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default HeartCheckbox;