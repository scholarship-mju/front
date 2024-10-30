import styled, { keyframes } from 'styled-components';

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
    position: relative; /* 자식 요소의 absolute 위치 기준 */
  `;
  
  
  // 검색어 입력창 스타일
  const TextInput = styled.input`
    width: 100%;
    max-width: 500px;
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
  padding-top: 100px; /* 필요시 세로 중앙 정렬을 위한 상단 여백 */
  `;

  const SliderContainer = styled.div`
  border: 3px solid ${colors.navy};
  padding: 10px; /* 필요에 따라 패딩 추가 */
  width : 50% 
   display: flex; /* 혹은 display: grid; */
  justify-content: center; /* 중앙 정렬 필요시 */
  align-items: center; /* 중앙 정렬 필요시 */
  text-align: center; /*

`;
  
  // 필드셋 스타일
  const Fieldset = styled.fieldset`
    border: 5px solid ${colors.navy};
    border-radius: 8px;
    padding: 10px 10px 10px 10px; 
    width: 90%;
    margin: 0 10px 0 0;
    max-height: 500px; /* 적절한 높이로 설정하세요, 10개 항목을 고려한 높이입니다 */
    overflow-y: auto; /* 스크롤 가능하도록 설정 */
  `;
  
  // 리스트 스타일
  const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 15px;
  `;
  
  // 리스트 아이템 스타일
  const ScholarshipItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
     font-size: 17px;
    font-styly:bold;
  `;
  
  const Unit = styled.div`
    text-align: right;
    margin-bottom: 0;
  `;

 
  
  // 금액 스타일
  const ScholarshipAmount = styled.div`
    margin-left: auto;
    text-align: right;
    font-size: 20px;
    font-styly:bold;
    
  `;

  

  

  const ListContainer = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 40px;
  padding: 0;
  display: inline-block;
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
    SearchContainer
    
    
  };