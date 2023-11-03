import './App.css';
import CurrentMessage from './components/CurrentMessage';
import DayMessages from './components/DayMessages';
import LogInOutButton from './components/LogInOutButton';
import NavBar from "./components/NavBar"
import AppImages from './components/AppImages';
import MyMedia from './components/MyMedia';
import MyPlayer from './components/MyPlayer';
import BirdSong from './components/BirdSong';


function App() {
    const seperator = <p>**************************************</p>
   
  return (
    <div className="App">
      <h1>Welcome to Week 3</h1> {seperator}
      <BirdSong /> {seperator}
      <MyPlayer /> {seperator}
      <MyMedia /> {seperator}
      <AppImages /> {seperator}
      <DayMessages /> {seperator}
      <LogInOutButton isLoggedIn={false} /> {seperator}
      <CurrentMessage day="1" /> {seperator}
      <NavBar /> {seperator}
    </div>
  );
}

export default App;
