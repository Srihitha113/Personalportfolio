import React, { useState } from 'react';
import Page1_Login from './pages/Page1_Login';
import Page2_CareerPath from './pages/Page2_CareerPath';
import Page3_PortfolioType from './pages/Page3_PortfolioType';
import Page4_Languages from './pages/Page4_Languages';
import Page5_TechUsed from './pages/Page5_TechUsed';
import Page6_FinalDetails from './pages/Page6_FinalDetails';
import PortfolioPage from './pages/PortfolioPage.jsx'; // Correct relative path import
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const handleSubmit = (finalData) => {
    const fullData = { ...formData, ...finalData };
    setFormData(fullData);
    setSubmitted(true); // Show portfolio after submission
  };

  return (
    <div className="app-container">
      <h1>My Personal Portfolio</h1>
      <div className="form-box">
        {!submitted ? (
          <>
            {step === 1 && <Page1_Login onNext={handleNext} />}
            {step === 2 && <Page2_CareerPath onNext={handleNext} />}
            {step === 3 && <Page3_PortfolioType onNext={handleNext} />}
            {step === 4 && <Page4_Languages onNext={handleNext} />}
            {step === 5 && <Page5_TechUsed onNext={handleNext} />}
            {step === 6 && <Page6_FinalDetails onNext={handleSubmit} />}
          </>
        ) : (
          <PortfolioPage data={formData} />
        )}
      </div>
    </div>
  );
}

export default App;
