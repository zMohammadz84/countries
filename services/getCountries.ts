import { CountryType } from "@/types/CountryType";
import https from "./https";

export default async function getCountries(): Promise<CountryType[]> {
  const { data: countries } = await https.get("/countries");
  return countries;
}
