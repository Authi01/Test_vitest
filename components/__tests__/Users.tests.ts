import { describe, expect, test } from "vitest";
import axios from "axios";
import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { loadUserData } from "../Users/Users";

test("loads user data as expected", async () => {
  const user = await loadUserData("antfu7");

  expect(user).toMatchInlineSnapshot(`
  [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
]
  `);
});
