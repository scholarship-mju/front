import React, { useState } from "react";
import axios from "axios";

import {
    AdditionalInfoContainer,
    Title,
    InputField,
    Label,
    SubmitButton,
    FormContainer,
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const additionalData = {
            nickname,
            phone,
            age: Number(age), // 숫자 변환
            gender,
            city,
            university,
            grade: Number(grade), // 숫자 변환
            department,
            incomeQuantile: Number(incomeQuantile), // 숫자 변환
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
            <Title>추가 정보 입력</Title>
            <FormContainer onSubmit={handleSubmit}>
                <Label>닉네임</Label>
                <InputField
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />

                <Label>전화번호</Label>
                <InputField
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <Label>나이</Label>
                <InputField
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="1"
                    placeholder="숫자 입력"
                />

                <Label>성별</Label>
                <SelectField value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">선택</option>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                </SelectField>

                <Label>사는 지역</Label>
                <InputField
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <Label>대학교</Label>
                <InputField
                    type="text"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                />

                <Label>학년</Label>
                <InputField
                    type="number"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    min="1"
                    max="5"
                    placeholder="1~5 사이의 숫자 입력"
                />

                <Label>학과</Label>
                <InputField
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />

                <Label>소득분위</Label>
                <InputField
                    type="number"
                    value={incomeQuantile}
                    onChange={(e) => setIncomeQuantile(e.target.value)}
                    min="1"
                    max="10"
                    placeholder="1~10 사이의 숫자 입력"
                />

                <SubmitButton type="submit">제출</SubmitButton>
            </FormContainer>
        </AdditionalInfoContainer>
    );
}

export default NewUserPage;
