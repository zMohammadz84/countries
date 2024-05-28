import { CountryType } from "@/types/CountryType";
import React from "react";
import CountryCard from "./CountryCard";
import getCountries from "@/services/getCountries";

type Props = {
  search: string;
  filterBy: string;
};

export default async function CountriesList({ filterBy, search }: Props) {
  let finalCountriesData: CountryType[] | null = null;
  const countries: CountryType[] = await getCountries();

  // Filter And Search Feature
  if (search && filterBy === "") {
    finalCountriesData = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  } else if (filterBy && search === "") {
    finalCountriesData = countries.filter(
      (country) => country.region === filterBy
    );
  } else if (filterBy !== "" && search !== "") {
    finalCountriesData = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(search.toLowerCase()) &&
        country.region === filterBy
    );
  } else {
    finalCountriesData = countries;
  }

  return (
    <>
      {finalCountriesData.length === 0 ? (
        <div className="flex justify-center items-center text-3xl h-96">
          Not Found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 xl:gap-14 mb-10">
          {finalCountriesData?.map((country, index) => (
            <CountryCard key={index} {...country} />
          ))}
        </div>
      )}
    </>
  );
}
