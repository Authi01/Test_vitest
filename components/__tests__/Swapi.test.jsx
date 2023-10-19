import { describe, test } from "vitest";
import React from "react";
import { swapiGetter } from "../Swapi/swapi";
import { expect, vi } from "vitest";
import mockAxios from "axios";
import CharacterDetails from "../Swapi/swapi";
import { render, fireEvent, screen } from "@testing-library/react";

test("Component is rendering correctly ", () => {
  render(<CharacterDetails />);
  expect(
    screen.getByRole("heading", {
      name: "Star Wars Character Details",
    })
  ).toBeDefined();
});

vi.mock("axios", () => ({
  default: {
    get: vi.fn().mockResolvedValue({ data: { name: "Luke Skywalker " } }),
  },
}));

// Alternatively -  import mockaxios authi
// vi.mock("axios");
// mockAxios.get.mockImplementation(() =>
//   Promise.resolve({ data: { name: "Luke Skywalker " } })
// );

// vi.mock("axios");
// mockAxios.get.mockResolvedValue({ data: { name: "Mock Jedi" } });

describe("swapiGetter", () => {
  test("should return correct character details", async () => {
    const expectedCharacter = {
      name: "Luke Skywalker ",
      //   height: "172",
      //   mass: "77",
      //   hair_color: "blond",
      //   skin_color: "fair",
      //   eye_color: "blue",
      //   birth_year: "19BBY",
      //   gender: "male",
      //   homeworld: "https://swapi.dev/api/planets/1/",
      //   films: [
      //     "https://swapi.dev/api/films/1/",
      //     "https://swapi.dev/api/films/2/",
      //     "https://swapi.dev/api/films/3/",
      //     "https://swapi.dev/api/films/6/",
      //   ],
      //   species: [],
      //   vehicles: [
      //     "https://swapi.dev/api/vehicles/14/",
      //     "https://swapi.dev/api/vehicles/30/",
      //   ],
      //   starships: [
      //     "https://swapi.dev/api/starships/12/",
      //     "https://swapi.dev/api/starships/22/",
      //   ],
      //   created: "2014-12-09T13:50:51.644000Z",
      //   edited: "2014-12-20T21:17:56.891000Z",
      //   url: "https://swapi.dev/api/people/1/",
    };

    const result = await swapiGetter(1);
    console.log(result);
    expect(result).toEqual(expectedCharacter);
    // expect(mock.Axios).toBeCalledTimes(1);
  });
});
