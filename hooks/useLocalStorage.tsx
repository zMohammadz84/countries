"use client";
import { Dispatch, useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialState: T
): [T, Dispatch<T>] {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return;
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
