import { useState } from "react";

function TavaKalkulaator() {
  const [number1, setNumber1] = useState(0);
  const [operator, setOperator] = useState("");
  const [number2, setNumber2] = useState(0);
  const [isResult, setIsResult] = useState(false);

  function setNumber(nr) {
    if (operator === "") {
      setNumber1(nr);
    } else {
      setNumber2(nr);
    }
  }

  function reset() {
    setNumber1(0);
    setOperator("");
    setNumber2(0);
    setIsResult(false);
  }

  return (
    <div>
      <span>{number1} {operator} </span>
      {number2 >=0 && <span>{number2} </span>}
      <span>
        {operator === "+" && isResult && <span> = {number1 + number2}</span>}
        {operator === "-" && isResult && <span> = {number1 - number2}</span>}
        {operator === "*" && isResult && <span> = {number1 * number2}</span>}
        {operator === "/" && isResult && <span> = {number1 / number2}</span>}
      </span>
      <br />
      <br />
      <button onClick={() => setNumber(7)}>7</button>
      <button onClick={() => setNumber(8)}>8</button>
      <button onClick={() => setNumber(9)}>9</button>
      <button onClick={() => setOperator("+")}>+</button>
      <br />
      <button onClick={() => setNumber(4)}>4</button>
      <button onClick={() => setNumber(5)}>5</button>
      <button onClick={() => setNumber(6)}>6</button>
      <button onClick={() => setOperator("-")}>-</button>
      <br />
      <button onClick={() => setNumber(1)}>1</button>
      <button onClick={() => setNumber(2)}>2</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={() => setOperator("*")}>*</button>
      <br />
      <button onClick={reset}>C</button>
      <button onClick={() => setNumber(0)}>0</button>
      <button onClick={() => setOperator("/")}>/</button>
      <button onClick={() => setIsResult(true)}>=</button>
    </div>
  );
}

export default TavaKalkulaator