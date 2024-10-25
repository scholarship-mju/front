import React, { useEffect, useState } from "react";

function MyPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const loginId = localStorage.getItem("loginId");
      if (loginId) {
        try {
          const response = await fetch(`/user-info?username=${loginId}`);
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("사용자 정보 불러오기 오류:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h2>{userData.name}님의 마이페이지</h2>
      <p>생년월일: {userData.birthdate}</p>
      <p>전화번호: {userData.phone}</p>
      <p>이메일: {userData.email}</p>
      <p>사는 지역: {userData.location}</p>
      <p>어학 성적: {userData.languageScores}</p>
      <p>추가 정보: {userData.additionalInfo}</p>
    </div>
  );
}

export default MyPage;