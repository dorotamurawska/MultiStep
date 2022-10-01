// components:
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Providers from './components/Providers/Providers';
import StepOne from './components/StepOne/StepOne';

// style:
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Background />
      <Header />
      <Providers />
      <StepOne />
      <Footer />
    </div>
  );
}

export default App;
