import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { KraftButton as Button } from "./Button";

describe("Running Test for Marbella Button", () => {
  test("Check Button Disabled", () => {
    render(<Button disabled>text</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
