import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const nextColor = buttonColor === "red" ? "blue" : "red";

  const handleButtonClick = (e) => {
    setButtonColor(nextColor);
  };

  return (
    <div>
      <button
        className={buttonColor}
        onClick={handleButtonClick}
        disabled={disabled}
      >
        Change to {nextColor}
      </button>
      <br />
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        defaultChecked={false}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
