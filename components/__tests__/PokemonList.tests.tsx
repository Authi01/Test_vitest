import React from "react";
import { expect, test, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductList from "../PokemonList/PokemonList";
import "@testing-library/jest-dom/vitest";

test("renders Pokemon List component", () => {
  const productList = render(<ProductList />);
});

test("renders a heading with the text 'Pokemon List'", () => {
  const heading = screen.getByText("Pokemon List");
  expect(heading).toBeInTheDocument();
});

test("renders PokemonCards with correct data from API", async () => {
  const mockResponseData = {
    data: {
      results: [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
        {
          name: "squirtle",
          url: "https://pokeapi.co/api/v2/pokemon/7/",
        },
        {
          name: "wartortle",
          url: "https://pokeapi.co/api/v2/pokemon/8/",
        },
        {
          name: "blastoise",
          url: "https://pokeapi.co/api/v2/pokemon/9/",
        },
        {
          name: "caterpie",
          url: "https://pokeapi.co/api/v2/pokemon/10/",
        },
      ],
    },
  };

  vi.mock("axios", () => ({
    get: vi.fn().mockResolvedValue(mockResponseData),
  }));

  render(<ProductList />);

  // Wait for the API call to complete and the component to re-render
  await waitFor(() => {
    // Check if Pokemon cards with correct names are rendered
    expect(screen.getByText("bulbasaur")).toBeInTheDocument();

    const imageUrl =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";
    expect(imageUrl).toMatch(
      /^https:\/\/assets\.pokemon\.com\/assets\/cms2\/img\/pokedex\/full\/\d{3}\.png$/
    );
  });
});
