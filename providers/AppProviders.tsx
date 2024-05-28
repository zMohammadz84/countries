"use client";
import DarkModeProvider from "@/context/DarkModeContext";
import { NextUIProvider } from "@nextui-org/system";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AppProviders({ children }: Props) {
  return (
    <NextUIProvider>
      <DarkModeProvider>{children}</DarkModeProvider>
    </NextUIProvider>
  );
}
