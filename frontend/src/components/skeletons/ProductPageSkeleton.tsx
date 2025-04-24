export const ProductPageSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col py-5 md:flex-row md:py-20">
      <div className="mb-10 flex justify-center md:basis-7/12 md:justify-end">
        <div className="flex w-full flex-col-reverse md:max-h-[580px] md:w-auto md:max-w-[580px] md:flex-row">
          <div className="flex flex-row flex-nowrap gap-x-5 px-5 md:h-full md:min-w-fit md:flex-col md:gap-x-0 md:gap-y-5 md:px-0 md:pr-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="size-20 animate-pulse rounded-md bg-gray-200"
              ></div>
            ))}
          </div>
          <div className="relative mb-5 flex h-[60vh] min-h-[480px] w-[480px] animate-pulse items-center bg-gray-200 md:h-min lg:mb-5"></div>
        </div>
      </div>
      <div className="flex justify-center md:basis-5/12 md:justify-start md:ps-10">
        <div className="flex w-74 flex-col gap-y-5">
          <div className="h-7 w-42 animate-pulse rounded-md bg-gray-200"></div>
          <div className="h-32 w-64 animate-pulse rounded-md bg-gray-200"></div>
          <div className="h-7 w-24 animate-pulse rounded-md bg-gray-200"></div>
          <div className="mb-12 h-14 w-full animate-pulse rounded-md bg-gray-200"></div>
          <div className="space-y-2 font-roboto">
            <div className="h-6 w-full animate-pulse rounded-md bg-gray-200"></div>
            <div className="h-6 w-full animate-pulse rounded-md bg-gray-200"></div>
            <div className="h-6 w-full animate-pulse rounded-md bg-gray-200"></div>
            <div className="h-6 w-[33%] animate-pulse rounded-md bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
