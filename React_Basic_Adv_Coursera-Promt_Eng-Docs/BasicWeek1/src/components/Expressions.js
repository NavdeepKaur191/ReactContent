function Ternary1() {
    return (
        <div className="app-header">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
};
export {Ternary1}


function Ternary2() {

    const getRandomNum = () => Math.floor(Math.random() * 10) + 1

    return (
        <div className="app-header">
            <h1>Here's a random number from 0 to 10: { getRandomNum() }</h1>
        </div>
    );
};
export {Ternary2}




function ToggleBool(props){
    return(
        <>
            <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2> 
            <p>The value of the math prop is: <em>{props.math}</em></p> 
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </>
      
    );
};
export {ToggleBool}