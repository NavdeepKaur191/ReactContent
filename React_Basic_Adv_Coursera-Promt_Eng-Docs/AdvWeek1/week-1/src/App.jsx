import './App.css';
import Heading from './components/Heading';
import LLDesserts from './components/LLDesserts';
import Controlled from './components/Controlled';
import FormComp from './components/FormComp';
import Feedback from './components/Feedback';
import RegForm from './components/RegForm';
import ContextBlog from './components/BlogApp';

function App() {
  const seperator = <p>**************************************</p>
  return (
    <div className="App">
      <Heading /> {seperator}
      <ContextBlog /> {seperator}
      <RegForm /> {seperator}
      <Feedback /> {seperator}
      <FormComp /> {seperator}
      <Controlled /> {seperator}
      <LLDesserts /> {seperator}
    </div>
  );
}

export default App;
