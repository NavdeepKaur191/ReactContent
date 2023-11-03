import './App.css';
import Btn from "./components/Btn"
import ModeToggler from './components/ModeToggler';
import RandomNumber from './components/RandomNumber';
import Promo from "./components/Promo"
import Dog from "./components/Dog";
import Parent from "./components/Parent";
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';
import Stateless from './components/Stateless';
import Stateful from './components/Stateful';
import Restaurant from './components/Restaurant';
import PropDrilling from './components/PropDrilling';
import MyContextAPI from './components/MyContextAPI';
import MyReducer from './components/MyReducer';
import MyState from './components/MyState'  
import FruitState from './components/FruitState';


function App() {
  const seperator = <p>**************************************</p>
  return (
    <div className="App">
      <Stateless /> {seperator}
      <FruitState /> {seperator}
      <MyState /> {seperator}
      <MyReducer /> {seperator}
      <MyContextAPI /> {seperator}
      <PropDrilling /> {seperator}
      <Restaurant /> {seperator}
      <Stateful /> {seperator}
      <TextInputWithFocusButton /> {seperator}
      <RegisterForm /> {seperator}     
      <InputComponent /> {seperator}      
      <Parent /> {seperator}     
      <Dog /> {seperator}      
      <Promo /> {seperator}     
      <RandomNumber /> {seperator}    
      <ModeToggler /> {seperator}      
      <Btn /> {seperator}     
    </div>
  );
}

export default App;
