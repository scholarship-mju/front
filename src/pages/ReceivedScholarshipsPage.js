import React, { useState, useEffect, memo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AnimatedNumbers from "react-animated-numbers";
import axios from "axios";
import receiveLogo from "../png/receiveLogo.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Background,
  Container,
  ReceiveLogo,
  Table,
  TableHeader,
  TableHeaderRight,
  TableHeaderLeft,
  TableCell,
  TableBody,
  InputContainer,
  WarningText,
  SingleDataButton,
  TotalAmount,
  DeleteButton,
  AuthButton,
  Modal,
  Overlay,
  UploadContainer,
  UploadBox,
  FileSelectButton,
  CloseButton,
  ModalHeader,
  StyledInput,
  ModalTitle,
  InfoItem,
  InfoList,
  Title,
} from "../style/ReceivedScholarshipsPageStyles";

const MemoizedAnimatedNumbers = memo(({ animateToNumber }) => (
  <AnimatedNumbers
    includeComma
    animateToNumber={animateToNumber}
    fontStyle={{
      fontSize: "1.2rem",
      color: "white",
    }}
    transitions={(index) => ({
      type: "tween",
      duration: 0.7,
      delay: index * 0.07,
    })}
  />
));

// ***********************************************************************************

function ReceivedScholarshipsPage() {
  // ***********************************************************************************
  // 받은 장학금 추가 함수

  const handleAddScholarship = async (id) => {
    try {
      console.log("Received ID:", id); // ID 값이 무엇인지 확인하기
      const token = localStorage.getItem("accessToken");
      console.log(token);

      if (!token) {
        console.error("토큰이 존재하지 않습니다.");
        return;
      }
      // 중복 ID 검사
      const isDuplicate = serverdata.some((item) => item.id === id);
      if (isDuplicate) {
        alert("이미 등록된 장학금입니다.");
        console.error(`ID ${id}는 이미 serverdata에 존재합니다.`);
        return;
      }
      // 서버에 POST 요청
      await axios.post(
        `http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/got/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // 인증 토큰 포함
          },
        },
      );

      axios
        .get(
          "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/got",
          {
            headers: {
              Authorization: `Bearer ${token}`, // 토큰이 필요할 경우 포함
            },
          },
        )
        .then((response) => {
          // 응답 데이터를 serverdata에 저장
          setServerdata(response.data);
          console.log("받은 장학금 데이터 출력");
          console.log(response.data); // 데이터 확인용 콘솔 출력
        })
        .catch((error) => {
          console.error("데이터 가져오기 실패:", error);
        });

      console.log(`ID ${id} 장학금 등록 완료`);
    } catch (error) {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("토큰이 존재하지 않습니다.");
        alert("로그아웃되었습니다.");
        return;
      }
      if (error.response) {
        const status = error.response.status;
        if (status === 500) {
          alert("서버 에러가 발생했습니다. 관리자에게 문의하세요.");
        } else if (status === 400) {
          alert("잘못된 요청입니다. 입력 내용을 확인해주세요.");
        } else if (status === 404) {
          alert("요청한 데이터를 찾을 수 없습니다.");
        } else {
          alert(`오류 발생: ${status}`);
        }
        console.error(`HTTP ${status} 오류:`, error.response.data);
      } else {
        alert("이미 등록된 장학금입니다.");
      }
      console.error(`ID ${id} 장학금 등록 실패:`, error);
      console.log(`scholarship/${id}/got`);
    }
  };

  // ***********************************************************************************
  // 장학금 삭제 함수
  const handleDeleteScholarship = async (id) => {
    try {
      // 서버에 DELETE 요청
      await axios.delete(
        `http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/got/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 인증 토큰 포함
          },
        },
      );

      // 서버 응답 성공 후, 상태 업데이트
      setServerdata((prevServerData) =>
        prevServerData.filter((scholarship) => scholarship.id !== id),
      );

      console.log(`ID: ${id} 장학금 삭제 완료`);
    } catch (error) {
      console.error(`ID: ${id} 장학금 삭제 실패:`, error);
    }
  };

  // ***********************************************************************************
  // 단건정보 함수
  const [isHovered, setIsHovered] = useState(false);
  const [modalData, setModalData] = useState(null);

  const fetchSingleData = async (id) => {
    try {
      const response = await axios.get(
        `http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/${id}`,
      );
      setModalData(response.data); // 서버에서 받은 데이터를 상태에 저장
      console.log(`단건정보 데이터ID: ${id}   ${response.data}`);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setModalData("Failed to load data");
    }
  };

  const handleMouseEnter = (id) => {
    setIsHovered(true);
    fetchSingleData(id); // hover 시 데이터 로드
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // ***********************************************************************************
  // 인증 관련된 코드

  const getVerificationStatus = (id) => {
    const scholarship = serverdata.find((item) => item.id === id);

    switch (scholarship?.status) {
      case "NOT_VERIFIED":
        return 0; // 인증되지 않음
      case "IN_PROGRESS":
        return 1; // 인증 진행 중
      case "VERIFIED":
        return 2; // 인증 완료
    }
  };

  // ***********************************************************************************
  // 증빙 데이터 올리기

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (id) => {
    if (!selectedFile) {
      setUploadStatus("먼저 파일을 선택해주세요.");
      return;
    }

    const apiUrl = `http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/got/${id}/valid`;
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 인증 토큰 포함
        },
      });
      setUploadStatus("업로드가 성공적으로 완료되었습니다!");
      console.log("Response:", response.data);
      console.log(`ID: ${id} 증빙 데이터 Upload -> 성공`);
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 413) {
          setUploadStatus("파일용량을 초과했습니다.");
          console.log("파일용량 초과");
        } else if (status === 400) {
          alert("잘못된 요청입니다. 입력 내용을 확인해주세요.");
        } else if (status === 404) {
          alert("요청한 데이터를 찾을 수 없습니다.");
        } else {
          alert(`오류 발생: ${status}`);
        }
        console.error(`HTTP ${status} 오류:`, error.response.data);
      } else {
        setUploadStatus("업로드 실패, 다시 시도해주세요.");
        console.error("Error uploading file:", error);
        console.log(`ID: ${id} 증빙 데이터 Upload -> 실패`);
      }
    }
  };
  // ***********************************************************************************
  // 서버 데이터 불러오기

  // 받은장학금 데이터 배열
  const [serverdata, setServerdata] = useState([]); // 서버 데이터 저장용 state

  // 전체 장학금 데이터 배열
  const [scholarshipdata, setScholarshipsdata] = useState([]); // 서버 데이터 저장용 state

  useEffect(() => {
    // 서버로 GET 요청을 보냄
    const token = localStorage.getItem("accessToken"); // 실제 토큰 값??
    axios
      .get(
        "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/got",
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰이 필요할 경우 포함
          },
        },
      )
      .then((response) => {
        // 응답 데이터를 serverdata에 저장
        setServerdata(response.data);
        console.log("받은 장학금 데이터 출력", response.data); // 데이터 확인용 콘솔 출력
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });

    axios
      .get(
        "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/all",
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰이 필요할 경우 포함
          },
        },
      )
      .then((response) => {
        setScholarshipsdata(response.data);
        console.log("전체 장학금 데이터 출력", response.data); // 데이터 확인용 콘솔 출력
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });
  }, []);

  // ***********************************************************************************
  // 장학금 총액 계산 함수
  const totalAmount = serverdata.reduce(
    (total, scholarship) =>
      scholarship.status === "VERIFIED" ? total + scholarship.price : total,
    0,
  );

  // ***********************************************************************************
  const [activeModalId, setActiveModalId] = useState(null);
  const handleButtonClick = (id) => {
    setActiveModalId(id); // 해당 ID의 모달 열기
  };

  const handleCloseModal = () => {
    setActiveModalId(null); // 모든 모달 닫기
  };
  // ***********************************************************************************

  return (
    <Background>
      <ReceiveLogo src={receiveLogo} />
      <Container>
        <InputContainer>
          <div>
            <Autocomplete
              style={{ width: 400 }}
              freeSolo
              autoComplete
              autoHighlight
              getOptionLabel={(option) => option.name} // 표시할 텍스트 설정
              options={scholarshipdata}
              onChange={(event, newValue) => {
                if (newValue) {
                  handleAddScholarship(newValue.id); // ID로 함수 호출
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="받은 장학금 등록"
                />
              )}
            />
          </div>
        </InputContainer>
        <Table>
          <thead>
            <tr>
              <TableHeaderLeft>고유 번호</TableHeaderLeft>
              <TableHeader>장학금</TableHeader>
              <TableHeader>금액</TableHeader>
              <TableHeader>인증 상태</TableHeader>
              <TableHeaderRight></TableHeaderRight>
            </tr>
          </thead>

          <TableBody>
            <TransitionGroup component={null}>
              {serverdata.map((scholarship) => (
                <CSSTransition
                  key={scholarship.id}
                  timeout={300}
                  classNames="fade"
                >
                  <React.Fragment>
                    <tr>
                      <TableCell>{scholarship.id}</TableCell>
                      <TableCell>
                        <SingleDataButton
                          onMouseEnter={() => handleMouseEnter(scholarship.id)} // 함수 자체 전달
                          onMouseLeave={handleMouseLeave} // 필요 시 leave 핸들러 추가
                        >
                          {scholarship.name}
                        </SingleDataButton>
                        {isHovered && modalData && (
                          <Modal>
                            <Title>{modalData.name}</Title>
                            <InfoList>
                              <InfoItem>
                                <span>상세 설명:</span> {modalData.description}
                              </InfoItem>
                              <InfoItem>
                                <span>장학금 금액:</span> {modalData.price}
                              </InfoItem>
                              <InfoItem>
                                <span>유형:</span> {modalData.category}
                              </InfoItem>
                              <InfoItem>
                                <span>대학교:</span> {modalData.university}
                              </InfoItem>
                              <InfoItem>
                                <span>최소 나이:</span> {modalData.minAge}
                              </InfoItem>
                              <InfoItem>
                                <span>최대 나이:</span> {modalData.maxAge}
                              </InfoItem>
                              <InfoItem>
                                <span>성별:</span> {modalData.gender}
                              </InfoItem>
                              <InfoItem>
                                <span>도/광역시:</span> {modalData.province}
                              </InfoItem>
                              <InfoItem>
                                <span>시/구/군:</span> {modalData.city}
                              </InfoItem>
                              <InfoItem>
                                <span>학과:</span> {modalData.department}
                              </InfoItem>
                              <InfoItem>
                                <span>학년:</span> {modalData.grade}
                              </InfoItem>
                              <InfoItem>
                                <span>소득분위:</span>{" "}
                                {modalData.incomeQuantile}
                              </InfoItem>
                            </InfoList>
                          </Modal>
                        )}
                      </TableCell>
                      <TableCell>
                        {scholarship.price.toLocaleString()}원
                      </TableCell>

                      <TableCell key={scholarship.id}>
                        <AuthButton
                          onClick={() => handleButtonClick(scholarship.id)} // 특정 ID로 설정
                          status={getVerificationStatus(scholarship.id)} // 서버 데이터에서 상태 가져오기
                        >
                          {getVerificationStatus(scholarship.id) === 2
                            ? "인증 O"
                            : getVerificationStatus(scholarship.id) === 1
                              ? "인증 중"
                              : "인증 X"}
                        </AuthButton>
                        {activeModalId === scholarship.id && ( // 특정 ID의 모달만 열기
                          <>
                            <Overlay onClick={handleCloseModal} />
                            <Modal>
                              <ModalHeader>
                                <ModalTitle>{scholarship.name}</ModalTitle>
                                <CloseButton onClick={handleCloseModal}>
                                  X
                                </CloseButton>
                              </ModalHeader>
                              <UploadContainer>
                                <div style={{ color: "red" }}>
                                  하나의 PDF파일로 제출하세요.
                                </div>
                                <div style={{ color: "green" }}>
                                  파일명: 이름_이메일_받은장학금명.pdf
                                </div>
                                <UploadBox>
                                  <StyledInput
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(e, scholarship.id)
                                    }
                                  />
                                </UploadBox>
                                <FileSelectButton
                                  onClick={() => handleUpload(scholarship.id)}
                                >
                                  Upload
                                </FileSelectButton>
                              </UploadContainer>
                              {uploadStatus && <p>{uploadStatus}</p>}
                            </Modal>
                          </>
                        )}
                      </TableCell>
                      <TableCell>
                        <DeleteButton
                          onClick={() =>
                            handleDeleteScholarship(scholarship.id)
                          }
                        >
                          삭제
                        </DeleteButton>
                      </TableCell>
                    </tr>
                  </React.Fragment>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </TableBody>
        </Table>
        <WarningText>이미 등록된 장학금이 있을 수 있습니다.</WarningText>

        <TotalAmount>
          <span style={{ marginRight: "4px" }}>총 장학금 금액:</span>
          <MemoizedAnimatedNumbers animateToNumber={totalAmount} />
          <span>원</span>
        </TotalAmount>
      </Container>
    </Background>
  );
}

export default ReceivedScholarshipsPage;
