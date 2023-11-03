import { useEffect } from "react";

function EstablishedYear(props) {
  return (
    <>
      <h1>Established year: {props.year}</h1>
      <h2>Pure Function</h2>
      <p>If a function always returns the same result given the same arguments, </p> 
      <p>and it has no side effects, it's considered a Pure function.</p>
    </>
  );
}

function ShoppingCart(props) {
  const total = props.count * props.price; 
  useEffect(() => console.log(total));
  return (
    <>
      <h1>Written to Console - Total: {total}</h1>
      <h2>Impure Function</h2>
      <p>Does not always produce the same output for the same input,</p>
      <p>or it has side effects and can modify the state outside of its local environment,</p>     
      <p>or interacts with the external world, other than returning a value. </p>
      <p>In this case, we are writing to the console.</p>
      <p><strong>useEffect</strong> is how we deal with side effects.</p>    
    </>
  );
}

function PureImpure() {
  return (
    <>
      <EstablishedYear year={2003} />
      <ShoppingCart count={5} price={10} />
    </>
  );
}
export default PureImpure;
