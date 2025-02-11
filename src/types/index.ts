import { User } from "next-auth";

export type CustomUser = User & { password: string };
export type NavBarLink = {
  href: string;
  name: string;
  authedOnly?: boolean;
  unathedOnly?: boolean;
};

export type Diamond = {
  amount: number;
  url: string;
  mostPopular?: boolean;
};

export type BaseRAWGType = {
  id: number;
  name: string;
  slug: string;
  image: string;
  games_count: number;
};

export type RAWGResponse<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
};

export type MetaCriticPlatforms = {
  metascore: number;
  url: string;
};

export type ESRBRating = {
  id: number;
  slug: string;
  name: string;
};

export type Platform = {
  id: number;
  slug: string;
  name: string;
};

export type Requirements = {
  minimum: string;
  recommended: string;
};

export type Sreenshots = {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
};

export type Platforms = { platform: Platform; released_at: string; requirements: Requirements }[];

export type Reactions = any;

export type GameDetailsType = Omit<Game, "metacritic"> & {
  name_original: string;
  description: string;
  metacritic_platforms: {};
  background_image_additional: string;
  website: string;
  reactions: Record<string, Reactions>;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  developers: Omit<Creator, "image">[];
  publishers: Omit<Creator, "image">[];
  genres: BaseRAWGType[];
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Record<string, number>;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: Record<string, number>;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating?: Record<string, number>;
  platforms: Platforms;
};

export type Creator = BaseRAWGType & {
  image: string;
};

export type CreatorDetailsType = Creator & {
  description: string;
  reviews_count: number;
  rating: string;
  rating_top: number;
  updated: string;
};
