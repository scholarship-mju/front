import React, { useState } from "react";
import TermsPage from "./TermsPage";
import SignUpPage from "./SignUpPage";

function SignUpFlow() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && <TermsPage onNext={handleNextStep} />}
      {step === 2 && <SignUpPage />}
    </div>
  );
}

export default SignUpFlow;