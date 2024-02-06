import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import App from "../App";

describe("Home", () => {
  // first test
  it("should render without crash", () => {
    // Arrange
    const { container } = render(<App />);

    // Assertions
    expect(container).toBeDefined();
  });
});
