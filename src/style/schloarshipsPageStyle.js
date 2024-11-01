import styled, { keyframes } from 'styled-components';
import downImage from '../png/down.png'; // 이미지 파일을 import

const colors = {
    primary: '#4CAF50',
    inputBg: '#f3f3f4',
    inputText: '#0d0c22',
    inputBorderHover: 'rgba(247, 127, 0, 0.4)',
    inputShadow: 'rgb(247 127 0 / 10%)',
    placeholderText: '#9e9ea7',
    buttonText: '#3B3B3B',
    buttonBgHover: '#1A1A1A',
    ivory: "#FFFFF0",
    navy: "#000080",
    lightNavy: "#000066",
    darkIvory: "#F5F5DC",
    heartColor: 'rgb(255, 91, 137)',
  };
  
  // 스타일링된 컴포넌트
  const Background = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  flex-direction: column; /* 세로 방향으로 정렬 */
  height: 100vh; /* 전체 화면 높이 */
    background-color: ${colors.darkIvory};
    min-height: 100px;
    padding: 20px;
  `;
  
  
  // 검색어 입력창 스타일
  const TextInput = styled.input`
    width: 55%;
    line-height: 40px;
    padding: 0 1px 0 2.5rem;
    border: 3px solid transparent;
    border-radius: 8px;
    margin: 0 auto;
    outline: none;
    background-color: ${colors.inputBg};
    color: ${colors.inputText};
    transition: 0.3s ease;
    outline: none;
      border-color: ${colors.navy};
      background-color: #fff;
      box-shadow: 0 0 0 4px ${colors.inputShadow};
    
  
    &::placeholder {
      color: ${colors.placeholderText};
    } 
    
  `;
  
  // 버튼 스타일
  const Button = styled.button`
    appearance: none;
    background-color: transparent;
    border: 0.125em solid #1A1A1A;
    border-radius: 0.9375em;
    box-sizing: border-box;
    color: ${colors.buttonText};
    cursor: pointer;
    display: inline-block;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    margin: 13px;
    min-height: 3.75em;
    padding: 1em 2.3em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
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

  // 컨테이너 스타일
  const CenterContainer = styled.div`
    
    justify-content: center;
    align-items: center;
    text-align:center;
    height:auto
    

  `;

  const ResetButton = styled.button`
    appearance: none;
    background-color: transparent;
    border: 0.125em solid #1A1A1A;
    border-radius: 0.9375em;
    box-sizing: border-box;
    color: ${colors.buttonText};
    cursor: pointer;
    display: inline;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    margin: 25px;
    
    padding: 1em 2.3em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
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
  `

  const SearchContainer = styled.div`
  width: 100%;
  text-align: center; /* 자식 요소들을 수평 중앙 정렬 */
  padding-top: 20px; /* 필요시 세로 중앙 정렬을 위한 상단 여백 */
  `;

  const SliderContainer = styled.div`
  border: 3px solid ${colors.navy};
  border-radius: 5px;
  padding: 15px; /* 필요에 따라 패딩 추가 */
  width : 60% 
 text-
  justify-content: center; /* 중앙 정렬 필요시 */
  align-items: center; /* 중앙 정렬 필요시 */
  text-align: center; /*

`;
  
  // 필드셋 스타일
  const Fieldset = styled.fieldset`
    border: 5px solid ${colors.navy};
    border-radius: 8px;
    padding: 10px 10px 10px 3px; 
    width: 95%;
    margin: 0 0 0 0;
    max-height: 500px; /* 적절한 높이로 설정하세요, 10개 항목을 고려한 높이입니다 */
    overflow-y: auto; /* 스크롤 가능하도록 설정 */
  `;
  
  // 리스트 스타일
  const List = styled.ul`

  list-style-type: none;
    display: flex; /* Flexbox 사용 */
  justify-content: space-between; /* 양쪽 정렬 */
  flex-direction:column;
    paddings: 0;
    margin: 5px;
  `;
  
  // 리스트 아이템 스타일
  const ScholarshipItem = styled.li`
    margin: 10px;
    padding: 5px;
    font-size: 17px;
    border:1px solid gray;
    border-radius: 8px;
    
    
  `;
  // 금액 스타일
  const ScholarshipAmount = styled.div`
   
    flex-direction: column;
    text-align: right;
    font-size: 20px;
  `;

  const DownButton = styled.img`
  margin-left: 10px;
  width: 30px; /* 버튼의 크기 설정 */
  height: 30px; /* 버튼의 크기 설정 */
  border: 1px solid gray; /* 테두리 */
  border-radius: 3px; /* 모서리 둥글게 */ 
  background-color: rgba(249, 249, 249, 0.5); /* 배경색 */
`;

const DetailBox = styled.div`
  line-height: 170%;
  flex-direction: column; /*
  margin: 15px 20px 20px 10px;
  width: 90%; /* 부모의 전체 너비 사용 */
  margin : 20px;
  padding: 10px; /* 안쪽 여백 */
  border: 1px solid gray; /* 테두리 */
  border-radius: 3px; /* 모서리 둥글게 */ 
  background-color: rgba(249, 249, 249, 0.5); /* 배경색 */
  color: black; /* 글자색 */
`;

const ListItem = styled.li`
  margin: 35px;
  padding: 1px;
  display: inline-block;
`;
  const ListContainer = styled.ol`
  
  margin: 0;
  padding: 0;
`;




 

  
  
  
  export {
    TextInput,
    Button,
    ResetButton,
    Fieldset,
    List,
    ScholarshipItem,
    ScholarshipAmount,
    CenterContainer,
    Background,
    ListItem,
    ListContainer,
    SliderContainer,
    SearchContainer,
    DownButton,
    DetailBox
    
    
  };