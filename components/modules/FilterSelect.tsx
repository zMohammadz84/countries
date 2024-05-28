"use client";
import useSetSearchParams from "@/hooks/useSetSearchParams";
import { Select, SelectItem } from "@nextui-org/select";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Skeleton } from "@nextui-org/skeleton";

const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function FilterSelect() {
  const searchParams = useSearchParams();
  const filterSearchParams = searchParams.get("filterBy");
  const [filterBy, setFilterBy] = useState(filterSearchParams || "");
  useSetSearchParams("filterBy", filterBy);

  return (
    <Select
      selectedKeys={[filterBy]}
      onChange={(e) => setFilterBy(e.target.value)}
      placeholder="Filter by Region"
      aria-label="Filter by Region"
      classNames={{
        popoverContent: "bg-custom-primary-color rounded-md ",
        trigger:
          "bg-custom-primary-color data-[hover=true]:bg-custom-primary-color rounded-md h-12 shadow-md",
        value: "text-md",
        base: "max-w-[200px]",
        label: "text-md group-data-[filled=true]:text-sm",
      }}
    >
      {continents.map((continent) => (
        <SelectItem
          className="data-[selectable=true]:focus:bg-custom-background-color"
          key={continent}
          value={continent}
        >
          {continent}
        </SelectItem>
      ))}
    </Select>
  );
}

// FilterSelect Skeleton
export function FilterSelectSkeleton() {
  return (
    <Skeleton
      classNames={{
        base: "dark:bg-custom-primary-color rounded-md max-w-[200px]",
      }}
    >
      <div className="h-12 "></div>
    </Skeleton>
  );
}
