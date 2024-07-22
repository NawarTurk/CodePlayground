import { useState } from "react";
import "./App.css";
import { kebabCaseToTitleCase } from "./helpers";

function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [disabled, setDisabled] = useState(false);

  const className = disabled ? "grey" : buttonColor;
  const nextColorClass =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";

  const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);

  const handleButtonClick = (e) => {
    setButtonColor(nextColorClass);
  };

  return (
    <div>
      <button
        className={className}
        onClick={handleButtonClick}
        disabled={disabled}
      >
        Change to {nextColorTitleCase}
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
