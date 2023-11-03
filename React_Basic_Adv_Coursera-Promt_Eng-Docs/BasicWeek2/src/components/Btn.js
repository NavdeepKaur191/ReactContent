// function Btn(){
//     const clickHandler = 
//         () => console.log("clicked");

//     return(
//         <button onClick={clickHandler}>
//             Click Me
//         </button>
//     )
// }
// export default Btn;

function Btn(){

    const fourthExample = () => console.log('fourth example')

    function thirdExample(){
        console.log('third example')
    }

    return(
        <>
            <br /> <br />
            <button onClick={function() {console.log('first example')}}>
                An inline anonymous ES5 function event handler
            </button>
            <br/> <br />
            <button onClick={() => console.log('second example')}>
                An inline anonymous ES6 function event handler
            </button>
            <br/> <br />
            <button onClick={thirdExample}>
                Using a separate function declaration
            </button>
            <br/> <br />
            <button onClick={fourthExample}>
                Using a separate function expression
            </button>
        </>
    )
}
export default Btn;