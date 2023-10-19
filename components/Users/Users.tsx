import axios from "axios";

interface User {
  username: string;
  name: string;
  email: string;
  coolness?: number;
}

export async function loadUser(username: string): Promise<User | undefined> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?`
    );
    const user: User = response.data;
    return user;
  } catch (error) {
    console.error("Error loading user:", error);
    return undefined;
  }
}

export async function loadUserData(username: string): Promise<User> {
  const user = await loadUser(username);

  if (!user) {
    throw new Error("No user found");
  }

  user.coolness = username === "antfu7" ? 100 : -1;

  return user;
}
