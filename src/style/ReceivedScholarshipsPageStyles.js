import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const colors = {
  white: "white",
  orange: "#ff6a00",
  background_color: "#ffd8cc",
  white: "white",
};
// 스타일링된 컴포넌트
export const Background = styled.div`
  min-height: 100vh;
  padding: 20px;
`;

export const Container = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1600px;
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const MyButton = styled(Link)`
  margin-left: 10px;
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  background-color: #ffece6;
  color: ${colors.orange};
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;
  &:hover {
    background-color: ${colors.background_color};
    color: #ff5a00;
  }
`;

export const ReceiveLogo = styled.img`
  max-width: 16%;
  display: block;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  padding: 12px;
  background-color: ${colors.orange};
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const TableHeaderRight = styled.th`
  padding: 12px;
  background-color: ${colors.orange};
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 1.1rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TableHeaderLeft = styled.th`
  padding: 12px;
  background-color: ${colors.orange};
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 1.1rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
`;

export const TableBody = styled.tbody`
  .fade-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 300ms ease-in,
      transform 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition:
      opacity 300ms ease-in,
      transform 300ms ease-in;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

export const WarningText = styled.p`
  margin-top: 20px;
  color: #e74c3c;
  text-align: center;
`;

export const TotalAmount = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 280px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  color: white;
  background-color: ${colors.orange};
`;

export const Form = styled.form`
  border: 2px solid black;
  border-radius: 10px;
  margin: 0px 10px;
  --timing: 0.3s;
  --width-of-input: 200px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #2f2ee9;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg, #fff);

  &:focus-within {
    border-radius: var(--after-border-radius);
  }

  &:focus-within::before {
    transform: scale(1);
  }

  &::before {
    content: "";
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
  }
`;

export const Input = styled.input`
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: #8b8ba7;
`;

export const ResetButton = styled(Button)`
  opacity: 0;
  visibility: hidden;

  &:focus + .reset {
    opacity: 1;
    visibility: visible;
  }
`;

export const Svg = styled.svg`
  width: 17px;
  margin-top: 3px;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

export const AuthButton = styled.button`
  background-color: ${(props) => (props.isVerified ? "#2ecc71" : "#e74c3c")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isVerified ? "#27ae60" : "#c0392b")};
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #2980b9;
  }
`;

// UploadContainer

export const UploadContainer = styled.div`
  width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

export const UploadBox = styled.div`
  border: 2px dashed #d1d5db;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fafafa;
  position: relative;
  cursor: pointer;
  color: #6b7280;
`;

export const FileSelectButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const UploadItem = styled.div`
  margin-bottom: 10px;
  text-align: left;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: #ff5f56;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #e55350;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
`;

export const Progress = styled.div`
  height: 10px;
  background-color: #4caf50;
  width: ${(props) => props.width}%;
  transition: width 0.3s ease;
`;

export const UploadProgress = styled.div`
  margin-top: 20px;
`;

export const SearchSvg = () => (
  <Svg
    width="17"
    height="16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="search"
  >
    <path
      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
      stroke="currentColor"
      strokeWidth="1.333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ResetSvg = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </Svg>
);

// ***********************************************************************************
// ("use client");

// Utility function for merging class names
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Contexts for managing dropdown state
const DirectionContext = createContext(null);
const CurrentTabContext = createContext(null);

// Main Dropdown Component
export const Dropdown = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(null);
  const [direction, setDirection] = useState(null);

  const setAnimationDirection = (tab) => {
    if (typeof currentTab === "number" && typeof tab === "number") {
      setDirection(currentTab > tab ? "rtl" : "ltr");
    } else if (tab === null) {
      setDirection(null);
    }
    setCurrentTab(tab);
  };

  return (
    <DirectionContext.Provider value={{ direction, setAnimationDirection }}>
      <CurrentTabContext.Provider value={{ currentTab }}>
        <span
          onMouseLeave={() => setAnimationDirection(null)}
          className="relative flex h-fit gap-2"
        >
          {children}
        </span>
      </CurrentTabContext.Provider>
    </DirectionContext.Provider>
  );
};

// TriggerWrapper Component
export const TriggerWrapper = ({ children }) => {
  const { currentTab } = useContext(CurrentTabContext);
  const { setAnimationDirection } = useContext(DirectionContext);

  return (
    <>
      {React.Children.map(children, (e, i) => (
        <button
          onMouseEnter={() => setAnimationDirection(i + 1)}
          onClick={() => setAnimationDirection(i + 1)}
          className={cn(
            "flex h-10 items-center gap-0.5 rounded-md px-4 py-2 text-sm font-medium text-neutral-950 transition-colors dark:text-white",
            currentTab === i + 1 &&
              "bg-neutral-100 dark:bg-neutral-800 [&>svg]:rotate-180",
          )}
        >
          {e}
        </button>
      ))}
    </>
  );
};

// Trigger Component
export const Trigger = ({ children, className }) => {
  return (
    <>
      <span className={cn("", className)}>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </>
  );
};

// Tabs Component
export const Tabs = ({ children, className }) => {
  const { currentTab } = useContext(CurrentTabContext);
  const { direction } = useContext(DirectionContext);

  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={
        currentTab ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }
      }
      className="absolute left-0 top-[calc(100%_+_6px)] w-auto"
    >
      <div className="absolute -top-[6px] left-0 right-0 h-[6px]" />
      <div
        className={cn(
          "rounded-md border border-neutral-200 backdrop-blur-xl transition-all duration-300 dark:border-neutral-800",
          className,
        )}
      >
        {React.Children.map(children, (e, i) => (
          <div className="overflow-hidden">
            <AnimatePresence>
              {currentTab !== null && (
                <motion.div exit={{ opacity: 0 }}>
                  {currentTab === i + 1 && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x:
                          direction === "ltr"
                            ? 100
                            : direction === "rtl"
                              ? -100
                              : 0,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {e}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Tab Component
export const Tab = ({ children, className }) => {
  return <div className={cn("h-full w-[500px]", className)}>{children}</div>;
};
