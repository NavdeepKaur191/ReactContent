import './App.css';
import BitCoinData from './components/BitCoinData';
import CustomHookLab from './components/CustomHookLab';
import FetchExamples from './components/FetchExamples';
import FetchLab from './components/FetchLab';
import GiftCard from './components/GiftCard';
import Goals from './components/Goals';
import Greeting from './components/Greeting';
import Heading from './components/Heading';
import HookRules from './components/HookRules';
import PureImpure from './components/PureImpure';
import RandomUser from './components/RandomUser';
import ReducerHook from './components/ReducerHook';
import RevisitUseState from './components/RevisitUseState';
import ToggleMessage from './components/ToggleMessage';
import UseRefHook from './components/UseRefHook';
import UsingConsoleLogHook from './components/UsingConsoleLogHook';
import WindowWidthDisplay from './components/WindowWidthDisplay';

function App() {
  const seperator = <p>**************************************</p>
  return (
    <div className="App">
      <Heading /> {seperator}
      <CustomHookLab /> {seperator}
      <UsingConsoleLogHook /> {seperator}
      <UseRefHook /> {seperator}
      <ReducerHook /> {seperator}
      <FetchExamples /> {seperator}
      <FetchLab /> {seperator}
      <RandomUser /> {seperator}
      <BitCoinData /> {seperator}
      <HookRules /> {seperator}
      <ToggleMessage /> {seperator}
      <WindowWidthDisplay /> {seperator}
      <PureImpure /> {seperator}
      <GiftCard /> {seperator}
      <Goals /> {seperator}
      <Greeting /> {seperator}
      <RevisitUseState /> {seperator}
    </div>
  );
}

export default App;
