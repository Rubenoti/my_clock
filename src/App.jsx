import DigitalClock from './components/DigitalClock/DigitalClock';
import CountDown from './components/CountDown/CountDown';
import Stopwatch from './components/Stopwatch/Stopwatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <CountDown />
      <Stopwatch />
    </div>
  );
}

export default App;
