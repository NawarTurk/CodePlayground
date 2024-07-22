import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";

test("button click flow", () => {
  const { container } = render(<App />);
  logRoles(container);
  // logRoles helps us log the roles of all the elements in the container to the console.

  const buttonelement = screen.getByRole("button", { name: /blue/i });
  // The name option in getByRole specifies the accessible name of the button, which is what screen readers use to identify the element.
  // This accessible name can be the text content of the button or come from attributes like aria-label.
  // If the button does not have "blue" in its accessible name, the query will throw an error, and the test will fail.
  expect(buttonelement).toHaveClass("medium-violet-red");

  fireEvent.click(buttonelement);

  expect(buttonelement).toHaveClass("midnight-blue");
  // The toHaveClass matcher checks if the element has the specified class.
  // Note: The test will pass if the element has the assigned class, even if the class is not defined in the CSS.

  expect(buttonelement).toHaveTextContent(/red/i);

  // The toHaveTextContent matcher checks if the element's text content includes the specified string or pattern.
  // The text content here refers to the text between the opening and closing tags of the element.
  // For example, <button>Red Button</button> would have text content "Red Button".
});

test("checkbox flow before clicking the button", () => {
  render(<App />);

  //find elements
  const buttonelement = screen.getByRole("button", { name: /blue/i });
  const checkboxelement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });
  // This name can come from the text associated with the checkbox, such as a label element that labels the checkbox.

  // check initial conditions
  expect(buttonelement).toBeEnabled();
  expect(checkboxelement).not.toBeChecked();

  // click checkbox to disable button
  fireEvent.click(checkboxelement);
  expect(buttonelement).toBeDisabled();
  expect(buttonelement).toHaveClass("grey");
  expect(buttonelement).toHaveTextContent(/blue/i);

  // click checkbox again to re-enable button
  fireEvent.click(checkboxelement);
  expect(buttonelement).toBeEnabled();
  expect(buttonelement).toHaveClass("medium-violet-red");
  expect(buttonelement).toHaveTextContent(/blue/i);
});

test("checkbox flow after button click", () => {
  // render App
  render(<App />);

  // find elements
  const buttonelement = screen.getByRole("button", { name: /blue/i });
  const checkboxelement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  // click the button to change to blue
  fireEvent.click(buttonelement);

  //  click checkbox to disable button
  fireEvent.click(checkboxelement);
  expect(buttonelement).toBeDisabled();
  expect(buttonelement).toHaveClass("grey");
  expect(buttonelement).toHaveTextContent(/red/i);

  // click checkbox again to re-enable button
  fireEvent.click(checkboxelement);
  expect(buttonelement).toBeEnabled();
  expect(buttonelement).toHaveClass("midnight-blue");
  expect(buttonelement).toHaveTextContent(/red/i);
});

// The 'describe' block groups related tests, improving organization and readability of test suites.
describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
