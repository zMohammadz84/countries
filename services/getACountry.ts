import { CountryType } from "@/types/CountryType";
import https from "./https";

export default async function getACountry(
  countryName: string
): Promise<CountryType[]> {
  const { data: country } = await https.get(`/countries/?name=${countryName}`);

  return country;
}
