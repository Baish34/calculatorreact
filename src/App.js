// Import React and necessary hooks
import React, { useState } from "react";
import "./App.css"; // Import the external CSS file for styling

// Define the Calculator component
function App() {
  // States for input numbers and result
  const [num1, setNum1] = useState(""); // First number input
  const [num2, setNum2] = useState(""); // Second number input
  const [result, setResult] = useState(null); // Calculation result

  // Function to handle addition
  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2)); // Add and update result
  };

  // Function to handle subtraction
  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2)); // Subtract and update result
  };

  // Function to handle multiplication
  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2)); // Multiply and update result
  };

  // Function to handle division
  const handleDivision = () => {
    if (parseFloat(num2) === 0) {
      setResult("Error: Division by zero!"); // Handle division by zero
    } else {
      setResult(parseFloat(num1) / parseFloat(num2)); // Divide and update result
    }
  };

  return (
    <div className="calculator-container">
      <h1>Simple Calculator</h1>

      {/* Input fields for numbers */}
      <input
        type="number"
        value={num1} // Bind state to input
        onChange={(e) => setNum1(e.target.value)} // Update state on change
        placeholder="Enter first number"
        className="input-field"
      />
      <input
        type="number"
        value={num2} // Bind state to input
        onChange={(e) => setNum2(e.target.value)} // Update state on change
        placeholder="Enter second number"
        className="input-field"
      />

      {/* Operation buttons */}
      <div className="button-container">
        <button className="button" onClick={handleAddition}>
          Add
        </button>
        <button className="button" onClick={handleSubtraction}>
          Subtract
        </button>
        <button className="button" onClick={handleMultiplication}>
          Multiply
        </button>
        <button className="button" onClick={handleDivision}>
          Divide
        </button>
      </div>

      {/* Display result */}
      {result !== null && (
        <div className="result-display">
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
}

// Export the App component
export default App;
