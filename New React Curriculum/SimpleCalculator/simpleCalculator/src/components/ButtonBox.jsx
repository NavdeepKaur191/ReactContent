import CalculatorButton from "./CalculatorButton";
function ButtonBox({
    displayChar
  }) {
    return (   
        
        <>
            <div class="px-2">
  <div class="flex -mx-2">
    <div class="w-1/3 px-2">
      <div class="bg-gray-400 h-12"></div>
    </div>
    <div class="w-1/3 px-2">
      <div class="bg-gray-500 h-12"></div>
    </div>
    <div class="w-1/3 px-2">
      <div class="bg-gray-400 h-12"></div>
    </div>
  </div>
</div>
        <CalculatorButton displayChar={7}/>
        <CalculatorButton displayChar={8}/>
        <CalculatorButton displayChar={9}/>
        <CalculatorButton displayChar={"-"}/>
        <br/>
        <CalculatorButton displayChar={4}/>
        <CalculatorButton displayChar={5}/>
        <CalculatorButton displayChar={6}/>
        <CalculatorButton displayChar={"+"}/>
        <br/>
        <CalculatorButton displayChar={1}/>
        <CalculatorButton displayChar={2}/>
        <CalculatorButton displayChar={3}/>
        <CalculatorButton displayChar={"x"}/>
        <br/>
        <CalculatorButton displayChar={"C"}/>
        <CalculatorButton displayChar={0}/>
        <CalculatorButton displayChar={"="}/>
        <CalculatorButton displayChar={"/"}/>
        </>
        
    );
  }
  
  export default ButtonBox;