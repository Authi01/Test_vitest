import { render, fireEvent, screen } from "@testing-library/react";
import { test, expect, it, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import Header from "../Header/header";
import React from "react";

test("renders Header component with 3 navigation links", () => {
  render(<Header />);
  const linkElements = screen.getAllByRole("link");
  expect(linkElements.length).toBe(3);
});

test("App Router: Works with Client Components (React State)", () => {
  //   render(<Header />);
  fireEvent.click(screen.getByRole("button"));
});

test("increments count when Increment Button is clicked", () => {
  //   render(<Header />);
  const incrementButton = screen.getByTestId("increment1");
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId("num");
  expect(Number(countElement.textContent)).toBe(2);
});

test("increment", () => {
  it("checks for incrementation", async () => {
    render(<Header />);

    const button = screen.getByRole("button", { name: "Increment Button" });
    // Click the button
    fireEvent.click(button);
    // Assert that the result is displayed on the page
    expect(await screen.findByText("1")).toBeInTheDocument();
  });
});
