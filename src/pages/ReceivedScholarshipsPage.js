import React, { useState, useEffect, memo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AnimatedNumbers from "react-animated-numbers";
import axios from "axios";
import {
  Background,
  Container,
  ButtonsContainer,
  MyButton,
  Title,
  Table,
  TableHeader,
  TableHeaderRight,
  TableHeaderLeft,
  TableCell,
  TableBody,
  InputContainer,
  WarningText,
  TotalAmount,
  Form,
  Input,
  Button,
  ResetButton,
  Svg,
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
  SearchSvg,
  ResetSvg,
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

const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setInputValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue);
      setInputValue(""); // clear input after search
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button>
        <SearchSvg />
      </Button>
      <Input
        className="input"
        placeholder="받은 장학금 입력"
        required
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ResetButton className="reset" type="reset" onClick={handleReset}>
        <ResetSvg />
      </ResetButton>
    </Form>
  );
};

// ***********************************************************************************

function ReceivedScholarshipsPage() {
  const scholarshipData = [
    { name: "장학금 A", amount: 1000000 },
    { name: "장학금 B", amount: 1500000 },
    { name: "장학금 C", amount: 2000000 },
    { name: "장학금 D", amount: 2500000 },
    { name: "장학금 E", amount: 10000000 },
  ];

  const [scholarships, setScholarships] = useState([
    { id: 1, name: "장학금 1", amount: 1000000 },
    { id: 2, name: "장학금 2", amount: 500000 },

    //   {serverdata.map((item, index) => (          //serverdata->item 객체
    //   <div key={index} >
    //     {item.name} {item.age}  {item.university} {/* 예시로 각 항목의 name을 버튼 텍스트로 사용 */}
    //   </div>
    // ))}
  ]);

  // ***********************************************************************************

  const handleAddScholarship = (name) => {
    const matchingScholarship = scholarshipData.find(
      (scholarship) => scholarship.name === name,
    );

    if (matchingScholarship) {
      const newId = scholarships.length + 1;
      setScholarships([
        ...scholarships,
        {
          id: newId,
          name: matchingScholarship.name,
          amount: matchingScholarship.amount,
        },
      ]);
    } else {
      alert("장학금을 찾지 못했습니다.");
    }
  };

  const handleDeleteScholarship = (id) => {
    setScholarships((prevScholarships) =>
      prevScholarships
        .filter((scholarship) => scholarship.id !== id)
        .map((scholarship, index) => ({
          ...scholarship,
          id: index + 1, // 삭제 후 고유 번호 재설정
        })),
    );
  };

  // ***********************************************************************************
  // 파일 관련된 코드

  const [isVerified, setIsVerified] = useState(false); // 인증 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [selectedFile, setSelectedFile] = useState(null); // 업로드된 파일

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsVerified(true);
      setIsModalOpen(false);
      alert("사진이 성공적으로 업로드되었습니다!");
    } else {
      alert("사진을 선택해주세요!");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [files, setFiles] = useState([]);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const simulateUpload = (file) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      setFiles((prev) =>
        prev.map((f) => (f.name === file.name ? { ...f, progress } : f)),
      );
    }, 200);
  };

  const startUpload = () => {
    files.forEach((file) => {
      if (!file.progress) {
        setFiles((prev) =>
          prev.map((f) => (f.name === file.name ? { ...f, progress: 0 } : f)),
        );
        simulateUpload(file);
      }
    });
  };

  const handleRemoveFile = (fileName) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  // ***********************************************************************************

  const [serverdata, setServerdata] = useState([]); // 서버 데이터 저장용 state

  useEffect(() => {
    // 서버로 GET 요청을 보냄
    const token = localStorage.getItem("accessToken"); // 실제 토큰 값??
    const response = axios
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
        console.log("데이터 출력");
        console.log(response.data); // 데이터 확인용 콘솔 출력
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });
  }, []);

  // 장학금 총액 계산 함수
  const totalAmount = serverdata.reduce(
    (total, scholarship) => total + scholarship.price,
    0,
  );

  return (
    <Background>
      <ButtonsContainer>
        <MyButton to="/mypage">마이페이지</MyButton>
      </ButtonsContainer>
      <Container>
        <Title>받은 장학금</Title>
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

                      <TableCell>
                        <AuthButton
                          onClick={handleButtonClick}
                          isVerified={isVerified}
                        >
                          {isVerified ? "인증 O" : "인증 X"}
                        </AuthButton>
                        {isModalOpen && (
                          <>
                            <Overlay onclick={handleCloseModal} />
                            <Modal>
                              <div
                                style={{
                                  display: "flex",
                                  alignItem: "center",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <ModalButton onClick={handleCloseModal}>
                                  닫기
                                </ModalButton>
                              </div>
                              {/* <h3>사진 업로드</h3> */}
                              {/* <input */}
                              {/*   type="file" */}
                              {/*   accept="image/*" */}
                              {/*   onChange={handleFileChange} */}
                              {/* /> */}
                              {/* <div */}
                              {/*   style={{ */}
                              {/*     display: "flex", */}
                              {/*     justifyContent: "space-between", */}
                              {/*     marginTop: "10px", */}
                              {/*   }} */}
                              {/* > */}
                              {/*   <ModalButton onClick={handleUpload}> */}
                              {/*     업로드 */}
                              {/*   </ModalButton> */}
                              {/* </div> */}
                              <UploadContainer>
                                <h2>File Upload</h2>
                                <UploadBox
                                  onClick={() =>
                                    document
                                      .getElementById("file-input")
                                      .click()
                                  }
                                >
                                  <p>Drag files to upload</p>
                                  <FileSelectButton>
                                    Select Files
                                  </FileSelectButton>
                                  <input
                                    type="file"
                                    id="file-input"
                                    multiple
                                    hidden
                                    onChange={handleFileSelect}
                                  />
                                </UploadBox>
                                <UploadProgress>
                                  {files.map((file, index) => (
                                    <UploadItem key={index}>
                                      <p>
                                        {file.name} (
                                        {(file.size / 1024 / 1024).toFixed(1)}{" "}
                                        MB)
                                      </p>
                                      <ProgressBar>
                                        <Progress width={file.progress || 0} />
                                      </ProgressBar>
                                      <CloseButton
                                        onClick={() =>
                                          handleRemoveFile(file.name)
                                        }
                                      >
                                        ✕
                                      </CloseButton>
                                    </UploadItem>
                                  ))}
                                </UploadProgress>
                                {files.length > 0 && (
                                  <FileSelectButton onClick={startUpload}>
                                    Start Upload
                                  </FileSelectButton>
                                )}
                              </UploadContainer>
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
        <InputContainer>
          <SearchForm onSearch={handleAddScholarship} />
        </InputContainer>
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
