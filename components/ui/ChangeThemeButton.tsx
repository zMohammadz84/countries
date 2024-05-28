"use client";
import { useTheme } from "@/context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Skeleton } from "@nextui-org/skeleton";

type Props = {};

export default function ChangeThemeButton({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Skeleton className="rounded-lg">
        <button className="py-4 w-28 rounded-lg bg-default-300"></button>
      </Skeleton>
    );

  return (
    <motion.button
      className="flex justify-center items-center gap-2 py-4"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <motion.span className="w-5 h-5 overflow-hidden relative lg:w-6 lg:h-6">
        <HiMoon
          className={` w-5 h-5 lg:w-6 lg:h-6 origin-bottom  ${
            theme === "dark" ? " animate-dark" : " animate-light"
          }`}
        />
        <HiSun
          className={`absolute top-0 w-5 h-5 lg:w-6 lg:h-6 origin-bottom ${
            theme === "light" ? " animate-dark" : " animate-light"
          }`}
        />
      </motion.span>
      {theme === "dark" ? <span>Dark Mode</span> : <span>Light Mode</span>}
    </motion.button>
  );
}
