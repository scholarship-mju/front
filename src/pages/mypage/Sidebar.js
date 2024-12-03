import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mypageLogo from "../../png/mypage.png";

const SidebarContainer = styled.div`
  width: 20%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const MyPageLogo = styled.img`
  max-width: 12%;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.active ? "#ff6a00" : "white")};
  color: ${(props) => (props.active ? "white" : "#ff6a00")};
  border: none;
  text-align: left;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ff6a00;
    color: white;
  }
`;

function Sidebar({ activeTab }) {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <MyPageLogo src={mypageLogo} alt="My Page Logo" />
      <TabButton
        active={activeTab === "/mypage/info"}
        onClick={() => navigate("/mypage/info")}
      >
        내 정보
      </TabButton>
      <TabButton
        active={activeTab === "/mypage/interest"}
        onClick={() => navigate("/mypage/interest")}
      >
        찜한 장학금
      </TabButton>
    </SidebarContainer>
  );
}

export default Sidebar;
