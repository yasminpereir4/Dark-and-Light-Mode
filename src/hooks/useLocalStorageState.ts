import { useEffect, useState } from "react";

export function useLocalStorageState<T>(
  key: string,
  initialState: T | (() => T),
) {
  const [state, setState] = useState<T>(() => {
    const localStorageState = localStorage.getItem(key);
    if (!localStorageState) {
      return typeof initialState === "function"
        ? (initialState as () => T)()
        : initialState;
    }
    return JSON.parse(localStorageState);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
}
