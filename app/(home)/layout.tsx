import FilterSelect, {
  FilterSelectSkeleton,
} from "@/components/modules/FilterSelect";
import SearchBox, { SearchBoxSkeleton } from "@/components/ui/SearchBox";
import React, { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-8 my-10 md:flex-row md:justify-between md:my-10">
        <Suspense fallback={<SearchBoxSkeleton />}>
          <SearchBox />
        </Suspense>
        <Suspense fallback={<FilterSelectSkeleton />}>
          <FilterSelect />
        </Suspense>
      </div>
      {children}
    </>
  );
}
