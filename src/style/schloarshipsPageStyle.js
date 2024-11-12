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
    buttonBgActive: '#1A1A1A',
    orange : '#fe6f0f',
    heartColor: 'rgb(255, 91, 137)',
    
  };
  
  // 스타일링된 컴포넌트
  const Background = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  flex-direction: column; /* 세로 방향으로 정렬 */
  height: 100vh; /* 전체 화면 높이 */
  background-color: #f8fbfe;
    
    padding: 0px 15px 15px 15px; 
  `;

// 버튼 스타일
const Button = styled.button`
    appearance: none;
    background-color: ${(props) => (props.isClicked ? colors.buttonBgActive : "transparent")};
    border: 3px solid #fe6f0f;
    border-radius: 10px;
    box-sizing: border-box;
    color: #212124 ;
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

    ${(props) =>
    props.isClicked &&
    `
        background-color: ${colors.buttonBgActive}; 
        
      `}
  `;

// 컨테이너 스타일
const CenterContainer = styled.div`
    
    justify-content: center;
    align-items: center;
    text-align:center;
    height:auto
  `;

  const SearchContainer = styled.div`
  
  position:relative;
  width: 900px;
  align-items: center;
`;

const TextInput = styled.input`
  width:670px;
  padding: 10px 12px;
  font-size: 16px;
  border: 3px solid transparent;
  border-radius: 8px;
  background-color: ${colors.inputBg};
  color: ${colors.inputText};

  border-color: #fe6f0f;
  background-color: #fff;
  box-shadow: 0 0 0 4px ${colors.inputShadow};
  
  &::placeholder {
    color: ${colors.placeholderText};
  }
`;
const FilterButton = styled.button`

  display: inline-block;
  
  background-color: transparent;
  border: 0.125em solid #1A1A1A;
  border-radius: 8px;
  color: ${colors.buttonText};
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  margin: 10px;
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



const SearchButton = styled.img`
position: absolute;
  margin: 0px;
  width: 17px; /* 버튼의 크기 설정 */
  top:6.5px;
  right:12px;
  height: 30px; /* 버튼의 크기 설정 */
  
`;



const ResetButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: 0.125em solid #1A1A1A;
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

const Selectioncontainer = styled.div`
  padding: 1px 2px 1px 2.5px;
  border: 3px solid #fe6f0f;
  border-radius: 8px;
  width: 80%; /* 부모의 크기에 상대적인 너비 */
  margin: 7.5px;
  padding: 15px;
  color: ${colors.inputText};
  box-shadow: 0 0 0 4px ${colors.inputShadow};
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  text-align: center;
  display: flex; /* flexbox 적용 */
  flex-direction: column; /* 자식 요소들을 세로로 정렬 */
`;

const Select = styled.select`
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #fe6f0f;
  background-color: #fff;
  color: #333;
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


const SliderContainer = styled.div`
  border: 3px solid #fe6f0f;
  border-radius: 8px;
  margin: 7.5px;
  padding: 15px;
  width: 80%; /* 부모의 크기에 상대적인 너비 */
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  text-align: center;
  display: flex; /* flexbox 적용 */
  flex-direction: column; /* 자식 요소들을 세로로 정렬 */
`;

const Slider = styled.input`
  -webkit-appearance: none; /* 기본 스타일 제거 */
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
const AmountLabel = styled.label`
  margin: 10px 0;
  font-size: 16px;
`;

const OverlayForm = styled.div` //검은 바탕
  position: fixed;
  top: 00px;
  left: 00px;
  width: 100vw; /* 폼의 너비를 화면의 80%로 설정 */
  height: 100vh; /* 폼의 높이를 화면의 80%로 설정 */
  background-color: rgba(0, 0, 0, 0.7);
  
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2px; /* 내부 여백 추가 */
  border-radius: 8px; /* 모서리를 둥글게 */
`;


const FilterForm = styled.div` //흰색 폼
  display: flex; /* flex로 설정 */
  flex-direction: column; /* 세로로 정렬 */
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  gap: 20px; /* 항목 간 간격을 동일하게 설정 */
  max-width: 80%; /* 최대 너비 80% */
  margin: 0 auto; /* 부모 요소에서 중앙 정렬 */
`;

  
  // 필드셋 스타일
  const Fieldset = styled.fieldset`
    border: 5px solid ${colors.navy};
    border-radius: 8px;
    padding: 10px 10px 10px 0px; 
    width: 95%;
    margin-top: 40px;
    margin: 0 auto;
    max-height: 700px; /* 적절한 높이로 설정하세요, 10개 항목을 고려한 높이입니다 */
    overflow-y: auto; /* 스크롤 가능하도록 설정 */
  `;

// 리스트 스타일
const List = styled.ul`
  list-style-type: none;
  display: flex; /* Flexbox 사용 */
  justify-content: space-between; /* 양쪽 정렬 */
  flex-direction:column;
    padding: 0;
    margin: 5px;
  `;

// 리스트 아이템 스타일
const ScholarshipItem = styled.li`
    margin: 10px;
    padding: 15px 10px 10px 15px;
    font-size: 17px;
    border:4px solid #fe6f0f;
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
  border-radius: 4px; /* 모서리 둥글게 */ 
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
  border-radius: 6px; /* 모서리 둥글게 */ 
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

const StyledWrapper = styled.div`
  .con-like {
    --red: rgb(255, 50, 50);
    position: relative;
    width: 50px;
    height: 50px;
  }

  .con-like .like {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 20;
    cursor: pointer;
  }

  .con-like .checkmark {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .con-like .outline,
  .con-like .filled {
    fill: var(--red);
    position: absolute;
  }

  .con-like .filled {
    animation: kfr-filled 0.5s;
    display: none;
  }

  .con-like .celebrate {
    position: absolute;
    animation: kfr-celebrate 0.5s;
    animation-fill-mode: forwards;
    display: none;
  }

  .con-like .poly {
    stroke: var(--red);
    fill: var(--red);
  }

  .con-like .like:checked ~ .checkmark .filled {
    display: block
  }

  .con-like .like:checked ~ .checkmark .celebrate {
    display: block
  }

  @keyframes kfr-filled {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }

  @keyframes kfr-celebrate {
    0% {
      transform: scale(0);
    }

    50% {
      opacity: 0.8;
    }

    100% {
      transform: scale(1.2);
      opacity: 0;
      display: none;
    }
  }`;

  
  
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
    DetailBox,
    Selectioncontainer,
    SearchButton,
    OverlayForm,
    FilterForm,
    FilterButton,
    Slider,
    AmountLabel,
    Select,
    StyledWrapper
    
    
    
    
  };
