import React, { useState } from "react";
// import "../css/ScholarshipsPage.css"; // CSS 파일 경로 수정

const ScholarshipsPage = () => {
  // 장학금 데이터 배열 (특성 배열로 수정)
  const scholarships = [
    {
      name: "A 장학금",
      amount: "1,000,000",
      feature: ["성적 우수자 대상", "리더십 장려"],
    },
    {
      name: "B 장학금",
      amount: "500,000",
      feature: ["저소득층 대상", "학업 성취도"],
    },
    {
      name: "C 장학금",
      amount: "1,500,000",
      feature: ["우수 체육인 대상", "국제 대회 참가"],
    },
    {
      name: "D 장학금",
      amount: "2,500,000",
      feature: ["우수 미술인 대상", "국제 대회 입상"],
    },
  ];

  // 검색어와 선택된 필드를 관리하는 state
  const [searchTerm, setSearchTerm] = useState("");
  const [minAmount, setMinAmount] = useState(100000); // 최소 금액 초기값
  const [maxAmount, setMaxAmount] = useState(5000000); // 최대 금액 초기값
  const [searchField, setSearchField] = useState("name"); // 기본 검색 필드 설정
  const [lastButton, setLastButton] = useState(null); // 최근 눌린 버튼 상태
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 상태 추가

  // 금액을 숫자로 변환하는 함수
  const parseAmount = (amount) => {
    return parseInt(amount.replace(/[^0-9]/g, ""), 10); // 숫자만 남기고 변환
  };

  // 검색어에 맞춰 필터링된 장학금 목록
  const filteredScholarships = scholarships.filter((scholarship) => {
    switch (searchField) {
      case "name":
        return scholarship.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      case "amount":
        const scholarshipAmount = parseAmount(scholarship.amount);
        return scholarshipAmount >= minAmount && scholarshipAmount <= maxAmount;
      case "feature":
        return scholarship.feature
          .join(", ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      default:
        return true;
    }
  });

  // 리셋 함수
  const resetSearch = () => {
    setSearchTerm(""); // 검색어 초기화
    setMinAmount(100000); // 최소 금액 초기화
    setMaxAmount(5000000); // 최대 금액 초기화
    setSearchField("name"); // 기본 검색 필드로 초기화
    setLastButton(null); // 최근 버튼 초기화
    setErrorMessage(""); // 오류 메시지 초기화
  };

  // 검색 버튼 클릭 핸들러
  const handleSearch = (field) => {
    setSearchField(field);
    setLastButton(field);

    // 각 필드에 따른 입력값 확인
    if (field === "name" && searchTerm.trim() === "") {
      setErrorMessage("정확한 장학금명을 입력해주세요.");
    } else if (field === "amount" && (minAmount === "" || maxAmount === "")) {
      setErrorMessage("최소 또는 최대 금액을 선택해주세요.");
    } else if (field === "feature" && searchTerm.trim() === "") {
      setErrorMessage("정확한 특징명을 입력해주세요.");
    } else {
      setErrorMessage(""); // 입력값이 유효할 경우 오류 메시지 제거
    }
  };

  return (
    <div>
      <h1>장학금 목록</h1>

      {/* 검색 컨테이너 */}
      <div className="search-container">
        {/* 검색어 입력창 */}
        <input
          type="text"
          placeholder="검색어 입력"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* 리셋 버튼 */}
        <button onClick={resetSearch}>리셋</button>
      </div>

      {/* 금액 검색을 위한 범위 입력 (슬라이더) */}
      {searchField === "amount" && (
        <div className="amount-range-container">
          <label>
            최소 금액: {minAmount.toLocaleString()}원
            <input
              type="range"
              min="100000"
              max="5000000"
              step="100000"
              value={minAmount}
              onChange={(e) => setMinAmount(parseInt(e.target.value))}
            />
          </label>
          <label>
            최대 금액: {maxAmount.toLocaleString()}원
            <input
              type="range"
              min="100000"
              max="5000000"
              step="100000"
              value={maxAmount}
              onChange={(e) => setMaxAmount(parseInt(e.target.value))}
            />
          </label>
        </div>
      )}

      {/* 검색 버튼 */}
      <div className="button-container">
        <button
          className={lastButton === "name" ? "button-active" : ""}
          onClick={() => handleSearch("name")}
        >
          장학금명 검색
        </button>{" "}
        {/*장학금명 검색*/}
        <button
          className={lastButton === "amount" ? "button-active" : ""}
          onClick={() => handleSearch("amount")}
        >
          금액 검색
        </button>{" "}
        {/*금액 검색*/}
        <button
          className={lastButton === "feature" ? "button-active" : ""}
          onClick={() => handleSearch("feature")}
        >
          특징 검색
        </button>
        {/*장학금 특징 검색*/}
      </div>

      {/* 오류 메시지 출력 */}
      <div class="errormessage">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
      <div class="unit">단위 : (원)</div>
      {/* 필터링된 결과 출력 */}
      <fieldset>
        <legend>검색 결과</legend>
        <ul className="scholarship-list">
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship, index) => (
              <li key={index} className="scholarship-item">
                <div>
                  <strong>{scholarship.name}</strong>:{" "}
                  {scholarship.feature.join(", ")}
                  {
                    /* From Uiverse.io by andrew-demchenk0 */
                    <div class="heart-container" title="Like">
                      <input
                        type="checkbox"
                        class="checkbox"
                        id="Give-It-An-Id"
                      />
                      <div class="svg-container">
                        <svg
                          viewBox="0 0 24 24"
                          class="svg-outline"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          class="svg-filled"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        <svg
                          class="svg-celebrate"
                          width="100"
                          height="100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon points="10,10 20,20"></polygon>
                          <polygon points="10,50 20,50"></polygon>
                          <polygon points="20,80 30,70"></polygon>
                          <polygon points="90,10 80,20"></polygon>
                          <polygon points="90,50 80,50"></polygon>
                          <polygon points="80,80 70,70"></polygon>
                        </svg>
                      </div>
                    </div>
                  }
                </div>
                <span className="scholarship-amount">
                  {" "}
                  \: {scholarship.amount}
                </span>
              </li>
            ))
          ) : (
            <li>검색 결과가 없습니다.</li>
          )}
        </ul>
      </fieldset>
    </div>
  );
};

// 컴포넌트 export
export default ScholarshipsPage;
