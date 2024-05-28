import CountriesList from "@/components/ui/CountriesList";

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
