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
  max-width: 16%;
  display: block;
  margin: 0 auto;
  margin-top: 17px;
`;

export const TextInput = styled.input`
  width: 50%;
  height: 5%;
  padding: 10px;
  margin : 0 auto;
  font-size: 20px;
  border: 1px solid ;

  border-radius: 8px;
  background-color: ${colors.inputBg};
  color: ${colors.inputText};
  background-color: #fff;
  
  &::placeholder {
    color: ${colors.placeholderText};
  }
`;

export const ResetButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: 1px solid #1A1A1A;
  border-radius: 8px;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
  padding : 3px;
  
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
  background-color: transparent;
  border: 1px solid #1A1A1A;
  border-radius: 8px;
  color: ${colors.buttonText};
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  margin: 0 auto;
  padding: 3px;
  
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

export const FiltersmallContainer = styled.div` //흰색 폼
  display: flex; /* flex로 설정 */
  height: 2%;
  background-color: white;
  padding:  5px;
  border-radius: 8px;
  font-size : 13px;
  background-color: transparent;
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  max-width: 100%; /* 최대 너비 80% */
  margin: 12px auto; /* 부모 요소에서 중앙 정렬 */
`;

// 리스트 아이템 스타일
export const ScholarshipItem = styled.li`
  margin: 15px;
  padding: 15px 10px 10px 15px;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 1px 4px 6px 1px rgba(0, 0, 0, 0.2);

  display: flex; /* Flexbox로 설정 */
  width: auto; /* 부모에 맞게 크기 조정 */
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const FilterModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  position: relative;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

//하트버튼 
export const StyledWrapper = styled.div `
  .con-like {
    --red: rgb(255, 50, 50);
    position: relative;
    width: 46px;
    height: 46px;
  }

  .con-like .like {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 20;
    cursor: pointer;
  }
.like{
left : 0px;
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
 /* 체크 해제: unfilled 애니메이션 */
  .con-like .like:not(:checked) ~ .checkmark .filled {
    display: block;
    animation: kfr-unfilled 0.5s forwards;
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
      
  }
    @keyframes kfr-unfilled {
    0% {
      opacity: 1;
      transform: scale(1);
    }

    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }

    100% {
      opacity: 0;
      transform: scale(0);
      display: none;
    }
  }`;

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

export const FilterContainer = styled.div` 
  display: flex; /* flex로 설정 */
  height: 10%;
  background-color: white;
  padding: 15px 10px;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  max-width: 80%; /* 최대 너비 95% */
  margin: 15px auto; /* 부모 요소에서 중앙 정렬 */
  
  /* 마우스를 올렸을 때 스타일 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  transition: background-color 0.3s ease; /* 배경색 전환 애니메이션 */

  &:hover {
    background-color: #f8f8f8; /* 마우스 올렸을 때 배경색 변경 */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* 그림자 강화 */
  }
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