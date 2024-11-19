import React, { useState, useEffect } from 'react';
import { CardStyledWrapper, LoadMoreButton } from '../style/schloarshipsPageStyle';
import ScholarshipCard  from './ScholarshipCard.js';
import axios from 'axios';
import HeartCheckbox from './HeartButton';  // ButtonGroup 임포트

function LoadMoreGrid() {
  const [serverdata, setServerdata] = useState([]); // 서버에서 가져온 데이터
  const [itemsToShow, setItemsToShow] = useState(16); // 표시할 항목 수 상태
  
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

  // "더보기" 클릭 시 보여줄 항목 수를 증가
  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 16); // 16개씩 추가로 아이템을 보여줌
  };

  return (
    <div className="CardField">
      <ScholarshipCard className="card" />

      {/* 모든 항목을 보여준 경우 "더보기" 버튼 숨기기 */}
      {itemsToShow < serverdata.length && (
        <LoadMoreButton onClick={handleLoadMore}>더보기</LoadMoreButton>
      )}
    </div>
  );
}

export default LoadMoreGrid;
