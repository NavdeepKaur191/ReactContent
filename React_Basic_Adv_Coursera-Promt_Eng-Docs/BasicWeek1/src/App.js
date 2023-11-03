import './App.css';
import Bag from "./components/Bag";
import Apples from "./components/Apples"
import Pears from "./components/Pears"
import {Nav1} from "./components/Nav"
import {Nav2} from "./components/Nav"
import {Nav3} from "./components/Nav"
import {Nav4} from "./components/Nav"
import {Nav5} from "./components/Nav"
import {Nav6} from "./components/Nav"
import {Ternary1} from "./components/Expressions"
import {Ternary2} from "./components/Expressions"
import {ToggleBool} from "./components/Expressions"
import {Logo} from "./components/Avatar"

function App() {
  const myBool = false;
  const myStr = "Just";

  return (
    <div className="App">
      <Logo />

      <ToggleBool 
        toggleBoolean={!myBool} 
        math={(10 + 20) /3}
        str={myStr + " another string!!"}
      />

      <Ternary1 />
      <Ternary2 />

      <Nav2 first="Home"/>
      <Nav1 first="Information" />
      <Nav4 first="Help" />
      <Nav3 first="About"/>
      <Nav5 />
      <Nav6 />


      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Harry" />} />
      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />        
      </Bag>
    </div>
  );
}

export default App;
