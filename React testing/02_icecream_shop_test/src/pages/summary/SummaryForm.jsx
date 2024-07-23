import React, { useState } from "react";

export default function SummaryForm() {
  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <form>
        <label htmlFor="accept-conditions">terms and conditions </label>

        <input
          id="accept-conditions"
          type="checkbox"
          onChange={(e) => setDisabled(!e.target.checked)}
        />

        <button type="submit" disabled={disabled}>
          confirm order
        </button>
      </form>
    </div>
  );
}
