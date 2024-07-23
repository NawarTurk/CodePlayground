import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";
import { render, screen } from "@testing-library/react";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  // check initial state
  expect(checkboxElement).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  // click the checkbox to enable the button
  await user.click(checkboxElement);
  expect(confirmButton).toBeEnabled();

  // click the checkbox to disable the button
  await user.click(checkboxElement);
  expect(confirmButton).toBeDisabled();
});

// npm install @testing-library/user-event@latest
