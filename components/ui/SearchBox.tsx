"use client";
import { HiOutlineSearch } from "react-icons/hi";
import CustomInput from "../modules/CustomInput";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { motion, Variants } from "framer-motion";
import useSetSearchParams from "@/hooks/useSetSearchParams";
import { useSearchParams } from "next/navigation";
import { Spinner } from "@nextui-org/spinner";
import { Skeleton } from "@nextui-org/skeleton";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchValueParam = searchParams.get("search");
  const [search, setSearch] = useState<string>(searchValueParam || "");
  const [value] = useDebounce(search, 500);
  useSetSearchParams("search", value.trim());

  // Search Icon Variant
  const iconVariants: Variants = {
    default: { rotate: 0 },
    hover: { rotate: 360 },
  };

  return (
    <motion.div whileHover="hover" className="md:w-[500px]">
      <CustomInput
        classNames={{
          input: "text-md",
          inputWrapper: "shadow-md",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country . . ."
        startContent={
          value !== search ? (
            <Spinner
              classNames={{
                wrapper: "w-7 h-7 sm:w-6 sm:h-6 mr-4",
                circle1: "border-b-custom-text-color",
                circle2: "border-b-custom-text-color",
              }}
            />
          ) : (
            <motion.span
              variants={iconVariants}
              transition={{ duration: 0.3 }}
              className=" flex justify-center items-center mr-4 w-7 h-7 sm:w-6 sm:h-6"
            >
              <HiOutlineSearch className="w-7 h-7 sm:w-6 sm:h-6" />
            </motion.span>
          )
        }
      />
    </motion.div>
  );
}

// SearchBox Skeleton
export function SearchBoxSkeleton() {
  return (
    <Skeleton
      classNames={{
        base: "dark:bg-custom-primary-color rounded-md",
      }}
    >
      <div className="h-12 md:w-[500px]"></div>
    </Skeleton>
  );
}
