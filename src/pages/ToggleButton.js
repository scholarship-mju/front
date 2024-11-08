import React from "react";
import { Button } from "../style/schloarshipsPageStyle"; // Button 스타일 가져오기

const ToggleButton = ({ label, isActive, onClick }) => {
  return (
    <Button isClicked={isActive} onClick={onClick}>
      {label}
    </Button>
  );
};

export default ToggleButton;