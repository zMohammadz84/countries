"use client";
import { Input } from "@nextui-org/input";
import { InputProps } from "@nextui-org/input";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {} & InputProps;

export default function CustomInput({ ...rest }: Props) {
  // ClassNames
  const { classNames }: Pick<Props, "classNames"> = {
    classNames: {
      base: twMerge("", rest.classNames?.base),
      inputWrapper: twMerge(
        "bg-custom-primary-color rounded-md data-[hover=true]:bg-custom-primary-color group-data-[focus=true]:bg-custom-primary-color h-12 px-5",
        rest.classNames?.inputWrapper
      ),
      input: twMerge("", rest.classNames?.input),
    },
  };

  // Return Component
  return <Input {...rest} classNames={classNames} />;
}
