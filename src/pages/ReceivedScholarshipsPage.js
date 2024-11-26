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
  TotalAmount,
  DeleteButton,
  AuthButton,
  Modal,
  Overlay,
  ModalButton,
  // UploadContainer
  UploadContainer,
  UploadBox,
  FileSelectButton,
  UploadItem,
  CloseButton,
  ProgressBar,
  Progress,
  UploadProgress,
  //Search realted
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
      // console.log("Typeof:", typeof id); // string
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
      // console.log("장학금 등록 성공", response.data);
    } catch (error) {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("토큰이 존재하지 않습니다.");
        alert("로그아웃되었습니다.");
        return;
      }
      if (error.response) {
        // 서버에서 응답을 받은 경우
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
  // 파일 관련된 코드

  const [isVerified, setIsVerified] = useState(false); // 인증 상태

  // ***********************************************************************************
  // 증빙 데이터 올리기

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (id) => {
    if (!selectedFile) {
      setUploadStatus("Please select a file first.");
      return;
    }

    const apiUrl = `http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/scholarship/got${id}/valid`;
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadStatus("Upload successful!");
      console.log("Response:", response.data);
      console.log(`ID: ${id} 증빙 데이터 Upload -> 성공`);
    } catch (error) {
      setUploadStatus("Upload failed. Please try again.");
      console.error("Error uploading file:", error);
      console.log(`ID: ${id} 증빙 데이터 Upload -> 실패`);
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
        // 응답 데이터를 serverdata에 저장
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
    (total, scholarship) => total + scholarship.price,
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
                      <TableCell>{scholarship.name}</TableCell>
                      <TableCell>
                        {scholarship.price.toLocaleString()}원
                      </TableCell>

                      <TableCell key={scholarship.id}>
                        <AuthButton
                          onClick={() => handleButtonClick(scholarship.id)} // 특정 ID로 설정
                          isVerified={isVerified}
                        >
                          {isVerified ? "인증 O" : "인증 X"}
                        </AuthButton>
                        {activeModalId === scholarship.id && ( // 특정 ID의 모달만 열기
                          <>
                            <Overlay onClick={handleCloseModal} />
                            <Modal>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <ModalButton onClick={handleCloseModal}>
                                  닫기
                                </ModalButton>
                              </div>
                              <h1>{scholarship.name}</h1>
                              <input
                                type="file"
                                onChange={(e) =>
                                  handleFileChange(e, scholarship.id)
                                }
                              />
                              <button
                                onClick={() => handleUpload(scholarship.id)}
                              >
                                Upload
                              </button>
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
