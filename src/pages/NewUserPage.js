import React, { useState } from "react";
import axios from "axios";

import {
    AdditionalInfoContainer,
    Title,
    InputField,
    Label,
    SubmitButton,
    FormContainer,
    ErrorMessage,
    SelectField,
} from "../style/NewUserPageStyle";

function NewUserPage() {
    const [nickname, setNickname] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [university, setUniversity] = useState("");
    const [grade, setGrade] = useState("");
    const [department, setDepartment] = useState("");
    const [incomeQuantile, setIncomeQuantile] = useState("");
    const [nicknameError, setNicknameError] = useState("");

    const handleNicknameBlur = async () => {
        try {
            const response = await axios.get(
                `http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/check-nickname?nickname=${nickname}`
            );
            if (!response.data.available) {
                setNicknameError("이미 사용 중인 닉네임입니다.");
            } else {
                setNicknameError("");
            }
        } catch (error) {
            console.error("닉네임 중복 체크 오류:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nicknameError) {
            alert("닉네임을 수정해주세요.");
            return;
        }

        const additionalData = {
            nickname,
            phone,
            age,
            gender,
            city,
            university,
            grade,
            department,
            incomeQuantile,
        };

        try {
            const token = localStorage.getItem("accessToken");
            const response = await axios.post(
                "http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/login-first",
                additionalData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
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
            <Title>추가 정보 입력</Title>
            <FormContainer onSubmit={handleSubmit}>
                <Label>닉네임</Label>
                <InputField
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    onBlur={handleNicknameBlur}
                />
                {nicknameError && <ErrorMessage>{nicknameError}</ErrorMessage>}

                <Label>전화번호</Label>
                <InputField
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <Label>나이</Label>
                <InputField
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <Label>성별</Label>
                <SelectField value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">선택</option>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                </SelectField>

                <Label>사는 지역</Label>
                <SelectField value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="">선택</option>
                    <option value="서울">서울</option>
                    <option value="부산">부산</option>
                    <option value="대구">대구</option>
                    <option value="인천">인천</option>
                    <option value="광주">광주</option>
                    <option value="대전">대전</option>
                    <option value="울산">울산</option>
                    <option value="경기">경기</option>
                </SelectField>

                <Label>대학교</Label>
                <InputField
                    type="text"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                />

                <Label>학년</Label>
                <SelectField value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="">선택</option>
                    <option value="1">1학년</option>
                    <option value="2">2학년</option>
                    <option value="3">3학년</option>
                    <option value="4">4학년</option>
                    <option value="5">대학원</option>
                </SelectField>

                <Label>학과</Label>
                <InputField
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />

                <Label>소득분위</Label>
                <SelectField value={incomeQuantile} onChange={(e) => setIncomeQuantile(e.target.value)}>
                    <option value="">선택</option>
                    <option value="1">1분위</option>
                    <option value="2">2분위</option>
                    <option value="3">3분위</option>
                    <option value="4">4분위</option>
                    <option value="5">5분위</option>
                </SelectField>

                <SubmitButton type="submit">제출</SubmitButton>
            </FormContainer>
        </AdditionalInfoContainer>
    );
}

export default NewUserPage;
