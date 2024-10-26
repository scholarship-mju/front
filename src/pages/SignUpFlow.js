import React, { useState } from "react";
import TermsPage from "./TermsPage";
import SignUpPage from "./SignUpPage";
import AdditionalInfoPage from "./AdditionalInfoPage";

function SignUpFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    name: "",
    birthdate: "",
    phone: "",
    email: "",
    location: "",
    languageScores: "",
    additionalInfo: "",
  });

  const handleNextStep = (newData) => {
    setFormData({ ...formData, ...newData });
    setStep(step + 1);
  };

  const handleSubmitData = async (additionalData) => {
    const finalData = { ...formData, ...additionalData };
    
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      const data = await response.json();
      if (data.success) {
        const loginResponse = await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: finalData.id, password: finalData.password }),
        });
        const loginData = await loginResponse.json();
        if (loginData.success) {
          localStorage.setItem("loginId", finalData.id);
          window.location.href = "/mypage"; // Redirect to My Page
        } else {
          alert("로그인 실패");
        }
      } else {
        alert("회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div>
      {step === 1 && <TermsPage onNext={() => setStep(2)} />}
      {step === 2 && <SignUpPage onNext={handleNextStep} />}
      {step === 3 && <AdditionalInfoPage onSubmit={handleSubmitData} />}
    </div>
  );
}

export default SignUpFlow;