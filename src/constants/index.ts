import { Diamond, NavBarLink } from "@/types";

export const RAWG_API_URL = "https://api.rawg.io/api";
export const RAWG_GAMES_API_URL = `${RAWG_API_URL}/games`;
export const RAWG_CREATORS_API_URL = `${RAWG_API_URL}/creators`;

export const NO_FALLBACK = () => undefined;

export enum LOCAL_STORAGE_KEYS {
  BALANCE_AMOUNT = "BALANCE_AMOUNT",
  DIAMOND_AMOUNT = "DIAMOND_AMOUNT",
}

export const DEFAULT_PAGE_SIZE = 10;

export const MAX_DISPLAYED_BALANCE = 99999;
export const MAX_DISPLAYED_DIAMONDS = 99999;

export const TOAST_DURATION = 2000;

export const DEFAULT_CACHE_POLICY = "force-cache";

export const navBarLinks: NavBarLink[] = [
  { href: "/diamonds", name: "Diamonds", authedOnly: true },
  { href: "/creators", name: "Creators", authedOnly: false },
  { href: "/games", name: "Games", authedOnly: false },
  { href: "/account", name: "Account", authedOnly: true },
  { href: "/login", name: "Sign In", unathedOnly: true, authedOnly: false },
];

export const defaultDiamonValues: Diamond[] = [
  {
    amount: 100,
    url: "/diamond.png",
  },
  {
    amount: 500,
    url: "/diamond.png",
    mostPopular: true,
  },
  {
    amount: 300,
    url: "/diamond.png",
  },
];
