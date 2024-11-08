import React, { useState } from "react";
import ToggleButton from "./ToggleButton.js";

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (label) => {
    setActiveButton(label);  // 클릭된 버튼을 활성화 상태로 변경
  };

  return (
    <div>
      <ToggleButton
        label="Option 1"
        isActive={activeButton === "Option 1"}
        onClick={() => handleButtonClick("Option 1")}  // Option 1을 클릭하면 활성화
      />
      <ToggleButton
        label="Option 2"
        isActive={activeButton === "Option 2"}
        onClick={() => handleButtonClick("Option 2")}  // Option 2를 클릭하면 활성화
      />
      <ToggleButton
        label="Option 3"
        isActive={activeButton === "Option 3"}
        onClick={() => handleButtonClick("Option 3")}  // Option 3을 클릭하면 활성화
      />
    </div>
  );
};

export default ButtonGroup;
