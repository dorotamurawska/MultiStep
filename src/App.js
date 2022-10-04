import { useState } from 'react';

// components:
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Providers from './components/Providers/Providers';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';

// style:
import './App.scss';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderCurrentStep = () => {
    if (currentStep === 1) return <StepOne setCurrentStep={setCurrentStep} />
    else if (currentStep === 2) return <StepTwo setCurrentStep={setCurrentStep} />
    else if (currentStep === 3) return <Loader setCurrentStep={setCurrentStep} />
    else if (currentStep === 4) return <StepThree setCurrentStep={setCurrentStep} />
  };

  return (
    <div className="App">
      {currentStep === 3 ? null : <Background />}
      <Header />
      {currentStep === 3 ? null : <ProgressBar currentStep={currentStep} />}
      {currentStep === 3 ? null : <Providers />}
      {renderCurrentStep()}
      {currentStep === 3 ? null : < Footer />}
    </div>
  );
}

export default App;
