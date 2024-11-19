import React, { useState } from 'react';
import downImage from '../png/down.png'; // 'down.png' 이미지 가져오기
import upImage from '../png/up.png'; // 'up.png' 이미지도 가져와서 확장된 상태일 때 표시할 이미지로 사용


const ScholarshipList = () => {
  const [expandedScholarships, setExpandedScholarships] = useState({});

  // 장학금 세부 사항 토글 함수
  const handleToggleDetails = (index) => {
    setExpandedScholarships((prev) => ({
      ...prev,
      [index]: !prev[index] // 해당 인덱스의 장학금 항목을 토글
    }));
  };

  const scholarships = [
    { title: '장학금 A', description: '장학금 A의 세부 정보' },
    { title: '장학금 B', description: '장학금 B의 세부 정보' },
    { title: '장학금 C', description: '장학금 C의 세부 정보' }
  ];

  return (
    <div>
      {scholarships.map((scholarship, index) => (
        <div key={index}>
          <h3>{scholarship.title}</h3>
          <p>{expandedScholarships[index] ? scholarship.description : null}</p>
          <button onClick={() => handleToggleDetails(index)}>
            <img
              src={expandedScholarships[index] ? upImage : downImage} // 세부 사항이 확장되면 'up.png' 사용
              alt={expandedScholarships[index] ? 'Collapse details' : 'Expand details'}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ScholarshipList;
