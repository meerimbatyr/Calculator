import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/"];

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="calculator">
        <input type="text" value={result} />

        <div className="keypad">
          <div className="leftside">
            <div className="top-line">
              <button className="highlight" id="clear" onClick={clear}>
                Clear
              </button>
              <button className="highlight" id="backspace" onClick={backspace}>
                C
              </button>
            </div>

            <div className="middle-line">
              <div className="numbers">
                {numbers.map((number, index) => (
                  <button name={number} key={index} onClick={handleClick}>
                    {number}
                  </button>
                ))}
              </div>
            </div>

            <div className="bottom-line">
              <button name="0" onClick={handleClick}>
                0
              </button>
              <button name="." onClick={handleClick}>
                .
              </button>
            </div>
          </div>

          <div className="rightside">
            <div className="operations">
              {operations.map((operation, index) => (
                <button
                  className="highlight"
                  name={operation}
                  key={index}
                  onClick={handleClick}
                >
                  {operation}
                </button>
              ))}
            </div>
            <button className="highlight" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
