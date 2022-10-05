import { useState } from 'react';

// components:
import Background from './components/Background/Background';
import Finish from './components/Finish/Finish';
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
  const STEP_ONE = 1;
  const STEP_TWO = 2;
  const LOADER = 3;
  const STEP_THREE = 4;
  const FINISH = 5;

  const [currentStep, setCurrentStep] = useState(STEP_ONE);

  const renderCurrentStep = () => {
    if (currentStep === STEP_ONE) return <StepOne setCurrentStep={setCurrentStep} stepTwo={STEP_TWO} />
    else if (currentStep === STEP_TWO) return <StepTwo setCurrentStep={setCurrentStep} stepOne={STEP_ONE} loader={LOADER} />
    else if (currentStep === LOADER) return <Loader setCurrentStep={setCurrentStep} stepThree={STEP_THREE} />
    else if (currentStep === STEP_THREE) return <StepThree setCurrentStep={setCurrentStep} stepTwo={STEP_TWO} finish={FINISH} />
    else if (currentStep === FINISH) return <Finish />
  };

  return (
    <div className="App">
      {currentStep === LOADER ? null : <Background />}
      <Header />
      {currentStep === LOADER || currentStep === FINISH ? null : <ProgressBar currentStep={currentStep} />}
      {currentStep === STEP_ONE || currentStep === STEP_TWO ? <Providers /> : null}
      {renderCurrentStep()}
      {currentStep === LOADER ? null : < Footer />}
    </div>
  );
}

export default App;
