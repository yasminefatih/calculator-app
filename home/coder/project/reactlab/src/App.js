import { useState, useRef } from "react";
import "./App.css";

function App() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const calculate = (operation) => {
        const input = parseFloat(inputRef.current.value);
        if (isNaN(input)) return;

        switch (operation) {
            case "add":
                setResult((prev) => prev + input);
                break;
            case "subtract":
                setResult((prev) => prev - input);
                break;
            case "multiply":
                setResult((prev) => prev * input);
                break;
            case "divide":
                if (input !== 0) {
                    setResult((prev) => prev / input);
                } else {
                    alert("Cannot divide by zero");
                }
                break;
            default:
                break;
        }
        inputRef.current.value = "";
    };

    return (
        <div className="App">
            <h1>Simple Calculator</h1>
            <input type="number" ref={inputRef} placeholder="Enter a number" />
            <button onClick={() => calculate("add")}>Add</button>
            <button onClick={() => calculate("subtract")}>Subtract</button>
            <button onClick={() => calculate("multiply")}>Multiply</button>
            <button onClick={() => calculate("divide")}>Divide</button>
            <h2 ref={resultRef}>Result: {result}</h2>
        </div>
    );
}

export default App;
