import { useState } from 'react';

// components:
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Providers from './components/Providers/Providers';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';

// style:
import './App.scss';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderCurrentStep = () => {
    if (currentStep === 1) return <StepOne setCurrentStep={setCurrentStep} />
    else if (currentStep === 2) return <StepTwo setCurrentStep={setCurrentStep} />
  }

  return (
    <div className="App">
      <Background />
      <Header />
      <ProgressBar currentStep={currentStep} />
      <Providers />
      {renderCurrentStep()}
      < Footer />
    </div>
  );
}

export default App;
