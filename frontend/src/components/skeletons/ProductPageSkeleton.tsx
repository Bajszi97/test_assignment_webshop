const ProductPageSkeleton: React.FC = () => {
    return (
        <div className="flex py-5 md:py-20 flex-col md:flex-row">
            <div className="flex justify-center mb-10 md:justify-end md:basis-7/12">
                <div className="flex flex-col-reverse w-full md:w-auto md:flex-row md:max-w-[580px] md:max-h-[580px]">
                    <div className="flex flex-row flex-nowrap px-5 md:px-0 gap-x-5 md:flex-col md:h-full md:min-w-fit md:gap-x-0 md:gap-y-5 md:pr-5" >
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="size-20 bg-gray-200 animate-pulse rounded-md">

                            </div>
                        ))}
                    </div>
                    <div className="relative flex items-center w-[480px] h-[60vh] md:h-min min-h-[480px] mb-5 lg:mb-5 bg-gray-200 animate-pulse">
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:justify-start md:basis-5/12 md:ps-10">
                <div className="flex w-74 flex-col gap-y-5">
                    <div className="bg-gray-200 animate-pulse rounded-md h-7 w-42"></div>

                    <div className="bg-gray-200 animate-pulse rounded-md h-32 w-64"></div>

                    <div className="bg-gray-200 animate-pulse rounded-md h-7 w-24"></div>

                    <div className="mb-12 bg-gray-200 animate-pulse rounded-md h-14 w-full">

                    </div>
                    <div className="font-roboto space-y-2">
                        <div className="bg-gray-200 animate-pulse rounded-md h-6 w-full"></div>
                        <div className="bg-gray-200 animate-pulse rounded-md h-6 w-full"></div>
                        <div className="bg-gray-200 animate-pulse rounded-md h-6 w-full"></div>
                        <div className="bg-gray-200 animate-pulse rounded-md h-6 w-[33%]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageSkeleton;