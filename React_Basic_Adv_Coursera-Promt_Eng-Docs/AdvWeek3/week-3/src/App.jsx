import "./App.css";
import ChildrenDemo from "./components/ChildrenDemo";
import CursorPosition from "./components/CursorPosition";
import DataRender from "./components/DataRender";
import Feedback from "./components/Feedback";
import Heading from "./components/Heading";
import LiveOrders from "./components/LiveOrders";
import Profile from "./components/Profile";
import RadioButtonLab from "./components/RadioButtonLab";
import RenderProps from "./components/RenderProps";
import SpreadOperator from "./components/SpreadOperator";
import Testing from "./components/Testing";
// import './App.css';

function App() {
  const seperator = <p>**************************************</p>;
  return (
    <div className="App">
      <Heading /> {seperator}
      <Profile userName="Pink Floyd" tokenValue="sampleToken123" /> {seperator}
      <Feedback /> {seperator}
      <Testing /> {seperator}
      <RenderProps /> {seperator}
      <DataRender /> {seperator}
      <CursorPosition /> {seperator}
      <SpreadOperator /> {seperator}
      <RadioButtonLab /> {seperator}
      <LiveOrders /> {seperator}
      <ChildrenDemo /> {seperator}
    </div>
  );
}

export default App;
