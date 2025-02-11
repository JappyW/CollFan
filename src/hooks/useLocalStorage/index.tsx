'use client';
import { getValueFromLocalStorage, logError } from "@/lib/utils";
import { useEffect, useState } from "react";

const isServer = typeof window === "undefined";

export function useLocalStorageState<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState(() => defaultValue);

  const initialize = () => {
    if (isServer) {
      return defaultValue;
    }
    const item = getValueFromLocalStorage(key, defaultValue);
    return item;
  };

  useEffect(() => {
    if (!isServer) {
      setStoredValue(initialize());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      logError("Error setting local storage value", error as Error);
    }
  };
  return [storedValue, setValue];
}
