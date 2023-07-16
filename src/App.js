import { useMemo, useState } from "react";
import "./App.css";

export default function App() {
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(50);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const calculateBMI = (weight, height) => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  };

  const bmi = useMemo(() => calculateBMI(weight, height), [weight, height]);

  let weightCategory = "";
  let weightCategoryColor = "";

  if (bmi < 18.5) {
    weightCategory = "Underweight";
    weightCategoryColor = "blue";
  } else if (bmi >= 18.5 && bmi < 25) {
    weightCategory = "Normal Weight";
    weightCategoryColor = "green";
  } else if (bmi >= 25 && bmi < 30) {
    weightCategory = "Overweight";
    weightCategoryColor = "yellow";
  } else {
    weightCategory = "Obesity";
    weightCategoryColor = "red";
  }
  const weightCategoryStyle = {
    backgroundColor: weightCategoryColor,
  };

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          placeholder="Enter Your Weight in kg"
          onChange={onWeightChange}
          type="number"
          step="1"
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          placeholder="Enter Your Height in cm"
          onChange={onHeightChange}
          type="number"
        />
      </div>
      <div className="output-section">
        <p id="bmi-title">Your BMI is</p>
        <div className="resul-box" style={weightCategoryStyle}>
         <h2 className="output">{bmi}</h2>
         <p ><b><i>{weightCategory}</i></b></p>
        </div>
        
      </div>
    </main>
  );
}
