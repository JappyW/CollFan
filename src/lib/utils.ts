import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then((res) => res.json());

export const addParamsToURL = (url: URL, queryParams?: Record<string, any>) => {
  let URLWithParams = new URL(url);

  if (queryParams != null) {
    Object.entries(queryParams).forEach(([key, value]) => {
      return URLWithParams.searchParams.set(key, value);
    });
  }

  return URLWithParams;
};

export const capitalize = (text: string) => {
  if (!text.length) return;

  const [firstLetter, ...rest] = text;
  return `${firstLetter.toUpperCase()}${rest.join("")}`;
};

export const pluralize = (word: string, numberOfItems: number, endWith?: string) => {
  if (numberOfItems > 1) {
    return `${word}${endWith || "s"}`;
  }

  return word;
};

//can be changed to use any logging service in the future
export const logError = (text: string, error: Error, errorInfo?: any) => {
  console.error(text, error, errorInfo);
};

export const getValueFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const value = localStorage.getItem(key);

    if (value == null) {
      return defaultValue;
    }

    return JSON.parse(value);
  } catch (error) {
    logError("Error parsing value from localStorage", error as Error);
    return defaultValue;
  }
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const shortDate = (date: string) => {
  const dateObj = new Date(date);
  return `${dateObj.getDate()} ${months[dateObj.getMonth()]}, ${dateObj.getFullYear()}`;
};

export const parseIntWithFallback = (number: string | number, fallback: number = 0) => {
  if (isNaN(Number(number))) {
    return fallback;
  }

  return Number(number);
};

