function CalculatorButton({
  displayChar
}) {
  return (    
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  {displayChar}
</button>
  );
}

export default CalculatorButton;
