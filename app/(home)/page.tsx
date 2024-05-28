import CountriesList from "@/components/ui/CountriesList";
import { Metadata } from "next";

// Meta Tags
export const metadata: Metadata = {
  title: "Countries List",
  description: "List of all countries with their information",
};

type HomePageType = {
  searchParams: {
    search: string | string[] | undefined;
    filterBy: string | string[] | undefined;
  };
};

export default async function Home({ searchParams }: HomePageType) {
  const search = (searchParams.search as string) || "";
  const filterBy = (searchParams.filterBy as string) || "";

  return <CountriesList search={search} filterBy={filterBy} />;
}
