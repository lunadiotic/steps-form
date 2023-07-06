function App() {
  function handleNext() {
    alert("Next Button Clicked");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div className="">2</div>
        <div className="">3</div>
      </div>
      <p className="message">Step: Dream</p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#526D82", color: "#fff" }}
          onMouseEnter={() => alert("prev hover")}
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
