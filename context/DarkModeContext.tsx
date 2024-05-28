"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Types
type Props = {
  children: ReactNode;
};

type ThemeContextType = "light" | "dark";

type ContextType = {
  theme: null | ThemeContextType;
  setTheme: Dispatch<ThemeContextType>;
};

// Context
const DarkModeContext = createContext<ContextType>({
  theme: null,
  setTheme: () => {},
});

// Component
export default function DarkModeProvider({ children }: Props) {
  const [theme, setTheme] = useLocalStorage<ThemeContextType>("theme", "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <DarkModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useTheme = () => {
  const themeContext = useContext(DarkModeContext);

  if (!themeContext) {
    throw new Error(
      "useTheme has to be used within <DarkModeContext.Provider>"
    );
  }

  return themeContext;
};
