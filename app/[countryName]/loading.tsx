import { Skeleton } from "@nextui-org/skeleton";

export default function loading() {
  return (
    <section className="grid grid-cols-1 gap-10 my-10 lg:grid-cols-2 ">
      <Skeleton
        classNames={{
          base: "dark:bg-custom-primary-color rounded-md w-24 h-12 lg:col-span-2 ",
        }}
      ></Skeleton>
      <Skeleton
        classNames={{
          base: "dark:bg-custom-primary-color rounded-md h-80 max-w-[500px]",
        }}
      ></Skeleton>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Skeleton
          classNames={{
            base: "dark:bg-custom-primary-color rounded-md md:col-span-2 w-44 h-8",
          }}
        ></Skeleton>
        <div className="flex flex-col gap-3">
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-44 h-5",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-44 h-5",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-44 h-5",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-44 h-5",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-44 h-5",
            }}
          ></Skeleton>
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-44 h-5",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-44 h-5",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-44 h-5",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-44 h-5",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-44 h-5",
            }}
          ></Skeleton>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:col-span-2 md:items-center">
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md  w-44 h-6",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-24 h-8",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-24 h-8",
            }}
          ></Skeleton>
          <Skeleton
            classNames={{
              base: "dark:bg-custom-primary-color rounded-md w-24 h-8",
            }}
          ></Skeleton>
        </div>
      </div>
    </section>
  );
}
