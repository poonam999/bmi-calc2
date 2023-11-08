import React from "react";
import { useState } from "react";

const HomePage = () => {
  // adding state for height and weight variable
  const [ weight, setWeight ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ bmi, setBmi ] = useState('');
  const [ message, SetMessage ] = useState('');

  // main logic
  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height));
      setBmi(bmi.toFixed(1));

      if (bmi < 20) {
        SetMessage("You are underweight");
      } else if (bmi > 20 && bmi < 30) {
        SetMessage("You are a healthy");
      } else {
        SetMessage("You are overweight");
      }
    }
  };

  // to reload
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (Kgs)</label>
            <input
              type="text"
              placeholder="Enter your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (meters)</label>
            <input
              type="text"
              placeholder="Enter your Height"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
