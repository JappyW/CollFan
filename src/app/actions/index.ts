"use server";

import { signIn, signOut } from "@/auth";
import { DEFAULT_CACHE_POLICY, DEFAULT_PAGE_SIZE, RAWG_CREATORS_API_URL, RAWG_GAMES_API_URL } from "@/constants";
import { addParamsToURL, logError } from "@/lib/utils";
import { Creator, CreatorDetails, Game, GameDetails, RAWGResponse } from "@/types";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action") as string | undefined;
  if (action) {
    await signIn(action, { redirectTo: "/home" });
  } else {
    throw new Error("Action is required for social login");
  }
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData: FormData) {
  console.log("formData", formData);

  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export async function fetchRAWGData(
  url: string,
  options?: RequestInit,
  queryParams?: Record<string, any>
): Promise<Response> {
  const urlWithKey = new URL(url);
  urlWithKey.searchParams.set("key", process.env.NEXT_PUBLIC_RAWG_IO_KEY!);

  const urlWithParams = addParamsToURL(urlWithKey, queryParams);

  return fetch(urlWithParams, options);
}

export async function fetchGames(
  cache: RequestCache = DEFAULT_CACHE_POLICY,
  pageSize = DEFAULT_PAGE_SIZE
): Promise<RAWGResponse<Game> | undefined> {
  try {
    const response = await fetchRAWGData(RAWG_GAMES_API_URL, { cache }, { page_size: pageSize });
    return response.json();
  } catch (error) {
    logError("Error fetching games", error as Error);
  }
}

export async function fetchGameDetails(
  id: string,
  cache: RequestCache = DEFAULT_CACHE_POLICY
): Promise<GameDetails | undefined> {
  try {
    const response = await fetchRAWGData(`${RAWG_GAMES_API_URL}/${id}`, { cache });
    return response.json();
  } catch (error) {
    logError("Error fetching games", error as Error);
  }
}

export async function fetchCreators(
  cache: RequestCache = DEFAULT_CACHE_POLICY,
  pageSize = DEFAULT_PAGE_SIZE
): Promise<RAWGResponse<Creator> | undefined> {
  try {
    const response = await fetchRAWGData(RAWG_CREATORS_API_URL, { cache }, { page_size: pageSize });
    return response.json();
  } catch (error) {
    logError("Error fetching games", error as Error);
  }
}

export const fetchCreatorDetails = async (
  id: string,
  cache: RequestCache = DEFAULT_CACHE_POLICY
): Promise<CreatorDetails | undefined> => {
  try {
    const response = await fetchRAWGData(`${RAWG_CREATORS_API_URL}/${id}`, { cache });
    return response.json();
  } catch (error) {
    logError("Error fetching games", error as Error);
  }
};
