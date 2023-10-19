import { describe, test, expect, vi } from "vitest";
import { loadAnthonyUserData } from "../AnthonyUsers/AnthonyUsers";

// vi.mock("./load-user-data", () => {
//   return {
//     loadUserData() {
//       return {
//         coolness: -1,
//         favoriteFood: "boiled spinach",
//         name: "Alan",
//         projects: [],
//         snacks: false,
//         username: "testuser",
//       };
//     },
//   };
// });

describe("loadAnthonyUserDetails", () => {
  test("loads user data as expected", async () => {
    const user = await loadAnthonyUserData("antfu7");

    expect(user).toMatchInlineSnapshot(`
      {
        "coolness": 100,
        "favoriteFood": "sushi",
        "name": "Anthony",
        "projects": [
          "vitest",
          "vite",
        ],
        "snacks": true,
        "username": "antfu7",
      }
    `);
  });

  test("sets coolness level appropriately", async () => {
    const jason = await loadAnthonyUserData("jlengstorf");
    const anthony = await loadAnthonyUserData("antfu7");

    expect(jason.coolness).toBe(-1);
    expect(anthony.coolness).toBe(100);
  });

  test("throws an error for nonexistent users", async () => {
    expect(
      async () => await loadAnthonyUserData("fakeuser")
    ).rejects.toThrowError("no user found");
  });
});
