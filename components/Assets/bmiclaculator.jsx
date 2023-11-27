import React, { useState } from 'react';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      classifyBmi(bmiValue);
    }
  };

  const classifyBmi = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setBmiCategory('Normal Weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obese');
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Weight (kg):

          <input 
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            
          />
        </label>
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      <br />
      {bmi && <p>Your BMI is: {bmi}</p>}
      {bmiCategory && <p>You are: {bmiCategory}</p>}
    </div>
  );
};

export default BmiCalculator;


