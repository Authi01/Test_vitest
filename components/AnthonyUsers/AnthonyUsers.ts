interface User {
  username: string;
  name: string;
  projects: string[];
  coolness?: number;
  favoriteFood: string;
  snacks: boolean;
}

async function loadAnthonyUser(username: string): Promise<User | undefined> {
  const users: User[] = [
    {
      username: "antfu7",
      name: "Anthony",
      projects: ["vitest", "vite"],
      favoriteFood: "sushi",
      snacks: true,
    },
    {
      username: "jlengstorf",
      name: "Jason",
      projects: ["burgers", "cheese"],
      favoriteFood: "pizza",
      snacks: true,
    },
  ];

  return users.find((user) => user.username === username);
}

export async function loadAnthonyUserData(username: string) {
  const user = await loadAnthonyUser(username);

  if (!user) {
    throw new Error("no user found");
  }

  user.coolness = username === "antfu7" ? 100 : -1;

  return user;
}
