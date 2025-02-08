import { CustomUser } from "@/types";

export const RAWG_API_URL = "https://api.rawg.io/api";
export const RAWG_GAMES_API_URL = `${RAWG_API_URL}/games`;
export const RAWG_CREATORS_API_URL = `${RAWG_API_URL}/creators`;

export const users: CustomUser[] = [
  {
    id: "1",
    email: "fanatic@email.com",
    password: "hello_world",
  },
  {
    id: "2",
    email: "test@email.com",
    password: "hello_world",
  },
  {
    id: "3",
    email: "bob@email.com",
    password: "hello_world",
  },
];

export const getUserByEmail = (email: string | undefined): CustomUser | undefined => {
  const found = users.find((user) => user.email === email);
  return found;
};

export enum LOCAL_STORAGE_KEYS {
  GAME_LIST = "GAME_LIST",
}

export const DEFAULT_PAGE_SIZE = 10;

export const DEFAULT_CACHE_POLICY = "force-cache";
