"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function useSetSearchParams(
  queryName: string,
  queryValue: string
) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentSearchParams = new URLSearchParams(searchParams);

    if (!queryValue) {
      currentSearchParams.delete(queryName);
    } else {
      currentSearchParams.set(queryName, queryValue);
    }

    const search = currentSearchParams.toString();
    const query = search ? `?${search}` : "";

    push(`/${query}`, {
      scroll: false,
    });
  }, [queryValue, push]);

  return null;
}
