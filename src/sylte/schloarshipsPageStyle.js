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
    background-color: ${colors.darkIvory};
    min-height: 100vh;
    padding: 20px;
  `;
  
  
  // 검색어 입력창 스타일
  const TextInput = styled.input.attrs({ type: 'text' })`
    width: 100%;
    max-width: 500px;
    line-height: 40px;
    padding: 0 1px 0 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: ${colors.inputBg};
    color: ${colors.inputText};
    transition: 0.3s ease;
  
    &::placeholder {
      color: ${colors.placeholderText};
    }
  
    &:focus,
    &:hover {
      outline: none;
      border-color: ${colors.inputBorderHover};
      background-color: #fff;
      box-shadow: 0 0 0 4px ${colors.inputShadow};
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
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 20px;
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
  
  // 필드셋 스타일
  const Fieldset = styled.fieldset`
    border: 5px solid ${colors.navy};
    border-radius: 8px;
    padding: 10px;
    margin: 0 10px 0 0;
  `;
  
  // 리스트 스타일
  const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
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
  
  // 컨테이너 스타일
  const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  

 

  
  // Heart 컨테이너 스타일
  const HeartContainer = styled.div`
    --heart-color: ${colors.heartColor};
    position: relative;
    width: 50px;
    height: 50px;
    transition: 0.3s;
  
    .checkbox {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 20;
      cursor: pointer;
    }
  
    .svg-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .svg-outline,
    .svg-filled {
      fill: var(--heart-color);
      position: absolute;
    }
  
    
  
    .checkbox:checked ~ .svg-container .svg-filled {
      display: block;
    }
  
    .checkbox:checked ~ .svg-container .svg-celebrate {
      display: block;
    }
  `;
  
  export {
    TextInput,
    Button,
    Fieldset,
    List,
    ScholarshipItem,
    ScholarshipAmount,
    CenterContainer,
    Background
  };