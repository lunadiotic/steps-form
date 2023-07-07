import { useState } from "react";

function App() {
  // const arr = useState({ name: "aim" });

  // console.log(arr);

  // let step = 1;
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "aim" });

  function handleNext() {
    // step += 1;
    if (step < 3) setStep(step + 1);
    console.log(step);
    // bad practice
    setTest({ name: "luna" });
    // console.log(step);
  }

  function handlePrev() {
    // step += 1;
    if (step > 1) setStep(step - 1);
    console.log(step);
    // console.log(step);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">Step: Dream {test.name}</p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#526D82", color: "#fff" }}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          style={{ backgroundColor: "#526D82", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
