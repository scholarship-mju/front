import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import mypageLogo from "../png/mypage.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 10px;
  height: auto;

  @media (min-width: 768px) {
    width: 250px;
    border-bottom: none;
    border-right: 1px solid #ddd;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    height: 100%;
  }
`;


const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: auto;

  @media (min-width: 768px) {
    padding: 40px;
    margin: 40px;
  }
`;

const InfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const InfoItem = styled.div`
  flex: 1 1 45%;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 80px;
  max-height: 120px;
  flex-shrink: 1;
  overflow: hidden;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  background-color: white;
  color: #333;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #ff6a00;
    box-shadow: 0 0 5px rgba(255, 106, 0, 0.5);
  }
`;

const ScholarshipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ScholarshipItem = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  height: 100px;
  position: relative; /* 삭제 버튼 위치를 절대 위치로 설정하기 위함 */
`;

const ScholarshipName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const ScholarshipPrice = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #666;
  text-align: right;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? "#ff6a00" : "white")};
  color: ${(props) => (props.primary ? "white" : "#ff6a00")};
  border: 1px solid #ff6a00;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "#e55b00" : "#ff6a00")};
    color: white;
  }
`;

const MyPageLogo = styled.img`
  max-width: 100px;
  margin-bottom: 30px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    color: #e55b00;
  }
`;


const TabButton = styled.button`
  width: 100%;
  padding: 15px 10px;
  background-color: ${(props) => (props.active ? "#ff6a00" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: ${(props) => (props.active ? "2px solid #ff6a00" : "1px solid #ddd")};
  border-radius: 5px;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#e55b00" : "#f5f5f5")};
    color: ${(props) => (props.active ? "white" : "#333")};
  }
`;

function MyPage() {
  const [memberInfo, setMemberInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({});
  const [activeTab, setActiveTab] = useState("info");
  const [interestedScholarships, setInterestedScholarships] = useState([]);

  useEffect(() => {
    const fetchMemberInfo = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMemberInfo(response.data);
        setUpdatedInfo(response.data);
      } catch {
        setError("정보를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchMemberInfo();
  }, []);

  useEffect(() => {
    if (activeTab === "scholarships") {
      const fetchInterestedScholarships = async () => {
        const token = localStorage.getItem("accessToken");
        try {
          const response = await axios.get(
            "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/interest",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setInterestedScholarships(response.data);
        } catch (err) {
          console.error("찜한 장학금을 가져오는 중 오류가 발생했습니다:", err);
        }
      };

      fetchInterestedScholarships();
    }
  }, [activeTab]);

  const renderInfoField = (label, name) => (
    <InfoItem key={name}>
      <span>{label}</span>
      {isEditing ? (
        <StyledInput
          type="text"
          name={name}
          value={updatedInfo[name] || ""}
          onChange={(e) =>
            setUpdatedInfo((prev) => ({
              ...prev,
              [name]: e.target.value,
            }))
          }
        />
      ) : (
        <span>{memberInfo ? memberInfo[name] : "로딩 중..."}</span>
      )}
    </InfoItem>
  );

  const handleSave = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.post(
        "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/my",
        updatedInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setMemberInfo(updatedInfo);
      setIsEditing(false);
      alert("정보가 성공적으로 저장되었습니다.");
    } catch (error) {
      console.error("정보 저장 중 오류 발생:", error);
      alert("정보 저장 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const deleteScholarship = async (scholarshipId) => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.delete(
        `http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/interest/${scholarshipId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // 성공적으로 삭제되었으므로 로컬 상태에서 해당 항목 삭제
      setInterestedScholarships((prev) =>
        prev.filter((scholarship) => scholarship.id !== scholarshipId)
      );
      alert("장학금이 삭제되었습니다.");
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
      alert("장학금을 삭제하는 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };
  

  

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <Sidebar>
  <MyPageLogo src={mypageLogo} alt="MyPage Logo" />
  <TabButton
    active={activeTab === "info"}
    onClick={() => setActiveTab("info")}
  >
    내 정보
  </TabButton>
  <TabButton
    active={activeTab === "scholarships"}
    onClick={() => setActiveTab("scholarships")}
  >
    찜한 장학금
  </TabButton>
</Sidebar>

      <MainContent>
        {activeTab === "info" && (
          <>
            <SectionTitle>내 정보</SectionTitle>
            <InfoGrid>
              {[
                { label: "닉네임", name: "nickname" },
                { label: "사용자 이름", name: "username" },
                { label: "이메일", name: "email" },
                { label: "전화번호", name: "phone" },
                { label: "대학교", name: "university" },
                { label: "나이", name: "age" },
                { label: "성별", name: "gender" },
                { label: "도/광역시", name: "province" },
                { label: "시/구/군", name: "city" },
                { label: "학과", name: "department" },
                { label: "학점", name: "grade" },
                { label: "소득 분위", name: "incomeQuantile" },
              ].map((field) => renderInfoField(field.label, field.name))}
            </InfoGrid>
            <ButtonContainer>
              <Button
                primary
                onClick={() => {
                  if (isEditing) {
                    handleSave();
                  } else {
                    setIsEditing(true);
                  }
                }}
              >
                {isEditing ? "저장" : "수정"}
              </Button>
            </ButtonContainer>
          </>
        )}
        {activeTab === "scholarships" && (
          <>
            <SectionTitle>찜한 장학금</SectionTitle>
            <ScholarshipGrid>
  {interestedScholarships.length > 0 ? (
    interestedScholarships.map((scholarship) => (
      <ScholarshipItem key={scholarship.id}>
        <DeleteButton onClick={() => deleteScholarship(scholarship.id)}>×</DeleteButton>
        <ScholarshipName>{scholarship.name}</ScholarshipName>
        <ScholarshipPrice>{scholarship.price}원</ScholarshipPrice>
      </ScholarshipItem>
    ))
  ) : (
    <p>등록된 장학금이 없습니다.</p>
  )}
</ScholarshipGrid>
          </>
        )}
      </MainContent>
    </Container>
  );
}

export default MyPage;
