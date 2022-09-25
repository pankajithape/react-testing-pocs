import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect background color of button to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click on button
  fireEvent.click(colorButton);

  // expect text of button to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that button starts out to be enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);

  // check that on clicking checkbox, button gets disabled
  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // check that on clicking checkbox 2nd time, button gets enabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

describe("checkbox working correctly wrt colors", () => {
  test("when button is red, clicking on checkbox should turn gray and vice-versa", () => {
    render(<App />);

    // initial button red, click on checkbox, turns gray
    const checkbox = screen.getByRole("checkbox");
    const colorButton = screen.getByRole("button");

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

    // on clicking on checkbox, button turns gray to red
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  });

  test("when button is blue, clicking on checkbox should turn gray and vice-versa", () => {
    render(<App />);

    // initial button blue, click on checkbox, turns gray
    const checkbox = screen.getByRole("checkbox");
    const colorButton = screen.getByRole("button");

    fireEvent.click(colorButton);
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

    // on clicking on checkbox, button turns gray to red
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
