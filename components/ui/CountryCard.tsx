"use client";

import { CountryType } from "@/types/CountryType";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {} & CountryType;

export default function CountryCard({
  capital,
  flags,
  name,
  population,
  region,
}: Props) {
  return (
    <Link href={`/${name}`}>
      <Card className="bg-custom-primary-color rounded-md">
        <CardHeader className="p-0 overflow-hidden flex justify-center items-start rounded-none">
          <Image src={flags.svg} alt={name} height={250} width={500} priority />
        </CardHeader>
        <CardBody className="p-6">
          <h3 className="font-bold text-xl md:text-lg">{name}</h3>
          <div className="flex flex-col gap-3 mt-6 md:text-sm">
            <div>
              <span className="font-bold">Population : </span>
              <span>{population.toLocaleString()}</span>
            </div>
            <div>
              <span className="font-bold">Region : </span>
              <span>{region}</span>
            </div>
            <div>
              <span className="font-bold">Capital : </span>
              <span>{capital}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
