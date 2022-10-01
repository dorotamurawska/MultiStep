// components:
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Providers from './components/Providers/Providers';
import StepOne from './components/StepOne/StepOne';

// style:
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Background />
      <Header />
      <ProgressBar />
      <Providers />
      <StepOne />
      <Footer />
    </div>
  );
}

export default App;
