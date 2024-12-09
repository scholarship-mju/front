import styled from 'styled-components';

export const colors = {
    primary: '#4CAF50',
    inputBg: '#f3f3f4',
    inputText: '#0d0c22',
    inputBorderHover: 'rgba(247, 127, 0, 0.4)',
    inputShadow: 'rgb(247 127 0 / 10%)',
    placeholderText: '#9e9ea7',
    buttonText: '#3B3B3B',
    buttonBgHover: '#1A1A1A',
    buttonBgActive: '#1A1A1A',
    orange : '#fe6f0f',
    heartColor: 'rgb(255, 91, 137)',
  };

export const Background = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  min-height: 100vh; /* 화면 전체를 채우도록 설정 */
  padding: 5px; /* 여백 설정 */
  background-color: #fff; /* 배경색 */
`;

export const ScholarLogo = styled.img`
  max-width: 18%;
  display: block;
  margin: 0 auto;
  margin-top: 17px;
`;

export const MainThree = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  gap: 5px;
  min-height: 100vh;
`;

export const Filterbox = styled.div`
  display: block;
  height : 100%;
  width: 13%;
  padding: 5px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);   
`;

export const Display = styled.div`
  display: flex-block;
  width: 80%;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* 스크롤 허용 */
  height: auto; /* 높이를 내용물에 따라 조정 */
  margin: 0 auto;
  margin-left: 10px;

  .imagebox {
    border-radius: 8px;
    margin: 10px auto;
    width: 90%;
    height: 500px;
    color: #ffffff;
    background-color: #FFFFFF;
    border: 3px solid #000000; 
  }

  .infobox {
    border-radius: 8px;
    margin: 10px auto;
    width: 95%;
    height: auto;
    color: #ffffff;
    background-color: #000000;
    border: 3px solid #333333; 
  }
`;

export const Cardbox = styled.div`
  width: 11%;
  padding: 0px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
`;

export const KingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 12px;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
`;

export const KingLogo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;

export const KingListContainer = styled.ul`
  list-style: none;
  border-bottom: 1px solid #ddd;
  padding: 0;
  width: 80%;
  margin: 0;
`;

export const ListBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }

  span {
    font-weight: bold;
  }
`;