import React from "react";
import ChangeThemeButton from "./ChangeThemeButton";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-custom-primary-color h-16 sticky top-0 z-20 shadow-md">
      <div className="flex justify-between items-center container  h-full">
        <h1 className="text-xl font-bold">Where in the world ?</h1>
        <ChangeThemeButton />
      </div>
    </header>
  );
}
