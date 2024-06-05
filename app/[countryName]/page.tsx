import BackButton from "@/components/ui/BackButton";
import getACountry from "@/services/getACountry";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

//  Types
type MetaDataPropsType = {
  params: { countryName: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

type SingleCountryPageType = {
  params: {
    countryName: string;
  };
};

// Meta Data
export async function generateMetadata({
  params,
  searchParams,
}: MetaDataPropsType): Promise<Metadata> {
  const countryName = decodeURIComponent(params.countryName);
  const country = await getACountry(countryName);
  const { flags, name } = country[0];
  return {
    title: name,
    icons: {
      icon: flags.svg,
    },
  };
}

export default async function SingleCountryPage({
  params,
}: SingleCountryPageType) {
  const countryName = decodeURIComponent(params.countryName);
  const country = await getACountry(countryName);
  console.log(country);
  const {
    borders,
    capital,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    nativeName,
    topLevelDomain,
  } = country[0];

  return (
    <section className="grid grid-cols-1 gap-10 my-10 lg:grid-cols-2">
      <div className="lg:col-span-2">
        <BackButton />
      </div>
      <div>
        <Image src={flags.svg} alt={name} height={250} width={500} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <h3 className="font-bold text-xl md:col-span-2 md:text-3xl">{name}</h3>
        <div className="flex flex-col gap-3">
          <div>
            <span className="font-bold">Native Name : </span>
            <span>{nativeName}</span>
          </div>
          <div>
            <span className="font-bold">Population : </span>
            <span>{population.toLocaleString()}</span>
          </div>
          <div>
            <span className="font-bold">Region : </span>
            <span>{region}</span>
          </div>
          <div>
            <span className="font-bold">Su Region : </span>
            <span>{subregion}</span>
          </div>
          <div>
            <span className="font-bold">Capital : </span>
            <span>{capital}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <span className="font-bold">Top Level Domain : </span>
            {topLevelDomain?.map((domain, index) => (
              <span key={index}>{domain} , </span>
            ))}
          </div>
          {!!currencies?.length && (
            <>
              <div>
                <span className="font-bold">Currency Name : </span>
                <span>{currencies[0].name}</span>
              </div>
              <div>
                <span className="font-bold">Currency Symbol : </span>
                <span>{currencies[0]?.symbol}</span>
              </div>
            </>
          )}

          <div>
            <span className="font-bold">Languages : </span>
            {languages?.map((language, index) => (
              <span key={index}>{language.name} , </span>
            ))}
          </div>
        </div>
        {!!borders?.length && (
          <div className="flex flex-col gap-5 md:flex-row md:col-span-2 md:items-start">
            <span className="font-bold">Border Countries : </span>
            <div className="flex gap-2 flex-wrap md:max-w-96">
              {borders?.map((border, index) => (
                <span
                  key={index}
                  className="flex justify-center items-center bg-custom-primary-color rounded-md px-4 py-1 shadow-md"
                >
                  {border}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
