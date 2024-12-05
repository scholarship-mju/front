import React, { useState } from "react";
import axios from "axios";
import addInfo from "../png/addInfo.png";

import {
    AdditionalInfoContainer,
    AddInfoLogo,
    InputField,
    Label,
    SubmitButton,
    FormContainer,
    InputGroup,
    PlusSelectField,
} from "../style/NewUserPageStyle";

function NewUserPage() {
    const [nickname, setNickname] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [university, setUniversity] = useState("");
    const [department, setDepartment] = useState("");
    const [grade, setGrade] = useState("");
    const [incomeQuantile, setIncomeQuantile] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const additionalData = {
            nickname,
            phone,
            age: Number(age),
            gender,
            province,
            city,
            department,
            university,
            grade: Number(grade),
            incomeQuantile: Number(incomeQuantile),
        };

        try {
            const token = localStorage.getItem("accessToken");
            const response = await axios.post(
                "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/first-login",
                additionalData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                alert("추가 정보가 성공적으로 등록되었습니다.");
                window.location.href = "/";
            } else {
                alert(`서버 에러: ${response.data.message}`);
            }
        } catch (error) {
            alert(`요청 실패: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <AdditionalInfoContainer>
            <AddInfoLogo src={addInfo} />
            <FormContainer onSubmit={handleSubmit}>
                <InputGroup>
                    <Label>닉네임</Label>
                    <InputField
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="닉네임을 입력하세요"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>전화번호</Label>
                    <InputField
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="예: 01012345678"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>나이</Label>
                    <InputField
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        min="1"
                        placeholder="나이를 입력하세요"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>성별</Label>
                    <PlusSelectField
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="" disabled>
                            성별을 선택하세요
                        </option>
                        <option value="남성">남성</option>
                        <option value="여성">여성</option>
                    </PlusSelectField>
                </InputGroup>

                <InputGroup>
                    <Label>도/광역시</Label>
                    <PlusSelectField
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                    >
                        <option value="" disabled>
                            도/광역시를 선택하세요
                        </option>
                        <option value="부산광역시">부산광역시</option>
                        <option value="충청북도">충청북도</option>
                        <option value="충청남도">충청남도</option>
                        <option value="대구광역시">대구광역시</option>
                        <option value="대전광역시">대전광역시</option>
                        <option value="강원특별자치도">강원특별자치도</option>
                        <option value="광주광역시">광주광역시</option>
                        <option value="경기도">경기도</option>
                        <option value="경상북도">경상북도</option>
                        <option value="경상남도">경상남도</option>
                        <option value="인천광역시">인천광역시</option>
                        <option value="제주특별자치도">제주특별자치도</option>
                        <option value="전북특별자치도">전북특별자치도</option>
                        <option value="전라남도">전라남도</option>
                        <option value="세종특별자치시">세종특별자치시</option>
                        <option value="서울특별시">서울특별시</option>
                        <option value="울산광역시">울산광역시</option>
                    </PlusSelectField>
                </InputGroup>

                <InputGroup>
                    <Label>시/구/군</Label>
                    <InputField
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="시 또는 구/군을 입력하세요 (예시: 강남구)"
                        disabled={!province}
                    />
                </InputGroup>

                <InputGroup>
                    <Label>대학교</Label>
                    <InputField
                        type="text"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        placeholder="대학교 이름을 입력하세요 (예시: 명지대학교)"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>학과</Label>
                    <InputField
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="학과를 입력하세요 (예시: 컴퓨터공학과)"
                    />
                </InputGroup>

                <InputGroup>
                <Label>학점</Label>
                    <InputField
                        type="text"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        placeholder="학점을 입력하세요 (예시: 3.5)"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>소득분위</Label>
                    <PlusSelectField
                        value={incomeQuantile}
                        onChange={(e) => setIncomeQuantile(e.target.value)}
                    >
                        <option value="" disabled>
                            소득분위를 선택하세요
                        </option>
                        {[...Array(10).keys()].map((n) => (
                            <option key={n + 1} value={n + 1}>
                                {n + 1}
                            </option>
                        ))}
                    </PlusSelectField>
                </InputGroup>

                <SubmitButton type="submit">정보 등록하기</SubmitButton>
            </FormContainer>
        </AdditionalInfoContainer>
    );
}

export default NewUserPage;