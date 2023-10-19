import React from "react";
import { render } from "@testing-library/react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

test("renders PokemonCard with correct name prop", () => {
  const pokemon = { name: "Bulbasaur" };
  const imageUrl = "/bulbasaur.png";

  const { getByText, getByAltText } = render(
    <PokemonCard pokemon={pokemon} imageUrl={imageUrl} />
  );

  // Check if Pokemon name is rendered
  expect(getByText("Bulbasaur")).toBeInTheDocument();

  // Check if image with correct alt text is rendered
  expect(getByAltText("Bulbasaur")).toBeInTheDocument();
});
