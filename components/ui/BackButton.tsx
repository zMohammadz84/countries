"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackButton() {
  const { back } = useRouter();

  return (
    <button
      onClick={back}
      className="flex justify-center items-center gap-3 bg-custom-primary-color rounded-md w-24 px-4 py-2 shadow-md"
    >
      <FaArrowLeftLong />
      <span>Back</span>
    </button>
  );
}
