import { render, fireEvent, screen, getByRole } from "@testing-library/react";
import { test, expect, it, describe, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import Footer from "../Footer/footer";
import React from "react";

test("renders Footer Sucessfully ", () => {
  render(<Footer />);
});

test("renders with 3 links ", () => {
  //   render(<Footer />);
  const num_links = screen.getAllByRole("link");
  console.log("hola amigo ", num_links.length);
  expect(num_links.length).toBe(7);
});

test("renders Follow Us component with correct links and alt text", () => {
  const facebookImage = screen.getByAltText("Facebook Icon");
  expect(facebookImage).toBeInTheDocument();
  expect(facebookImage).toHaveAttribute(
    "src",
    "https://img.icons8.com/color/48/facebook-new.png"
  );

  const twitterImage = screen.getByAltText("Twittttter Icon");
  expect(twitterImage).toBeInTheDocument();
  expect(twitterImage).toHaveAttribute(
    "src",
    "https://img.icons8.com/color/48/linkedin.png"
  );

  const instagramImage = screen.getByAltText("Instagram Icon");
  expect(instagramImage).toBeInTheDocument();
  expect(instagramImage).toHaveAttribute(
    "src",
    "https://img.icons8.com/color/48/youtube-play.png"
  );
});

test("clicking images navigates to the correct URLs", () => {
  const facebookImage = screen.getByAltText("Facebook Icon");
  const twitterImage = screen.getByAltText("Twittttter Icon");
  const instagramImage = screen.getByAltText("Instagram Icon");

  // Mock window.open to prevent actual redirection
  const originalOpen = window.open;
  window.open = vi.fn();

  fireEvent.click(facebookImage);
  expect(window.open).toHaveBeenCalledWith(
    "https://www.facebook.com",
    "_blank"
  );

  fireEvent.click(twitterImage);
  expect(window.open).toHaveBeenCalledWith("https://twitter.com", "_blank");

  fireEvent.click(instagramImage);
  expect(window.open).toHaveBeenCalledWith(
    "https://www.instagram.com",
    "_blank"
  );

  // Restore original window.open
  window.open = originalOpen;
});
