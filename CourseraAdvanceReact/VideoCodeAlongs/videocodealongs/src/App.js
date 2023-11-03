import {useReducer,useState} from 'react';
import './App.css';
//reducer
import { reducer } from 'react';
//customhook
import useConsoleLog from './hooks/useConsoleLog';


function App() {
  //useReducer
  const initialState={money:100};
  const [state,dispatch]=useReducer(reducer,initialState);  

  //CustomHooks
  const [count, setCount] = useState(0); 
  useConsoleLog(count);
 
  function increment() { 
    setCount(prevCount => prevCount + 1) 
  }

  //alert with Children
  const Button=({children,backgroundColor}) =>{ return <button style={{backgroundColor}}>{children}</button>}

  const Alert =({children}) =>{ return(
    <>
    <div className="Overlay"/>
    <div className="Alert">
      {children}
    </div>
    </>
  );
  }

  const DeleteButton=() => { return<Button backgroundColor="red"> Delete</Button>};

  
return (
      <div className="App">
       {/* useReducer */}
      <h1>Wallet : {state.money}</h1>
     <div>
      <button onClick={()=>dispatch({type:"buy_ingredients"})} >Shopping for veggeies </button>
      <button onClick={()=>dispatch({type:"sell_a_meal"})} >Serve a mean to customers </button>
     </div>
       
     {/* CustomHooks */}
     <div> 
      <h1>Count: {count}</h1> 
      <button onClick={increment}>Plus 1</button> 
    </div> 

{/* alert with children pop */}
<div style={{backgroundColor :'grey', padding:"2%" , textAlign: 'center'}} className='center-flex'>
  <Alert>
    <h4>Delete Account</h4>
    
    <p>Are you sure you want to proceed with deletion?</p>
    <DeleteButton/>
    </Alert>
</div>
    </div>
  );
}

export default App;
