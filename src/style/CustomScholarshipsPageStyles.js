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
  margin-top: 13px;
`;

export const ResetButton = styled.button`
  display: inline-block;
  flex: 1.5; /* 전체 너비의 15% */
  background-color: transparent;
  border: 1px solid #1A1A1A;
  border-radius: 8px;
  color: ${colors.buttonText};
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  margin: 5px;
  padding: 5px;
  
  text-align: center;
  touch-action: manipulation;
  
  &:disabled {
    pointer-events: none;
  }
  
  &:hover {
    color: #fff;
    background-color: ${colors.buttonBgHover};
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const GoButton = styled.button`
  flex: 1.5; /* 전체 너비의 15% */
  background-color: transparent;
  border: 1px solid #1A1A1A;
  border-radius: 8px;
  color: ${colors.buttonText};
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  margin: 5px;
  padding: 5px;
  
  text-align: center;
  touch-action: manipulation;
  
  &:disabled {
    pointer-events: none;
  }
  
  &:hover {
    color: #fff;
    background-color: ${colors.buttonBgHover};
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const Select = styled.select`
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #fe6f0f;
  background-color: #fff;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box; /* Padding 포함해서 전체 크기 맞추기 */

  /* 드롭다운 화살표 스타일 */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"%3E%3Cpath fill="none" stroke="%23666666" stroke-width="2" d="M12 4L8 8L4 4" /%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
  
  &:focus {
    outline: none;
    border-color: #fe6f0f;
  }

  option {
    padding: 10px;
  }
`;

export const Slider = styled.input`
  width: 100%; /* 부모 크기에 맞춰 너비 */
  height: 8px; /* 슬라이더의 높이 */
  background: #FFFFFF; /* 슬라이더 배경 */
  border: 3px solid #212124;
  border-radius: 5px; /* 슬라이더 모서리 둥글게 */
  
  transition: background 0.3s; /* 마우스를 올리면 색상 변화 */

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* 기본 thumb 스타일 제거 */
    appearance: none;
    width: 20px; /* thumb의 너비 */
    height: 20px; /* thumb의 높이 */
    border-radius: 50%; /* thumb을 둥글게 */
    background: #fe6f0f; /* thumb 색상 */
    cursor: pointer; /* 마우스 커서 변경 */
  }

  &::-moz-range-thumb {
    width: 20px; /* thumb의 너비 */
    height: 20px; /* thumb의 높이 */
    border-radius: 50%; /* thumb을 둥글게 */
    background: #fe6f0f; /* thumb 색상 */
    cursor: pointer; /* 마우스 커서 변경 */
  }

  &:hover {
    background: #ffffff; /* 슬라이더 배경 색상 변화 */
  }

  &:focus {
    outline: none; /* 포커스 시 아웃라인 제거 */
  }
`;

export const AmountLabel = styled.label`
  margin: 10px 0;
  font-size: 16px;
`;



export const FilterContainer = styled.div` //흰색 폼
  display: flex; /* flex로 설정 */
  background-color: white;
  padding: 20px 5px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
 
  max-width: 90%; /* 최대 너비 80% */
  margin: 12px;/* 부모 요소에서 중앙 정렬 */
  
`;

  // 필드셋 스타일
export const Fieldset = styled.fieldset`
    border: 5px solid ${colors.navy};
    border-radius: 8px;
    padding: 10px 10px 10px 0px; 
    width: 95%;
    margin-top: 40px;
    margin: 0 auto;
    max-height: 700px; /* 적절한 높이로 설정하세요, 10개 항목을 고려한 높이입니다 */
    overflow-y: auto; /* 스크롤 가능하도록 설정 */
  `;

export const MainThree = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  gap: 10px;
  min-height: 100vh;
`;

export const Filterbox = styled.div`
  display: block;
  width: 600px;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: 0;
`;

export const Display = styled.div`
  display: block;
  width: 160%;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* 스크롤 허용 */
  height: auto; /* 높이를 내용물에 따라 조정 */
  margin-left: 20px;
  
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
  width: 200px;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
`;

export const KingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 12px;
  width: 80%;
  background: linear-gradient(135deg, #f5f5f5, #ffffff);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const KingLogo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;

export const KingListContainer = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
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