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
    GenderSelectField
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
            age: Number(age),
            gender,
            city,
            university,
            grade: Number(grade),
            department,
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
            <AddInfoLogo src={addInfo}/>
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
                    <GenderSelectField value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="" disabled>
                            성별을 선택하세요
                        </option>
                        <option value="male">남성</option>
                        <option value="female">여성</option>
                    </GenderSelectField>

                </InputGroup>

                <InputGroup>
                    <Label>사는 지역</Label>
                    <InputField
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="예: 서울시 강남구"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>대학교</Label>
                    <InputField
                        type="text"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        placeholder="대학교 이름을 입력하세요"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>학년</Label>
                    <InputField
                        type="number"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        min="1"
                        max="5"
                        placeholder="1~4 사이의 숫자 입력"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>학과</Label>
                    <InputField
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="학과를 입력하세요"
                    />
                </InputGroup>

                <InputGroup>
                    <Label>소득분위</Label>
                    <InputField
                        type="number"
                        value={incomeQuantile}
                        onChange={(e) => setIncomeQuantile(e.target.value)}
                        min="1"
                        max="10"
                        placeholder="1~10 사이의 숫자 입력"
                    />
                </InputGroup>

                <SubmitButton type="submit">정보 등록하기</SubmitButton>
            </FormContainer>
        </AdditionalInfoContainer>
    );
}

export default NewUserPage;