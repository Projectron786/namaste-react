import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("These are the Contact Us Page Test Cases", () => {
  it("Should Load Contact Page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should Load Contact Page", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("Contact page should be loaded", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  it("Contact page should be loaded with two input boxes", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(2);
  });
});
