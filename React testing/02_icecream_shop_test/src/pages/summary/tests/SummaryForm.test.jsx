import SummaryForm from "../SummaryForm";
import { fireEvent, render, screen } from "@testing-library/react";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const buttonElement = screen.getByRole("button", { name: /confirm order/i });

  // check initial state
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const buttonElement = screen.getByRole("button", { name: /confirm order/i });

  // click the checkbox to enable the button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();

  // click the checkbox to disable the button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
});
