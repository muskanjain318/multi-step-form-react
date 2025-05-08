import React, { useState } from "react";
import Step1ProgramDetails from "./components/Step1ProgramDetails";
import Step2PersonalDetails from "./components/Step2PersonalDetails";  // Assuming you create this step similarly
import Step3ParentDetails from "./components/Step3ParentsDetails";  // Assuming you create this step similarly
import Step4UploadDetails from "./components/Step4UploadDetails";  // Assuming you create this step similarly


const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    programDetails: {},
    personalDetails: {},
    parentDetails: {},
    uploadDetails: {}
  });

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1ProgramDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <Step2PersonalDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3ParentDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Step4UploadDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      default:
        return <Step1ProgramDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    }
  };

  return <div>{renderStep()}</div>;
};

export default App;
